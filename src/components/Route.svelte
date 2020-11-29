<script>
  import Home from "../routes/Home.svelte";
  import Gallery from "../routes/Gallery.svelte";
  import { Router, Route } from "svelte-routing"

  const routes = {
    "/": Home,
    "/gallery": Gallery,
    // "/history": History,
    // "/pets/*": Pet,
  }
  
  $: routePath = window.location.pathname;
  $: routePathWild = routePath.split("/").slice(0, -1).join("/").concat("/*")
  $: routeComponent = routes[routePath] || routes[routePathWild];
</script>

<Router>
  <Route path="/" component={Home}/>
  <Route path="/gallery" component={Gallery}/>
</Router>