import { useParams, useSearchParams } from "react-router-dom";
import Navbar from "../../components/user/Navbar/Navbar";
import PaymentMessage from "../../components/user/Payment";
import axiosJWT from "../../utils/axiosService";
import { USER_API } from "../../constants";

const PaymentCompleted = () => {
  const [searchParams] = useSearchParams();
  const { id } = useParams();

  const status = searchParams.get("success");
  const isSuccess = status === "true" ? true : false;

  if (status) {
    const paymentStatus = isSuccess ? "Paid" : "Failed";
    axiosJWT
      .patch(USER_API + `/payment/status/${id}`, { paymentStatus })
      .then(({ data }) => console.log(data))
      .catch((err: any) => console.log(err));
  }

  return (
    <>
      <Navbar />
      <PaymentMessage isSuccess={isSuccess} />
    </>
  );
};

export default PaymentCompleted;
