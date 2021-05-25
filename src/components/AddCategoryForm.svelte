<script lang="ts">
    import { onMount, getContext } from "svelte";
    import {push} from 'svelte-spa-router';
    const poiService = getContext("PoiService");

    let name = "";
    //let categories = ["North", "South", "East", "West"];
    let errorMessage = "";
    let image = "";
    //let creator = ""


    async function createCategory() {
        const success = await poiService.addCategory(name) // Todo: add method to poiService
        console.log(success)
        if (success) {
            push('/categories');
        } else {
            errorMessage = "Add Category not completed - some error occurred";
        }
    }
</script>

<form on:submit|preventDefault={createCategory} class="uk-form-stacked uk-text-left">
    <h3 class="uk-heading-divider uk-text-center">
        Add a Category</h3>
    <div class="uk-grid uk-grid-stack">
        <div class="uk-width-1@m">
            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Name</label
                >
                <div class="uk-form-controls">
                    <input
                        bind:value={name}
                        class="uk-input"
                        id="form-stacked-text"
                        type="string"
                        name="name"
                        placeholder="Category Name"
                    />
                </div>
            </div>
            <div class=" uk-width-1@m">
            <div class="uk-margin">
                <button
                    class="submit uk-button uk-button-primary uk-button-xlarge uk-width-1-1"
                    >Create</button
                >
            </div>
            </div>
            {#if errorMessage}
                <div class="uk-text-left uk-text-small">
                    {errorMessage}
                </div>
            {/if}
        </div>
    </div>
</form>
