<script>
    import Preflights from "./Preflights.svelte";
</script>

<slot />


<Preflights />

<div
  class="bg-white text-gray-900 dark:bg-gray-900 dark:text-white px-3 py-15 min-h-100vh transition"
>
  <main class="max-w-800px mx-auto text-center">
    <slot />
  </main>
</div>

