//import { useRouter } from "next/router";
import { getSdk, GetUserWithPostsQuery } from "../../generated/graphql-sdk";
import { client } from "../../utils/gqlClient";
import { GetServerSideProps } from "next";
import { PostPreview } from "../../components/PostPreview";

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
  console.log(props.userWithPosts);
  // render error if encountered
  if (props.error) {
    return <p>Error: {props.error}</p>;
  }

  // check for valid user data response
  const userData = props.userWithPosts?.getUserByUsername
    ? props.userWithPosts.getUserByUsername
    : null;

  // render error if userWithPosts did not download
  if (!userData) {
    return <p>Error: Could not load User</p>;
  }

  const userPosts = userData.posts?.posts || null;
  const hasMorePosts = userData.posts?.more || null;

  return (
    <div>
      <p>Username: {userData.username}</p>
      <p>User_id: {userData.user_id}</p>
      <ul>
        {userPosts &&
          userPosts.map(
            (p) =>
              p && (
                <PostPreview
                  title={p.title}
                  subtitle={p.subtitle}
                  date={p.created_at}
                  postID={p.post_id}
                  poster={userData.username}
                  key={`post-preview-${p.post_id}`}
                />
              )
          )}
      </ul>
      <p>Has more posts: {`${userData.posts?.more}`}</p>
    </div>
  );
};

export default User;
