"use client";
import {
  AmountType,
  CourseDataType,
  ProductVariantType,
} from "@/app/video-courses/types/video-courses";
import VideoCoursesHeaderDetails from "@/app/video-courses/VideoCoursesDetailsHeader";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaCartShopping, FaIndianRupeeSign } from "react-icons/fa6";
import { RotatingLines } from "react-loader-spinner";
import useRazorpay, { RazorpayOptions } from "react-razorpay";

const { NEXT_PUBLIC_RAZORPAY_KEY_ID } = process.env;

type Props = {
  data: ProductVariantType;
  allVariants: Array<CourseDataType>;
};

type CreateOrderResponseType = {
  id: string;
  amount: number;
  currency: string;
  notes: Record<any, any>;
};

const ProductPage = ({ data, allVariants }: Props) => {
  const [mode, setMode] = useState(data?.mode[0] ?? "");
  const [attempt, setAttempt] = useState(data?.attempt[0] ?? "");
  const [loading, setLoading] = useState(false);

  const [Razorpay] = useRazorpay();

  const createOrder = async (): Promise<CreateOrderResponseType> => {
    setLoading(true);

    let order = await fetch("/api/orders/create", {
      method: "POST",
      body: JSON.stringify({
        amount: (
          Number(getAmount()?.offerPrice ?? getAmount()?.price) * 100
        ).toString(),
        mode,
        attempt,
      }),
    });

    setLoading(false);

    return order.json();
  };

  const handlePayment = async () => {
    const order: CreateOrderResponseType = await createOrder();

    const options: RazorpayOptions = {
      order_id: order?.id,
      key: NEXT_PUBLIC_RAZORPAY_KEY_ID ?? "",
      amount: order?.amount.toString(),
      currency: order?.currency,
      description: data?.title,
      notes: order?.notes,
      name: data?.title ?? "",
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  };
  const getAmount = (): AmountType => {
    return (
      allVariants.find((av) => av?.mode === mode && av?.attempt === attempt)
        ?.amount ?? { price: 0, offerPrice: 0 }
    );
  };

  return (
    <>
      <div>
        <VideoCoursesHeaderDetails />
        <br />
        <br />
      </div>
      <div className="flex flex-col flex-wrap max-w-7xl w-[80%] m-auto justify-center gap-4">
        <div className="flex w-full md:flex-row flex-col flex-1 shadow-lg gap-6 p-4">
          <div className="flex md:flex-[0.4] flex-1 relative min-h-[26.25rem]">
            <Image
              src={
                data?.imgUrl
                  ? `/images/courses/${data?.type}${
                      data?.group ? `/${data?.group}` : ""
                    }${data?.imgUrl}`
                  : ""
              }
              alt={data?.title ?? ""}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              priority
            />
          </div>
          <div className="flex flex-1 md:flex-[0.6] flex-col gap-2">
            <span className="text-3xl">{data?.title}</span>
            <span className="text-xs">{data && data["sub-title"]}</span>
            <span className="text-sm">
              By{" "}
              <Link className="text-sky-400" href={data?.byUrl ?? ""}>
                {data?.by}
              </Link>
            </span>
            <span className="text-[22px] text-[#666] flex">
              {mode}:
              {getAmount()?.offerPrice ? (
                <>
                  <span className="flex line-through items-center">
                    <FaIndianRupeeSign />
                    {getAmount()?.price}
                  </span>
                  <span className="flex text-accent items-center ml-2">
                    <FaIndianRupeeSign />
                    {getAmount()?.offerPrice}
                  </span>
                  <span className="flex text-base text-green-600 items-center ml-2">
                    (
                    {(
                      (1 - getAmount()?.offerPrice / getAmount()?.price) *
                      100
                    ).toFixed(2)}
                    % Off)
                  </span>
                </>
              ) : (
                <span className="flex items-center">
                  <FaIndianRupeeSign />
                  {getAmount()?.price}
                </span>
              )}
            </span>
            <div className="flex flex-col gap-4 w-min">
              <div className="flex gap-4">
                <div className="flex flex-col gap-2">
                  <span className="font-semibold text-[#666]">Change Mode</span>
                  <div className="flex">
                    <select
                      className="flex min-w-52 bg-[#4692b680] h-9 shadow px-2 border rounded-md outline-none"
                      onChange={(e) => setMode(e.target.value)}
                      value={mode}
                    >
                      {data?.mode?.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-semibold text-[#666]">Attempt</span>
                  <div className="flex w-full">
                    <select
                      className="flex bg-[#4692b680] h-9 shadow outline-none px-2 border rounded-md"
                      onChange={(e) => setAttempt(e.target.value)}
                      value={attempt}
                    >
                      {data?.attempt?.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <span
                  onClick={handlePayment}
                  className="flex flex-1 border justify-center items-center bg-accent hover:bg-red-700 rounded-md py-2 text-white cursor-pointer transition-all text-sm"
                >
                  {loading ? (
                    <RotatingLines
                      visible={true}
                      width="20"
                      strokeWidth="5"
                      animationDuration="0.75"
                      ariaLabel="rotating-lines-loading"
                      strokeColor="#202c45"
                    />
                  ) : (
                    <>
                      <FaIndianRupeeSign className="mr-1" /> Buy Now
                    </>
                  )}
                </span>
                <span className="flex flex-1 border border-[#428bca] hover:bg-[#428bca] hover:text-white text-[#428bca] justify-center items-center rounded-md py-2 cursor-pointer transition-all text-sm">
                  <FaCartShopping className="mr-1" /> Add to cart
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full gap-6 p-4 flex-wrap">
          <div className="flex w-full xl:flex-1 flex-col border rounded-[4px] text-sm">
            <span className="flex w-full px-[15px] py-[10px] text-text-primary bg-[#f5f5f5] border-b border-[#ddd]">
              Product Information
            </span>
            <div className="flex flex-1 flex-col p-4">
              {Object.keys(data?.description ?? {}).map((k) => {
                return (
                  <div
                    className="flex w-full border-t border-[#ddd] odd:bg-[#f9f9f9] last:border-b"
                    key={k}
                  >
                    <span className="flex flex-[0.3] p-2 capitalize text-[#555] font-bold">
                      {k.toLowerCase()}
                    </span>
                    <span className="flex flex-[0.7] p-2 text-[#666666]">
                      {data?.description[k]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex w-full xl:flex-1 flex-col border rounded-[4px]">
            <span className="flex w-full px-[15px] py-[10px] text-text-primary bg-[#f5f5f5] border-b border-[#ddd]">
              Description
            </span>
            <div className="flex flex-1 flex-col p-4">
              {data?.pi &&
                Object.keys(data?.pi).map((k) => {
                  return (
                    <div className="flex w-full border-t border-[#ddd]" key={k}>
                      <span className="flex flex-[0.3] p-2">{k}</span>
                      <span className="flex flex-[0.7] p-2">
                        {data?.pi && data?.pi[k]}
                      </span>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
