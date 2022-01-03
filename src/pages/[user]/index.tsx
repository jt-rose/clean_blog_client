import { useRouter } from "next/router";
import { getSdk, GetUserWithPostsQuery } from "../../generated/graphql-sdk";
import { client } from "../../utils/gqlClient";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user } = context.query;
  const username = typeof user === "string" ? user : "";
  const userWithPosts = await getSdk(client).GetUserWithPosts({
    username,
  });

  return { props: { userWithPosts } };
};

const User = (props: { userWithPosts: GetUserWithPostsQuery }) => {
  const router = useRouter();
  //const { user } = router.query;
  //const { data, error, isLoading } = useGetUserWithPostsQuery(client, {
  //username: "jtr",
  //});

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
  console.log(props.userWithPosts);
  return (
    <div>
      <p>Username: {props.userWithPosts.getUserByUsername?.username}</p>
      <p>User_id: {props.userWithPosts.getUserByUsername?.user_id}</p>
      <ul>
        {props.userWithPosts.getUserByUsername?.posts?.posts?.map((p) => (
          <li>{p?.title}</li>
        ))}
      </ul>
      <p>
        Has more posts:{" "}
        {`${props.userWithPosts.getUserByUsername?.posts?.more}`}
      </p>
    </div>
  );
};

export default User;
