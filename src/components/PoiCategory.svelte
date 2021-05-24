<script>
    import {getContext, onMount} from 'svelte'
    import {push} from 'svelte-spa-router'
    import {category, poi} from '../stores'
    const poiService = getContext("PoiService");
    let poiList = [];
    let message = "";
    //import {push} from 'svelte-spa-router'

    onMount(async () => {
      poiList = await poiService.getCategoryPois($category._id);
      console.log(poiList);
    });
    async function deletePoi(poiId) {
    console.log(poiId); 
    let success = await poiService.deletePoi(poiId)
    if (success) {
      //const poiList = await poiService.getPois()
      push('/categories')
     // const poiList = await poiService.get()
    } else {
      message = "Error Trying to save settings";
    }
  }
  </script>
  <div class="uk-margin uk-width-1xlarge uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
  <h3 class="uk-heading-divider">
    Category POIs: {$category.name} </h3>
    <table class="uk-table">
        <thead>
            <th>Name</th>
            <th>Category</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Creator</th>
            <th>Delete</th>
            </thead>
      <tbody class="uk-text-center">
        {#each poiList as poi}
          <tr>
            <td>
              {poi.name}
            </td>
            <td>
              {poi.category.name}
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
                <icon on:click={() => deletePoi(`${poi._id}`)} class="far fa-trash-alt fa-1x" style="color:rgb(220,7,55)" title="Delete"> </icon>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
 