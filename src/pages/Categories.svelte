<script>
    import CategoryList from "../components/CategoryList.svelte";
    //import homer4 from "/src/asset/homer4.jpeg";
    import {navBar, mainBar, subTitle, title} from "../stores"

    title.set("POI Services Inc.");
    subTitle.set("All Current Categories");
    navBar.set({
    bar: mainBar
    });
  </script>
  
  <div class="uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
       
    </div>
    <div class="uk-width-1-2@m">
      <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
        <CategoryList/>
      </div>
    </div>
  </div>