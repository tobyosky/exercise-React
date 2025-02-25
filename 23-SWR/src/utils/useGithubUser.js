import useSWR, { mutate } from "swr";

export function useGithubUser(username) {
  const url = `https://api.github.com/users/${username}`;
  const { data, error, isLogin } = useSWR(username ? url : null);

  function handleReload() {
    mutate(url);
  }

  return { data, error, isLogin, handleReload };
}
