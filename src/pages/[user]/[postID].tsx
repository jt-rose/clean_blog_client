import { useRouter } from "next/router";
import { posts } from "../../data/posts";
import { Post } from "../post";

const PostWithData = () => {
  const router = useRouter();
  const { postID } = router.query;
  if (!postID) {
    return <p>No such entry found!</p>;
  }
  const postIDInt = Array.isArray(postID)
    ? parseInt(postID[0])
    : parseInt(postID);
  if (postIDInt === NaN) {
    return <p>Incorrect post id - please use only a number!</p>;
  }

  // simulate looking up in a database
  const post = posts.find((p) => p.postID === postIDInt);
  if (!post) {
    return <p>No such post found!</p>;
  }

  return (
    <Post>
      <p>post: {post.title}</p>
    </Post>
  );
};

export default PostWithData;
