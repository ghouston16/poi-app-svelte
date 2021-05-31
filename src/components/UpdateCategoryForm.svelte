<script lang="ts">
    import { getContext, onMount } from "svelte";
    import { poi, user, category } from "../stores";
    import { push } from "svelte-spa-router";
    let categoryId = $category._id;
    let name = $category.name;
   // let editCategory= { name: name};
    let message = "";
    let selectedCategory = 0;
    const poiService = getContext("PoiService");

    
    onMount(async () => {
        editCategory = await poiService.getCategoryById(categoryId);
        //console.log(category)
        //const candidatePoi = await poiService.getPoiById($poi._id)
       // console.log(categoryList)
    });


    async function save() {
       // const candidatePoi = await poiService.getPoiById($poi._id);
        let success = await poiService.updateCategory(
            name,
            $category._id
        );
        if (success) {
            push("/categories");
        } else {
            message = "Error Trying to save settings";
        }
    }
</script>

<form on:submit|preventDefault={save}>
    <h3 class="uk-card-title uk-text-left">Update Category: {$category.name}</h3>
    <div class="uk-margin uk-text-left">
        <div class="uk-margin">
            <label class="uk-form-label">Name</label>
            <div class="uk-inline uk-width-1-1">
                <span class="uk-form-icon" />
                <input
                    bind:value={name}
                    class="uk-input uk-form-large"
                    type="text"
                    name="name"
                    placeholder={$category.name}
                />
            </div>
    <div class="uk-margin">
        <button class="uk-button uk-button-primary uk-button-large uk-width-1-1"
            >Save Settings</button
        >
    </div>
    {#if message}
        <div class="uk-text-left uk-text-small">
            {message}
        </div>
    {/if}
</form>

