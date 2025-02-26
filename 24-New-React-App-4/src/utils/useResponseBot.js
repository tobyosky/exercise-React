import useSWR, { mutate } from "swr";

const url = "https://mocki.io/v1/fbc88b60-7852-4294-bbcc-a1649ff99fb6";

export default function useResponseBot(messages) {
  const { data } = useSWR(messages ? url : null);

  return { data };
}
