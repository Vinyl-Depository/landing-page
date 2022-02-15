import { useState, useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

interface IHTTPResponeData {}

type HttpMethod = 'get' | 'post';

const useHTTP = <T extends IHTTPResponeData>(
	url: string,
	method: HttpMethod,
	body?: object,
	headers?: object,
): { response: T | null; error: object | null; loading: boolean } => {
	const [responseState, setResponseState] = useState<T | null>(null);
	const [errorState, setErrorState] = useState<object | null>(null);
	const [loadingState, setLoadingState] = useState<boolean>(true);

	const request = () => {
		let axiosQuery: Promise<AxiosResponse<T>>;

		if (method === 'post') {
			axiosQuery = axios[method](url, headers, body);
		} else {
			axiosQuery = axios[method](url, headers);
		}

		axiosQuery
			.then((response: AxiosResponse<T>) => {
				setResponseState(response.data);
			})
			.catch((error: AxiosError) => {
				setErrorState(error);
			})
			.finally(() => {
				setLoadingState(false);
			});
	};

	useEffect(() => {
		request();
	}, [method, url, body, headers]);

	return { response: responseState, error: errorState, loading: loadingState };
};

export default useHTTP;
