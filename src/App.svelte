<script>
  import {setContext} from "svelte";
  import {PoiService} from "./services/poi-service";
  import Categories from "./pages/Categories.svelte";
  import Pois from "./pages/Pois.svelte";
  import Navigator from "./components/Navigator.svelte";
  import Router from "svelte-spa-router";
  import Main from "./pages/Main.svelte";
  import Login from "./pages/Login.svelte";
  import Create from "./pages/Create.svelte";
  


  setContext("PoiService", new PoiService("http://localhost:4000"));

  let routes = {
    "/": Main,
    "/login": Login,
    "/categories": Categories,
    "/pois": Pois,
    "/logout" : Main,
    "/create": Create
  }
</script>

<div class="uk-container">
  <Navigator/>
  <Router {routes}/>
</div>