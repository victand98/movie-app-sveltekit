<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="my-6" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
	<div class="w-full">
		<img
			class="w-full rounded-2xl"
			src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
			alt={data.title}
		/>
	</div>

	<div class="px-4 py-4">
		<h1 class="pt-4 font-bold">{data.original_title}</h1>
		<p class="py-1">{data.overview}</p>

		<dl class="-mx-4">
			<div class="bg-gray-50 py-5 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-sm font-medium text-gray-500">Release Date</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.release_date}</dd>
			</div>

			<div class="bg-white py-5 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-sm font-medium text-gray-500">Budget</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.budget}</dd>
			</div>

			<div class="bg-gray-50 py-5 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-sm font-medium text-gray-500">Rating</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.vote_average}</dd>
			</div>

			<div class="bg-white py-5 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-sm font-medium text-gray-500">Runtime</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.runtime}</dd>
			</div>
		</dl>
	</div>
</div>
