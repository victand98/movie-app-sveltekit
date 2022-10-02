<script lang="ts">
	import MovieCard from '$lib/MovieCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="my-4 searched-movies">
	{#each data.searchMovies.results as movie}
		<MovieCard {movie} />
	{/each}
</section>

<style>
	.searched-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		column-gap: 1rem;
		row-gap: 2rem;
	}
</style>
