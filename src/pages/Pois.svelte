<script>
    import PoiList from "../components/PoiList.svelte";
    import homer5 from "/src/assets/ireland-flag.jpg";
    import {navBar, mainBar, subTitle, title} from "../stores"

    title.set("POI Services Inc.");
    subTitle.set("Latest POIs");
    navBar.set({
    bar: mainBar
    });
</script>
  
<div class="uk-text-center" uk-grid>
  <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-large ">
    <img width="200" src="{homer5}" alt="homer">
  </div>
  <div class="uk-width-expand@m">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
        <PoiList/>
      </div>
      </div>
    </div>