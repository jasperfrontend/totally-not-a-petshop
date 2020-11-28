<script>
	export let pets = 3;
  import Takeaways from './components/Takeaways.svelte';
  import Footer from './components/Footer.svelte';
</script>
<style>
img {
  width: 100%;
  height: auto;
}
.pet-image {
  width: 100%;
  height: 100%;
}
.pet-content {
  .pet-data {
    background-color: $color-white-opac;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
    color: $color-primary;
    margin-bottom: 0;
  }
}
.take-aways {
  background-color: $color-primary;
  .take-away-icon {
    background: #fff;
    display: inline-block;
    padding: 2em;
    border-radius: 100%;
  }
  h4 {
    font-weight: normal;
    font-size: 20px;
  }
}
</style>
<div class="container">
  <div class="row">

    <div class="col-md-4">
      <div class="pet mt-4 mb-4" style="position: relative;">

        <div class="pet-image">
          <img src="https://picsum.photos/id/50/600/400" alt="">
        </div>

        <div class="pet-content z-10">
          <div class="pet-data d-flex justify-content-between">
            <div class="pet-title m-0 p-3 pb-0">
              <h3>Exotic Bird Thing</h3>
            </div>
            <div class="pet-price m-0 p-3 pb-0">
              <h3>$4</h3>
            </div>
          </div>
          <div class="pet-button pl-3 pb-3">
            <a href="/pet/123" class="btn btn-wap-secondary">View &raquo;</a>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="row">
    <div class="col text-center mb-5">
      <a href="/pets" class="btn btn-wap-secondary">View our pet collection</a>
    </div>
  </div>
</div>

<Takeaways />

<Footer />
