import { useRouter } from "next/router";

const PropetyDetail = () => {
  const router = useRouter();
  const { productId } = router.query;
  return <div>PropetyDetail {productId}</div>;
};

export default PropetyDetail;
