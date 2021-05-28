<script lang="ts">
    import {getContext, onMount} from "svelte";
    import {poi, user} from "../stores";
    import {push} from "svelte-spa-router";
    import ImageForm from "./ImageForm.svelte";

    let name = $poi.name;
    let description = $poi.description;
    let lat = $poi.lat;
    let long = $poi.long;
    let category = $poi.category;
    let image = $poi.image;
    let creator = $poi.creator;
    let message = "";
    let categoryList = [];
    let selectedCategory = 0;
    const poiService = getContext("PoiService");


    onMount(async () => {
        categoryList = await poiService.getCategories()
        const candidatePoi = await poiService.getPoiById($poi._id);

        console.log(categoryList)
    });


    async function save() {
        // const candidatePoi = await poiService.getPoiById($poi._id);
        let success = await poiService.updatePoi(
            name,
            description,
            categoryList[selectedCategory],
            lat,
            long,
            image,
            $poi.creator,
            $poi._id
        );
        if (success) {
            message = "Settings updated";
        } else {
            message = "Error Trying to save settings";
        }
    }

    async function removePoi() {
        let success = await poiService.deletePoi($poi._id)
        if (success) {
            push('/pois');
        } else {
            message = "Error Trying to save settings";
        }
    }

</script>

<form on:submit|preventDefault={save}>
    <div class="uk-margin uk-text-left">
        <div class="uk-margin">
            <label class="uk-form-label">Name</label>
            <div class="uk-inline uk-width-1-1">
                <span class="uk-form-icon" uk-icon="icon: user" />
                <input
                    bind:value={name}
                    class="uk-input uk-form-large"
                    type="text"
                    name="name"
                    placeholder={$poi.name}
                />
            </div>
        </div>
        <div class="uk-margin">
            <label class="uk-form-label">Description</label>
            <div class="uk-inline uk-width-1-1">
                <span class="uk-form-icon" uk-icon="icon: user" />
                <input
                    bind:value={description}
                    class="uk-input uk-form-large"
                    type="text"
                    name="description"
                    placeholder={$poi.description}
                />
            </div>
        </div>
        <label class="uk-form-label">Latitude</label>
        <div class="uk-inline uk-width-1-1">
            <span class="uk-form-icon" uk-icon="icon: location" />
            <input
                bind:value={lat}
                class="uk-input uk-form-large"
                type="text"
                name="lat"
                placeholder={$poi.lat}
            />
        </div>
        <div class="uk-margin">
            <label class="uk-form-label">Longitude</label>
            <div class="uk-inline uk-width-1-1">
                <span class="uk-form-icon" uk-icon="icon: location" />
                <input
                    bind:value={long}
                    class="uk-input uk-form-large"
                    type="text"
                    name="long"
                    placeholder={$poi.long}
                />
            </div>
            <div class ="uk-margin">
                <label class="uk-form-label">Poi Image</label>
            <div class="uk-inline uk-width-1-1">
                <span class="uk-form-icon" uk-icon="icon: image" />
                <input
                    bind:value={image}
                    class="uk-input"
                    id="form-stacked-text"
                    type="string"
                    name="image"
                    placeholder={$poi.image}
                />
            </div>
        </div>
        <div class=" uk-width-1-2@m">
            <div class="uk-margin uk-text-left">
                <div class="uk-form-label">Select Category</div>
                <div class="uk-form-controls ">
                    {#each categoryList as category, i}
                        <label>
                            <input
                                bind:group={selectedCategory}
                                value={i}
                                class="uk-radio"
                                type="radio"
                                name="category"
                                placeholder={$poi.category}
                            />
                            {category.name}
                        </label>
                        <br />
                    {/each}
                </div>
            </div>
        </div>
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
<div class="uk-margin">
    <button
        on:click={removePoi}
        class="uk-button uk-button-danger uk-button-large uk-width-1-1"
        >Delete
    </button>
</div>
<div>
    <ImageForm/>
</div>
