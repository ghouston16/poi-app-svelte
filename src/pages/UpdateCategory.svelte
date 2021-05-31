<script lang="ts">
    import {mainBar, navBar, subTitle, title} from "../stores";
    import homer from "/src/assets/homer.png";
    import ireland from "/src/assets/ireland-flag.jpg"
    import UpdateCategoryForm from "../components/UpdateCategoryForm.svelte";
  
    title.set("Poi Tracker Inc");
    subTitle.set("Update Category");
  
    navBar.set({
      bar: mainBar
    });
  </script>
  
  <div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
      <img width="300" src="{ireland}" alt="ireland">
    </div>
    <div class="uk-width-1-2@m">
      <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge">
        <UpdateCategoryForm/>
      </div>
    </div>
  </div>
  