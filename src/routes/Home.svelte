<script>
  import Hero from "../components/Hero.svelte";
  import Loop from "../components/Loop.svelte";
</script>
<style>
h2 {
  color: $color-primary;
  font-weight: bold;
}
</style>

<Hero />

<main>
  <h2 class="text-center mt-4">Recently "found" pets</h2>
  <Loop />
  <div class="container">
    <div class="row">
      <div class="col text-center mb-5">
      <hr class="hr mb-5">
        <a href="/gallery" class="btn btn-wap-secondary">View our pet collection</a>
      </div>
    </div>
  </div>
</main>
