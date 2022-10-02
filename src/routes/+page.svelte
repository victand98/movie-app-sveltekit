<script lang="ts">
	import PopularMovies from '$lib/PopularMovies.svelte';
	import SearchMovie from '$lib/SearchMovie.svelte';
	import { fly } from 'svelte/transition';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="my-4" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
	<SearchMovie />
	<PopularMovies movies={data.popularMovies.results} />
</section>
