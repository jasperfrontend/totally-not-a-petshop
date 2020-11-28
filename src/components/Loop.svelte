<script>
  export let pets = [];
	export let petCount = 3;
</script>
<style lang="scss">
img {
  width: 100%;
  height: auto;
}
.pet-content {
  width: 90%;
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
          <div class="pet-button pl-3 pb-3">
            <a href="/pet/123" class="btn btn-wap-secondary">View &raquo;</a>
          </div>
        </div>
      </div>
    </div>  
    {/each}
    
    
    
    <!-- <div class="col-md-4">
      <div class="pet mt-4 mb-4 position-relative">
        <div class="pet-image position-absolute">
          <img src="https://picsum.photos/id/50/600/400" alt="">
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
          <div class="pet-button pl-3 pb-3">
            <a href="/pet/123" class="btn btn-wap-secondary">View &raquo;</a>
          </div>
        </div>
      </div>
    </div>
    
    <div class="col-md-4">
      <div class="pet mt-4 mb-4 position-relative">
        <div class="pet-image position-absolute">
          <img src="https://picsum.photos/id/200/600/400" alt="">
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
          <div class="pet-button pl-3 pb-3">
            <a href="/pet/123" class="btn btn-wap-secondary">View &raquo;</a>
          </div>
        </div>
      </div>
    </div>
    
    <div class="col-md-4">
      <div class="pet mt-4 mb-4 position-relative">
        <div class="pet-image position-absolute">
          <img src="https://picsum.photos/id/800/600/400" alt="">
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
          <div class="pet-button pl-3 pb-3">
            <a href="/pet/123" class="btn btn-wap-secondary">View &raquo;</a>
          </div>
        </div>
      </div>
    </div> -->
    
    
  </div>
</div>
