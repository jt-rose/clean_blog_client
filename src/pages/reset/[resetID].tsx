import { useRouter } from "next/router";

const Reset = () => {
  const router = useRouter();
  const { resetID } = router.query;
  return <p>Reset Password with UUID: {resetID}</p>;
};

export default Reset;
