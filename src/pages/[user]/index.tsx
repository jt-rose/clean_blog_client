import { useRouter } from "next/router";

const User = () => {
  const router = useRouter();
  const { user } = router.query;

  return <p>User: {user}</p>;
};

export default User;
