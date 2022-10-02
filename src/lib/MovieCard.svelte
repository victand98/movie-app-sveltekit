<script lang="ts">
	import type { Movie } from '$models';

	export let movie: Movie;
</script>

<div class="flex flex-col justify-around p-2">
	<a data-sveltekit-prefetch data-sveltekit-noscroll href={`/movie/${movie.id}`}>
		<img
			class="w-full object-cover rounded-2xl mb-4"
			src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
			alt={movie.title}
		/>
	</a>

	<div class="description">
		<h2 class="text-sm">{movie.title}</h2>
		<p class="text-xs">{movie.release_date}</p>
	</div>
</div>

<style>
	img {
		height: 30vh;
	}

	.description {
		height: 5vh;
	}
</style>
