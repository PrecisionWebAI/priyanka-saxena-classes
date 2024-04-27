import Razorpay from "razorpay";

const { NEXT_PUBLIC_RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } = process.env;

const razorpay = new Razorpay({
  key_id: NEXT_PUBLIC_RAZORPAY_KEY_ID ?? "",
  key_secret: RAZORPAY_KEY_SECRET,
});

export default razorpay;
