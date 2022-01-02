import { useRouter } from "next/router";
import { useGetUserWithPostsQuery } from "../../generated/graphql";
import { client } from "../../utils/gqlClient";

/*
export async function getStaticProps() {
    const u = await useGetUserWithPostsQuery(client, { username: "jtr"})
    u.data?.getUserByUsername?.username
   return { props: { u } }
  }
*/
const User = () => {
  const router = useRouter();
  const { user } = router.query;
  const { data, error, isLoading } = useGetUserWithPostsQuery(client, {
    username: "jtr",
  });

  /*const username = typeof user === "string" ? user : "";
  //const {} = useQuery('', )
  const [result] = useGetUserWithPostsQuery({
    variables: { username },
    context: { fetchOptions: { credentials: "include" } },
  });
  const { data, fetching, error } = result;
  if (error) {
    console.log("error", error);
    return <p>Error: {error.message}</p>;
  }
  if (fetching) {
    return <p>...loading</p>;
  }

  if (!data || !data.getUserByUsername) {
    return <p>Error: No data returned!</p>;
  }*/
  return <p>User: {data?.getUserByUsername?.username}</p>;
};

export default User;
