<style>
h1 {
  font-weight: bold;
  color: $color-primary;
}
</style>

<div class="container">
  <div class="row">
    <div class="col-md-12 mt-5 mb-5">
      <div class="pet mt-4 mb-4 text-center">
        <h1>Pet [nameorwhatever]</h1>
      </div>
    </div>
    <div class="col-md-4">
      <div class="pet mt-4 mb-4">
        <div class="pet-image" style="background: url() center center no-repeat; height: 300px;">
          <!-- <img src={pet.webformatURL} alt="Pet {petIndex}"> -->
        </div>
        <div class="pet-content">
          <div class="pet-data mb-3 d-flex justify-content-between">
            <div class="pet-title m-0 p-3 pb-0">
              <h3>Pet 123</h3>
            </div>
            <div class="pet-price m-0 p-3 pb-0">
              <h3>$4</h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col text-center mt-0 mb-5">
            <button class="btn btn-wap-secondary" on:click="{() => cart.add(pet)}">Adopt this pet</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
