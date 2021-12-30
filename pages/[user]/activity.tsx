import { useRouter } from "next/router";

const Activity = () => {
  const router = useRouter();
  const { user } = router.query;

  return <p>This page will link to {user}'s posts, comments, and votes</p>;
};

export default Activity;
