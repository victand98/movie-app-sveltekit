import { PUBLIC_TMBD_API_KEY } from '$env/static/public';
import type { Movie, Response } from '$models';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

type OutputProps = { searchMovies: Response<Movie> };

export const load: PageLoad<OutputProps> = async ({ fetch, params }) => {
	const res = await fetch(
		`https://api.themoviedb.org/3/search/movie?api_key=${PUBLIC_TMBD_API_KEY}&language=en-US&page=1&query=${params.id}`
	);

	const data = await (res.json() as Promise<Response<Movie>>);

	if (res.ok) return { searchMovies: data };

	throw error(res.status, res.statusText);
};
