<script>
  import { onMount, setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import Header from './components/Header.svelte';
  import Route from './components/Route.svelte';
  import Takeaways from './components/Takeaways.svelte';
  import Footer from './components/Footer.svelte';
  import { API_KEY } from './constants/pixabay';

  let pets = writable([]);

  setContext("pets", {
    getPets: () => pets
  });

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

    const petsData = JSON.parse(localStorage.getItem("pet_images"));
    pets.set(petsData);
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
<Route />
<Takeaways />
<Footer />
