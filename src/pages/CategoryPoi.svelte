<script>
    import PoiCategory from "../components/PoiCategory.svelte";
    import homer5 from "/src/assets/homer5.jpg";
    import {navBar, mainBar, subTitle, title} from "../stores"

    title.set("POI Services Inc.");
    subTitle.set("Latest POIs");
    navBar.set({
    bar: mainBar
    });
</script>
  
<div class="uk-container uk-margin">
  <div class="uk-child-width-expand uk-flex-center uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-expand@m ">
      <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
        <PoiCategory/>
      </div>
      </div>
    </div>
  </div>