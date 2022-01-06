import { GetServerSideProps } from "next";
//import { useRouter } from "next/router";
import { getSdk, GetPostQuery } from "../../generated/graphql-sdk";
import { client } from "../../utils/gqlClient";
import { Post } from "../post";

interface PostResponse {
  post: GetPostQuery | null;
  error: string | null;
}

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<{ props: PostResponse }> => {
  try {
    const { postID } = context.query;
    const postIDInt = typeof postID === "string" ? parseInt(postID) : 0;
    if (postIDInt === NaN) {
      return {
        props: { post: null, error: "post_id must be a number" },
      };
    }
    const post = await getSdk(client).GetPost({ post_id: postIDInt });

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
  console.log(props.post);
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
      <p>post: {props.post.getPost?.title}</p>
    </Post>
  );
};

export default PostWithData;
