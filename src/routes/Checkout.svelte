<script>
  import { cart } from "../data/cart";
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
.pet-content {
  width: 100%;
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
  border: 1px solid #ccc;
  background: #efefef;
  padding: 5px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
</style>
<div class="container">
<div class="row">
  {#each $cart as pet, petIndex}
  <div class="col-md-4">
    <div class="pet mt-4 mb-4">
      <div class="pet-image d-flex justify-content-between align-items-center flex-column" style="background: url({pet.webformatURL}) center center no-repeat; height: 300px;">
        <div class="pet-content p-3">
          <div class="pet-data mb-3 d-flex align-items-center justify-content-between">
            <div class="pet-title m-0 p-3 pb-0">
              <h3>Pet {petIndex+1}</h3>
            </div>
            <div class="pet-price m-0 p-3 pb-0">
              <h3>$4</h3>
            </div>
          </div>
        </div>
        <div class="text-center mb-3">
          <button class="btn btn-wap-secondary" on:click="{() => cart.add(pet)}">Thank you</button>
        </div>
      </div>
    </div>
  </div>
  {/each}
</div>
</div>
