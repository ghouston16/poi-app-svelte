<script>
    import ImageList from "../components/ImageList.svelte";
    import homer5 from "/src/assets/homer5.jpg";
    import {navBar, mainBar, subTitle, title} from "../stores"

    title.set("POI Services Inc.");
    subTitle.set("Poi Gallery");
    navBar.set({
    bar: mainBar
    });
</script>
  
<div class="uk-text-center" uk-grid>
  <div class="uk-width-expand@m">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
        <ImageList/>
      </div>
      </div>
    </div>