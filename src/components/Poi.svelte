<script>
    import {getContext, onMount} from 'svelte'
    import {push} from 'svelte-spa-router'
    import {category, poi} from '../stores'
    const poiService = getContext("PoiService");
    let message = "";
    //import {push} from 'svelte-spa-router'
/*
    onMount(async () => {
     const showPoi = await poiService.getPoiById($poi._id);
      console.log();
    });
    */

    async function deletePoi(poiId) {
    console.log(poiId); 
    //poiawait poiService.getPoiById(poiId)
    let success = await poiService.deletePoi(poiId)
    if (success) {
      //const poiList = await poiService.getPois()
      push("/pois")
     // const poiList = await poiService.get()
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
  </script>
<div class="uk-margin uk-width-1xlarge uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
    <h3 class="uk-heading-divider">
        Category POIs: {$poi.name} </h3>
    <table class="uk-table">
        <thead>
        <th>Name</th>
        <th>Category</th>
        <th>Latitude</th>
        <th>Longitude</th>
        <th>Creator</th>
        <th></th>
        <th></th>
        </thead>
        <tbody class="uk-text-left">
        <tr>
            <td>
                {$poi.name}
            </td>
            <td>
                {$poi.category.name}
            </td>
            <td>
                {$poi.lat}
            </td>
            <td>
                {$poi.long}
            </td>
            <td>
                {$poi.creator.firstName} {$poi.creator.lastName},
            </td>
            <td>
                <icon on:click={() => updatePoi( $poi._id)} class="fas fa-pen-alt fa-1x" style="color:rgb(169,19,205)" title="Update"> </icon></td>
            <td>
                <icon on:click={() => deletePoi($poi._id)} class="fas fa-trash-alt fa-1x" style="color:rgb(220,7,55)" title="Delete"> </icon></td>
        </tr>
        </tbody>
    </table>
</div>