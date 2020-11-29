<script>
import { cart } from "../data/cart";
import Takeaways from './Takeaways.svelte';
import Footer from './Footer.svelte';

export let pets = [];
export let petCount = 3;
</script>
<style lang="scss">
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
  <div class="row mb-5">
    {#each pets.slice(0, petCount) as pet, petIndex}
    <div class="col-md-4">
      <div class="pet mt-4 mb-4 position-relative">
        <div class="pet-image position-absolute">
          <img src={pet.webformatURL} alt="Pet {petIndex}">
        </div>
        <div class="pet-content position-absolute z-10" style="z-index: 10; margin-top: 6em">
          <div class="pet-data mb-3 d-flex justify-content-between">
            <div class="pet-title m-0 p-3 pb-0">
              <h3>Exotic Bird Thing</h3>
            </div>
            <div class="pet-price m-0 p-3 pb-0">
              <h3>$4</h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col text-center mb-5">
            <a href="/pets" class="btn btn-wap-secondary">View our pet collection</a>
            <button on:click="{() => cart.add(pet)}">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
    
    {/each}
  </div>
</div>

<Takeaways />

<Footer />
