<script>
  // import History from "../routes/History.svelte";
  import Home from "../routes/Home.svelte";
  import Gallery from "../routes/Gallery.svelte";
  // import Pet from "../routes/Pet.svelte";

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

<svelte:component this={routeComponent} />
