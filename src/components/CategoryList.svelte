<script>
  import { getContext, onMount } from "svelte";
  import { push } from "svelte-spa-router";
  import { category, poi } from "../stores";
  //import {category} from '../stores'
  const poiService = getContext("PoiService");
  let poiList = [];
  let message = "";
  let categoryList = [];
  import regexparam from "regexparam";

  onMount(async () => {
    categoryList = await poiService.getCategories();
  });

  async function categoryPoi(categoryId) {
    console.log(categoryId);
    const cat = await poiService.getCategoryById(categoryId);
    category.set(cat);
    let success = await poiService.getCategoryPois(categoryId);
    console.log(success);
    if (success) {
      //const poiList = await poiService.getPois()
      push(`/category`);
      // const poiList = await poiService.getPois()
    } else {
      message = "Error Trying to save settings";
    }
  }
  async function updateCategory(categoryId) {
    console.log(categoryId);
    const candidateCategory = await poiService.getCategoryById(categoryId);
    category.set(candidateCategory);
    console.log(candidateCategory);
    let success = await poiService.getCategoryById(categoryId);
    if (success) {
      push("/updatecategory");
      //console.log(success.data)
      //poi.set(success.data)
    }
  }

  async function deleteCategory(categoryId) {
    console.log(categoryId);
    let success = await poiService.deleteCategory(categoryId);
    if (success) {
      //const poiList = await poiService.getPois()
      categoryList = await poiService.getCategories();
      //  const poiList = await poiService.getPois()
    } else {
      message = "Error Trying to save settings";
    }
  }

  async function addCategory() {
    push("/addcategory");
  }
</script>

<h3 class="uk-heading-divider">Category List</h3>
<div class="uk-table uk-table-divider">
  <table class="uk-table">
    <thead>
      <th>Name</th>
    </thead>
    <tbody class="uk-text-left">
      {#if categoryList}
        {#each categoryList as category}
          <tr>
            <td>{category.name}</td>
            <td>
              <icon
                on:click={() => categoryPoi(`${category._id}`)}
                class="far fa-folder fa-1x"
                style="color:rgb(56,191,25)"
                title="View"
              />
            </td>
            <td>
              <icon
                on:click={() => updateCategory(`${category._id}`)}
                class="fas fa-pen-alt fa-1x"
                style="color:rgb(169,19,205)"
                title=""
              />
            </td>
            <td>
              <icon
                on:click={() => deleteCategory(`${category._id}`)}
                class="far fa-trash-alt fa-1x"
                style="color:rgb(220,7,55)"
                title="Delete"
              />
            </td>
          </tr>
          <tr />
        {/each}
      {/if}
      <td>
        <button
          on:click={() => addCategory()}
          class="submit uk-button uk-button-primary uk-button-xlarge uk-width-expand@m"
        >
          Add Category</button
        >
      </td>
    </tbody>
  </table>
  <div />
</div>
