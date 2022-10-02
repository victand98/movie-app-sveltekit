<script lang="ts">
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';

	let inputValue: string = '';
	let active: boolean = false;

	const submitSearch = () => {
		goto(`/search/${inputValue}`);
		fly;
	};
</script>

<form class="relative md:w-1/3 my-4" on:submit|preventDefault={submitSearch}>
	<label
		for="search-movie"
		class="absolute text-sm top-1/2 left-0 -translate-y-1/2 pointer-events-none px-4 text-gray-700"
		class:hidden={active || inputValue}>Search Movie</label
	>
	<input
		bind:value={inputValue}
		on:focus={() => (active = true)}
		on:focusout={() => (active = false)}
		id="search-movie"
		name="search-movie"
		type="text"
		class="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-bold"
	/>

	{#if inputValue}
		<button
			in:fly={{ x: 20, duration: 500 }}
			out:fly={{ x: 0, duration: 500 }}
			class="text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r absolute right-0 bottom-1/2 translate-y-1/2 h-full"
			>Search</button
		>
	{/if}
</form>
