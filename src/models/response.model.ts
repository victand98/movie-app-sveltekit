export interface Response<Result = any> {
	page: number;
	results: Result[];
	total_pages: number;
	total_results: number;
}
