import { GetServerSideProps } from "next";
//import { useRouter } from "next/router";
import {
  getSdk,
  GetPostByUsernameAndTitleQuery,
} from "../../generated/graphql-sdk";
import { client } from "../../utils/gqlClient";
import { Post } from "../../components/post";

interface PostResponse {
  post: GetPostByUsernameAndTitleQuery | null;
  username: string | null;
  isAuthor: boolean;
  error: string | null;
}

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<{ props: PostResponse }> => {
  try {
    // attempt to get [user] and [postTitle] from url
    const { user, postTitle } = context.query;
    const username = typeof user === "string" ? user : "";
    const title = typeof postTitle === "string" ? postTitle : "";

    // get matching post via username and title
    const post = await getSdk(client).GetPostByUsernameAndTitle({
      username,
      title,
    });

    // check if author
    const user_id = post.getPostByUsernameAndTitle?.user_id || 0;
    const isAuthor = await (
      await getSdk(client).IsAuthor({ author_id: user_id })
    ).isAuthor;

    return { props: { post, username, isAuthor, error: null } };
  } catch (e) {
    if (e instanceof Error) {
      return {
        props: {
          post: null,
          username: null,
          isAuthor: false,
          error: e.message.replace(/\:.+/, ""),
        },
      };
    } else {
      return {
        props: {
          post: null,
          username: null,
          isAuthor: false,
          error: "internal server error",
        },
      };
    }
  }
};

const PostWithData = (props: PostResponse) => {
  const { error, post, username, isAuthor } = props;
  if (error) {
    return <p>Error: {props.error}</p>;
  }
  if (!post || !username) {
    return <p>No such post found!</p>;
  }

  return (
    <Post username={username} isAuthor={isAuthor}>
      <p>post: {post.getPostByUsernameAndTitle?.title}</p>
    </Post>
  );
};

export default PostWithData;
