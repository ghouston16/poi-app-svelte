<script>
    import {getContext, onMount} from 'svelte'
    import {push} from 'svelte-spa-router'
    import {poi} from '../stores'
    const poiService = getContext("PoiService");
    let poiList = [];
    let message = "";

    onMount(async () => {
      poiList = await poiService.getPois();
      console.log(poiList);
    });

    async function deletePoi(poiId) {
    console.log(poiId); 
    let success = await poiService.deletePoi(poiId)
    if (success) {
      push('/categories');
    } else {
      message = "Error Trying to save settings";
    }
  }
  </script>
  
  <h3 class="uk-heading-divider">
    Poi List </h3>
  <div class="uk-table uk-table-divider">
    <table class="uk-table">
        <thead>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Creator</th>
            </thead>
      <tbody class="uk-text-left">
        {#each poiList as poi}
          <tr>
            <td>
              {poi.name}
            </td>
            <td>
              {poi.description}
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
                <button on:click={() => deletePoi(`${poi._id}`)} class="uk-button uk-button-danger uk-button-small uk-width-1-1">Delete Account </button>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>