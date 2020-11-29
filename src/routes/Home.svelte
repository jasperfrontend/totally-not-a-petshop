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

</main>
