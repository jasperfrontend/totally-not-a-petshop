<script>
  import { cart } from "../data/cart";
</script>

<div class="cart">
  {#each $cart as pet}
    <div>
      {pet.id}
    </div>
  {/each}
</div>