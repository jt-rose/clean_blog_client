import { GetServerSideProps } from "next";
//import { useRouter } from "next/router";
import {
  getSdk,
  GetPostByUsernameAndTitleQuery,
} from "../../generated/graphql-sdk";
import { client } from "../../utils/gqlClient";
import { Post } from "../post";

interface PostResponse {
  post: GetPostByUsernameAndTitleQuery | null;
  error: string | null;
}

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<{ props: PostResponse }> => {
  try {
    const { user, postTitle } = context.query;
    const username = typeof user === "string" ? user : "";
    const title = typeof postTitle === "string" ? postTitle : "";

    const post = await getSdk(client).GetPostByUsernameAndTitle({
      username,
      title,
    });

    return { props: { post, error: null } };
  } catch (e) {
    if (e instanceof Error) {
      return {
        props: { post: null, error: e.message.replace(/\:.+/, "") },
      };
    } else {
      return {
        props: {
          post: null,
          error: "internal server error",
        },
      };
    }
  }
};

const PostWithData = (props: PostResponse) => {
  //const router = useRouter();
  //const { user } = router.query;

  if (props.error) {
    return <p>Error: {props.error}</p>;
  }
  if (!props.post) {
    return <p>No such post found!</p>;
  }

  return (
    <Post>
      <p>post: {props.post.getPostByUsernameAndTitle?.title}</p>
    </Post>
  );
};

export default PostWithData;
