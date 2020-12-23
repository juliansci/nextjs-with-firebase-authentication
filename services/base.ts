import useSWR from 'swr';
import { useAuth } from "../auth/authContext";

const fetcher = (url, token) =>
  fetch(url, {
    headers: new Headers({ 'Content-Type': 'application/json', token }),
  }).then((res) => res.json())


export function useApiRequest(url) {
  const { token } = useAuth();
  const requestConfig = token ? [url, token] : null;
  const { data, error } = useSWR(requestConfig, fetcher)
  return {
    data,
    isLoading: !error && !data,
    error
  }
}