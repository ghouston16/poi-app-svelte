<script lang="ts">
    import 'leaflet/dist/leaflet.css';
    import { onMount, getContext } from "svelte";
    import {push} from 'svelte-spa-router';
    import {poi} from '../stores';
    const poiService = getContext("PoiService");
    import {LeafletMap} from '../services/leaflet-map';

    let categoryList = [];
   // let lat = 0;
   //let long = 0;
    let creator = "";
    let name = "";
    let description = "";
    let selectedMethod = 0;
    let selectedCategory = 0;
    //let categories = ["North", "South", "East", "West"];
    let errorMessage = "";
    let image = "";
    //let creator = ""
    let map;
    let poiId = $poi._id;
    let file;
    onMount(async () => {
        categoryList = await poiService.getCategories()
        const candidatePoi = await poiService.getPoiById($poi._id);
        console.log(categoryList)
    });

    async function uploadImage(poiId , file) {
        console.log(file);
        const success = await poiService.addImage($poi._id, file);

        if (success) {
            push('/pois')
        } else {
            errorMessage = "Poi not completed - some error occurred";
        }
    }

    </script>


<form on:submit|preventDefault={uploadImage} class="uk-form-stacked uk-text-left">
    <h3 class="uk-heading-divider uk-text-center">
        Add a POI </h3>
    <div class="uk-grid uk-grid-stack">
        <div class="uk-width-1@m">
            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Name</label
                >
                <div class="uk-form-controls">
                    <input
                            bind:value={file}
                            class="uk-input"
                            id="form-stacked-text"
                            type="file"
                            name="image"
                            placeholder="Upload your File"
                    />

                </div>
            </div>
                    <div class=" uk-width-1@m">
                        <div class="uk-margin">
                            <button
                                    type="submit" value="Upload" class="uk-button uk-button-default"
                            >Create></button>
                        </div>
                    </div>
                </div>
            </div>
</form>