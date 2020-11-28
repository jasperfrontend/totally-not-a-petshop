<script>
  import { onMount } from 'svelte';
  import Header from './components/Header.svelte';
  import Hero from './components/Hero.svelte';
  import Loop from './components/Loop.svelte';
  import { API_KEY } from './constants/pixabay';
  import { cart } from './data/cart';
import Checkout from './routes/Checkout.svelte';
    
  let pets = [];
  
  async function getInitialAnimals() {
    const endpoint = `https://pixabay.com/api/?key=${API_KEY}&category=animals&per_page=200&orientation=horizontal&image_type=photo&min_width=600&min_height=400&safesearch=true`;
    
    const animalsResponse = await fetch(endpoint);
    const animalsData = await animalsResponse.json();
    localStorage.setItem("pet_images", JSON.stringify(animalsData.hits));
  }
  
  onMount(async () => {
    if (!localStorage.getItem("pet_images")) {
      await getInitialAnimals();
    }
    
    pets = JSON.parse(localStorage.getItem("pet_images"));
  });
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

  <Loop {pets} />
  <Checkout />
  
</main>
