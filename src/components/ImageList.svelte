<script>
    import {getContext, onMount} from 'svelte'
    import {push} from 'svelte-spa-router'
    import {poi} from '../stores'
    import Poi from './Poi.svelte';
    const poiService = getContext("PoiService");
    let imageList = [];
    let message = "";
    let poiId = $poi._id;
   // let email = $user.email;
    //import {push} from 'svelte-spa-router'  

    onMount(async () => {
      imageList = await poiService.getImages($poi._id);
      console.log(imageList);
    });

    </script>
 <h3 class="uk-heading-divider">
    Poi Gallery </h3>
<div class="uk-child-width-1-4@s uk-flex uk-flex-center" uk-grid uk-height-match="target: .uk-card">
    {#if imageList}
    {#each imageList as image}
    <div>
        <div class="uk-card uk-card-default uk-card-small uk-text-center uk-text-baseline uk-animation-scale-up">
            <div class="uk-card-media-top">
                <img src="{image.url}">
            </div>
            <div>
                <div class="uk-card-footer">
                    <p> {image.public_id}</p>
                  
                </div>
            </div>
        </div>
    </div>
    {/each}
    {/if}
    </div>
