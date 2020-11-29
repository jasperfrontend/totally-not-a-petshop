<script>
  import { link } from "svelte-routing";
  let active = false;
  
  function isCurrentRoute(href) {
    return href === window.location.pathname
  }
</script>

<style>
#wwd-pet-navbar {
  a {
    font-weight: bold;
    padding: 10px 1em;
  }
}

@media screen and (min-width: 768px) {
  .navbar button {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .navbar-collapse {
    display: none;
    &.active {
      display: block;
      width: 100%;
      background: $color-primary;
    }
  }
  #wwd-pet-navbar {
    a {
      padding-left: 0;
    }
  }
}
</style>

<nav class="navbar navbar-expand-lg navbar-dark mt-md-3 mb-0 p-0" style="background: $color-primary;">
  <button class="ml-auto" class:active={active} on:click="{() => active = !active}" type="button" data-toggle="collapse" data-target="#wwd-pet-navbar" aria-controls="navbarSupportedContent" aria-expanded="false">
    {#if active == true}
    <span style="font-size: 26px; line-height: 20px;">&times;</span>
    {:else}
    ☰
    {/if}
  </button>

  <div class="navbar-collapse w-100" class:active={active} on:click="{() => active = !active}" id="wwd-pet-navbar">

    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/" use:link>Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/gallery" use:link>Pets</a>
      </li>
      <!-- <li class="nav-item">
        <a class="nav-link" href="/cart">Your cart</a>
      </li> -->
      <li class="nav-item">
        <a class="nav-link" href="/checkout" use:link>Checkout</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0 ml-auto">
      <input class="form-control mr-sm-2" type="search" placeholder="Search your new pet" aria-label="Search">
    </form>
  </div>
</nav>
