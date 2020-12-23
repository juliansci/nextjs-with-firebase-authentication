import { useApiRequest } from "./base";

export function useGetPlayers() {
  return useApiRequest(`${process.env.NEXT_PUBLIC_API_URL}/players`)
}