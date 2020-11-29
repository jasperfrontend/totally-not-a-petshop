<script>
  import { cart } from "../data/cart";
  import { link } from "svelte-routing";
  import { getContext, onMount } from "svelte";

  // export let pets = [];
  export let petCount = 3;
  let { getPets } = getContext("pets");

  $: pets = getPets();
  let selected = false;
  let pid;
  function addedCallback(petID) {
    selected = true;
    return pid = petID;
  }
</script>

<style>
.pet {
  padding: .5em;
}
.pet-image {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(15,15,15,.5);
}
.pet-image:hover .pet-content,
.pet-image:hover .pet-button {
  opacity: 1;
}
.pet-content {
  width: 100%;
  opacity: 0;
  transition: opacity 200ms ease;
  .pet-data {
    width: 100%;
    background-color: $color-white-opac;
    border-radius: 4px;
    border-bottom: 1px solid #fff;
  }
  h3 {
    font-size: 18px;
    font-weight: normal;
    color: $color-dark;
    margin-bottom: 0;
  }
}
.pet-price h3 {
  font-size: 18px;
  font-weight: bold;
  background: $color-secondary;
  color: $color-white;
  padding: 8px;
  border-radius: 100%;
}
.pet-button {
  opacity: 0;
  transition: opacity 800ms ease;
}
</style>
<div class="container">
  <div class="row">
    {#each $pets.slice(0, petCount) as pet, petIndex}
    <div class="col-md-4">
      <div class="pet mt-4 mb-4">
        <div class="pet-image d-flex justify-content-between align-items-center flex-column" style="background: url({pet.webformatURL}) center center no-repeat; height: 300px;">
          <div class="pet-content p-3">
            <div class="pet-data mb-3 d-flex align-items-center justify-content-between">
              <div class="pet-title m-0 p-3 pb-0">
                <h3>Pet {petIndex+1}</h3>
              </div>
              <div class="pet-price m-0 p-3 pb-0">
                <h3>$5</h3>
              </div>
            </div>
          </div>
          <div class="pet-button text-center mb-3">
            {#if (selected === true) && (pid === pet.id)}
            <a href="/checkout" class="btn btn-wap-secondary" use:link>Go to Checkout</a>
            {:else}
            <button class="btn btn-wap-secondary adopt-this-pet-button" id="pet-{pet.id}" data-pet="{pet.id}" on:click="{() => cart.add(pet, addedCallback(pet.id))}">Adopt this pet</button>
            {/if}
          </div>
        </div>
      </div>
    </div>
    {/each}
  </div>
</div>

{#if ($cart.length != 0)}
<div class="container">
  <div class="row">
    <div class="col-md-12 mt-4 mb-4 text-center">
      <a href="/checkout" class="btn btn-wap-secondary" use:link>Go to Checkout</a>
      <button class="btn btn-wap-secondary" on:click="{() => cart.clear()}">Clear cart</button>
    </div>
  </div>
</div>
{:else}
<div class="container">
  <div class="row">
    <div class="col-md-12 mt-4 mb-4 text-center">
      <h3>Select your favorite pet!</h3>
    </div>
  </div>
</div>
{/if}
