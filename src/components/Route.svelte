<script>
  // import History from "../routes/History.svelte";
  import Home from "../routes/Home.svelte";
  import Gallery from "../routes/Gallery.svelte";
  import Checkout from "../routes/Checkout.svelte";
  // import Pet from "../routes/Pet.svelte";

  const routes = {
    "/": Home,
    "/gallery": Gallery,
    "/checkout": Checkout,
    // "/history": History,
    // "/pets/*": Pet,
  }

  $: routePath = window.location.pathname;
  $: routePathWild = routePath.split("/").slice(0, -1).join("/").concat("/*")
  $: routeComponent = routes[routePath] || routes[routePathWild];
</script>

<svelte:component this={routeComponent} />
