<script>
    import {getContext, onMount} from 'svelte'
    import {push} from 'svelte-spa-router'
    import regexparam from 'svelte-spa-router'
    import {poi} from '../stores'
    const poiService = getContext("PoiService");
    let poiList = [];
    let message = "";
    //import {push} from 'svelte-spa-router'

    onMount(async () => {
      poiList = await poiService.getPois();
      //console.log(poiList);
    });

    async function deletePoi(poiId) {
    console.log(poiId); 
    let success = await poiService.deletePoi(poiId)
    if (success) {
      poiList = await poiService.getPois();
    } else {
      message = "Error Trying to save settings";
    }
  }
  async function updatePoi(poiId){
  console.log(poiId); 
  const candidatePoi = await poiService.getPoiById(poiId);
  poi.set(candidatePoi)
  console.log(poi)
  let success= await poiService.getPoiById(poiId)
  if (success){
    push('/updatepoi')
    //console.log(success.data)
    //poi.set(success.data)
  }
  }
  async function viewPoi(poiId){
    let candidatePoi = await poiService.getPoiById(poiId)
    if (candidatePoi){
      poi.set(candidatePoi);
      push('/poi')
    } else {
        
    }
  }
  async function viewGallery(poiId){
        let candidatePoi = await poiService.getPoiById(poiId)
        console.log("Viewing" + poiId);
        poi.set(candidatePoi);
        if (candidatePoi){
            poi.set(candidatePoi);
            push('/gallery')
        } else {

        }
    }
  </script>

  <h3 class="uk-heading-divider">
    Poi List </h3>
    <table class="uk-table">
        <thead>
            <th>Name</th>
            <th>Category</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Creator</th>
            <th></th>
            <th></th>
            <th></th>
            </thead>
      <tbody class="uk-text-left">
      {#if poiList}
        {#each poiList as poi}
          <tr>
            <td>
              {poi.name}
            </td>
            <td>
              {#if poi.category}
              {poi.category.name}
              {/if}
            </td>
            <td>
               {poi.lat}
            </td>
            <td>
               {poi.long}
            </td>
            <td>
              {poi.creator.firstName} {poi.creator.lastName},  
              </td>
              <td>
                <icon on:click={() => viewPoi(`${poi._id}`)} class="far fa-folder fa-1x" style="color:rgb(56,191,25)" title="View"> </icon>
                </td>
              <td>
                <icon on:click={() => updatePoi(`${poi._id}`)} class="fas fa-pen-alt fa-1x" style="color:rgb(169,19,205)" title="Update"> </icon>
                </td>
              <td>
                  <icon on:click={() => viewGallery(`${poi._id}`)} class="fas fa-image fa-1x" style="color:rgb(80,7,55)" title="Gallery"> </icon>
              </td>
              <td>
                <icon on:click={() => deletePoi(`${poi._id}`)} class="far fa-trash-alt fa-1x" style="color:rgb(220,7,55)" title="Delete"> </icon>
                </td>
          </tr>
        {/each}
      {/if}
      </tbody>
    </table>