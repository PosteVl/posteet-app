//custom hook to do the me query and check if use is authenticated
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMeQuery } from "../generated/graphql";

export const useIsAuth = () => {
  const [{ data, fetching }] = useMeQuery();
  const router = useRouter();
  useEffect(() => {
    if (!fetching && !data?.me) {
      // tell login router where to go after we're logged in
      router.replace("/login?next=" + router.pathname);
    }
  }, [fetching, data, router]);
};