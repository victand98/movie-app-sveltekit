import { PUBLIC_TMBD_API_KEY } from '$env/static/public';
import type { Movie, Response } from '$models';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

type OutputProps = { popularMovies: Response<Movie> };

// We have imported the `PageLoad` type from the relative `./$types` folder that
// is hidden in the generated `.svelte-kit` folder. Those generated types
// contain a `PageLoad` type with a `params` and `data` object that matches our route.
// You need to run the dev server or `svelte-kit sync` to generate them.
export const load: PageLoad<OutputProps> = async ({ fetch }) => {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${PUBLIC_TMBD_API_KEY}&language=en-US&page=1`
	);

	const data = await (res.json() as Promise<Response<Movie>>);

	if (res.ok) return { popularMovies: data };

	throw error(res.status, res.statusText);
};
