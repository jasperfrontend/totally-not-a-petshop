<script>
  import Svglogo from './Svglogo.svelte';
  import Navigation from './Navigation.svelte';
</script>
<style>
:global(html, body) {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:global(html,body,h1,h2,h3,h4,h5,h6,p,div,header,main,footer,ul,ol,li,a,span) {
  font-family: 'Roboto', sans-serif;
}
.site-header {
  background: $color-primary;
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 24px;
  }
  .navbar-container {
    position: relative;
    height: auto;
  }
}
</style>
<header class="site-header">
  <div class="container">
    <div class="p-3">
      <div class="row d-flex align-items-center">
        <div class="col-3 col-md-2">

        </div>
        <div class="col-9 col-md-10">
          <h1 class="text-white font-weight-bold">Werewolfdev's Amazing Pets</h1>
        </div>
        <div class="col-md-12">
          
        </div>
      </div>
    </div>
  </div>

</header>
