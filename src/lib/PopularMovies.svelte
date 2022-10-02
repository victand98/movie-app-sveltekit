<script lang="ts">
	import type { Movie } from '$models';
	import MovieCard from './MovieCard.svelte';

	export let movies: Movie[];
</script>

<h3 class="text-lg mb-3">Popular Movies</h3>

<div class="popular-movies">
	{#each movies as movie}
		<MovieCard {movie} />
	{/each}
</div>

<style>
	.popular-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		column-gap: 1rem;
		row-gap: 2rem;
	}
</style>
