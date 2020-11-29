<script>
  import { cart } from "../data/cart";
  import { getContext, onMount } from "svelte";

  // export let pets = [];
  export let petCount = 3;
  let { getPets } = getContext("pets");

  $: pets = getPets();
</script>

<style lang="scss">
img {
  width: 100%;
  height: auto;
}
.pet-image {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(15,15,15,.5);
}
.pet-content {
  .pet-data {
    background-color: $color-white-opac;
  }
  h3 {
    font-size: 24px;
    font-weight: bold;
    color: $color-primary;
    margin-bottom: 0;
  }
}
.pet-price h3 {
  font-size: 18px;
  border: 1px solid #ccc;
  background: #efefef;
  padding: 5px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
</style>
<div class="container">
  <div class="row">
    {#each $pets.slice(0, petCount) as pet, petIndex}
    <div class="col-md-4">
      <div class="pet mt-4 mb-4">
        <div class="pet-image" style="background: url({pet.webformatURL}) center center no-repeat; height: 300px;">
          <!-- <img src={pet.webformatURL} alt="Pet {petIndex}"> -->
        </div>
        <div class="pet-content">
          <div class="pet-data mb-3 d-flex justify-content-between">
            <div class="pet-title m-0 p-3 pb-0">
              <h3>Pet {petIndex}</h3>
            </div>
            <div class="pet-price m-0 p-3 pb-0">
              <h3>$4</h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col text-center mb-5">
            <button class="btn btn-wap-secondary" on:click="{() => cart.add(pet)}">Adopt this pet</button>
          </div>
        </div>
      </div>
    </div>
    {/each}
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col text-center mb-5">
    <hr class="hr mb-5">
      <a href="/gallery" class="btn btn-wap-secondary">View our pet collection</a>
    </div>
  </div>
</div>
