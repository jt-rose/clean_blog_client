import { useRouter } from "next/router";
import { getSdk, GetUserWithPostsQuery } from "../../generated/graphql-sdk";
import { client } from "../../utils/gqlClient";
import { GetServerSideProps } from "next";

interface UserResponse {
  userWithPosts: GetUserWithPostsQuery | null;
  error: string | null;
}

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<{ props: UserResponse }> => {
  try {
    const { user } = context.query;
    const username = typeof user === "string" ? user : "";
    const userWithPosts = await getSdk(client).GetUserWithPosts({
      username,
    });

    return { props: { userWithPosts, error: null } };
  } catch (e) {
    if (e instanceof Error) {
      return {
        props: { userWithPosts: null, error: e.message.replace(/\:.+/, "") },
      };
    } else {
      return {
        props: {
          userWithPosts: null,
          error: "internal server error",
        },
      };
    }
  }
};

const User = (props: UserResponse) => {
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
  if (props.error) {
    return <p>Error: {props.error}</p>;
  }

  const userData = props.userWithPosts?.getUserByUsername
    ? props.userWithPosts.getUserByUsername
    : null;
  if (!userData) {
    return <p>Error: Could not load User</p>;
  }
  return (
    <div>
      <p>Username: {userData.username}</p>
      <p>User_id: {userData.user_id}</p>
      <ul>
        {userData.posts?.posts?.map((p) => (
          <li>{p?.title}</li>
        ))}
      </ul>
      <p>Has more posts: {`${userData.posts?.more}`}</p>
    </div>
  );
};

export default User;
