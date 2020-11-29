<script>
  import { cart } from "../data/cart";
  console.log($cart);
</script>

<div class="container">
<div class="row">
<div class="cart">
  {#each $cart as pet, petIndex}
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
    </div>
  </div>
  {/each}
</div>
</div>
</div>
