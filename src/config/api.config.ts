import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { AppState } from "../types.ts";

export const baseUrl = "https://api.adviceslip.com/advice";

// it returns user path, middleware and reducer
export const apiConfiguration = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl }),
	tagTypes: [ "getData" ],
	endpoints: (builder) => ({
		fetchData: builder.query<any, any>({
			query: (state) => {
				return {
					url: state.getUrl,
				};
			},
			providesTags: [ "getData" ],
		}),
	}),
});


export const {
	useFetchDataQuery,
	useLazyFetchDataQuery,
} = apiConfiguration;
