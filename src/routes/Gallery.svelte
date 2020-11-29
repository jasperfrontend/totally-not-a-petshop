<script>
  import Loop from "../components/Loop.svelte";
</script>

<style>
img {
  max-width: 100%;
}
.page-title {
  h1 {
    font-weight: bold;
    color: $color-primary;
  }
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
    <div class="col-12">
      <div class="page-title text-center mt-5 mb-3">
        <h1>Our Amazing Pets</h1>
      </div>
    </div>
  </div>
</div>

<Loop petCount={12} />