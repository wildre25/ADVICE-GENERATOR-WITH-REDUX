import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useFetchDataQuery } from "../config";
import { RootState } from "../types.ts";

const useFetchData = (getUrl: string) => {
	
	const state = useSelector((state: RootState) => {
		return state.app;
	});
	
	const { data, isError, isLoading, isFetching } = useFetchDataQuery({
		...state,
		getUrl,
	});
	
	const onFetchData = useCallback(() => {
	
	}, [ data, isError, ]);
	
	useEffect(() => {
		onFetchData();
	}, [ onFetchData ]);
	
	
	return {
		data: data,
		loading: isLoading || isFetching,
	};
};

export default useFetchData;
