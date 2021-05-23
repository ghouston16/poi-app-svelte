<script>
    import {getContext, onMount} from 'svelte'
  
    const poiService = getContext("PoiService");
    let poiList = [];
  
    onMount(async () => {
      poiList = await poiService.getPois();
    });
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
              {poi.creator.lastName}, {poi.creator.firstName} 
              </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>