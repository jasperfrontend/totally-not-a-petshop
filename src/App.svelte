<script>
  import Header from './components/Header.svelte';
  import Hero from './components/Hero.svelte';
  import Loop from './components/Loop.svelte';
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&amp;display=swap" rel="stylesheet">
</svelte:head>

<style>
  @import 'scss/index.scss';
</style>

<Header />

<Hero />

<main>

<Loop pets={3} />

</main>
