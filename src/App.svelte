<script>
  import {setContext} from "svelte";
  import {PoiService} from "./services/poi-service";
  import Categories from "./pages/Categories.svelte";
  import Pois from "./pages/Pois.svelte";
  import Navigator from "./components/Navigator.svelte";
  import Router from "svelte-spa-router";

  setContext("PoiService", new PoiService("http://localhost:4000"));
  const navBar = [{
    title: "Pois",
    icon: "fas fa-hand-holding-usd fa-3x",
    colour: "color:rgb(153, 196, 74)",
    link: "/#/pois",
  }, {
    title: "Categories",
    icon: "fas fa-clipboard-list fa-3x",
    colour: "color:rgb(63, 122, 139)",
    link: "/#/categories",
  }];
  let routes = {
    "/categories": Categories,
    "/pois": Pois,
  }
</script>

<div class="uk-container">
  <Navigator {navBar}/>
  <Router {routes} />
</div>