import { NextPage } from "next";
import Button from "../../components/button";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";
import Link from "next/link";
import { Product, User } from "@prisma/client";
import useMutation from "../../libs/client/useMutation";
import { cls } from "../../libs/client/utils";
import useUser from "../../libs/client/useUser";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const ItemDetail = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const { data, mutate: boundMutate } = useSWR(
    router.query.id ? `/api/products/${router.query.id}` : null
  );
  const [toggleFav] = useMutation(`/api/products/${router.query.id}/fav`);
  const onFavClick = () => {
    if (!data) return;
    boundMutate((prev) => prev && { ...prev, isLiked: !prev.isLiked }, false);
    //mutate(`/api/users/me`, (prev) => ({ ok: !prev.ok }), false);
    toggleFav({});
  };
  const { handleSubmit } = useForm();
  const [createChatRoom, { loading, data: chatData }] =
    useMutation("/api/chats");
  const onValid = async () => {
    if (loading) return;
    const productId = Number(router.query.id);
    createChatRoom({ productId });
  };
  useEffect(() => {
    if (chatData?.ok) {
      router.push(`/chats/${chatData.chat.id}`);
    }
  }, [chatData, router]);
  return (
    <Layout canGoBack>
      <div className="px-4  py-4">
        <div className="mb-8">
          <div className="flex cursor-pointer py-3  items-center space-x-3">
            <Image
              width={48}
              height={48}
              src={`https://imagedelivery.net/v1jWi3k6iPtjDeXfIvS6lQ/${data?.product?.user?.avatar}/avatar`}
              className="w-12 h-12 rounded-full bg-slate-300"
            />
            <div className="flex justify-between w-full">
              <div>
                <p className="text-sm font-medium text-gray-700">
                  {data?.product?.user?.name}
                </p>
                <Link href={`/users/profiles/${data?.product?.user?.id}`}>
                  <a className="text-xs font-medium text-gray-500">
                    View profile &rarr;
                  </a>
                </Link>
              </div>
              <div className="justify-end">
                {data?.product?.receivedTalent}↔{data?.product?.givenTalent}
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-3xl font-bold text-gray-900">
              {data?.product?.name}
            </h1>

            <p className=" my-6 text-gray-700">{data?.product?.description}</p>
            <div className="flex items-center justify-between space-x-2">
              <form onSubmit={handleSubmit(onValid)}>
                <Button large text="Talk to seller" />
              </form>
              <button
                onClick={onFavClick}
                className={cls(
                  "p-3 rounded-md flex items-center hover:bg-gray-100 justify-center ",
                  data?.isLiked
                    ? "text-red-500  hover:text-red-600"
                    : "text-gray-400  hover:text-gray-500"
                )}
              >
                {data?.isLiked ? (
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            {user?.name}님 이 재능은 어떠세요?
          </h2>
          <div className=" mt-6 grid grid-cols-2 gap-4">
            {data?.relatedProducts?.map((product) => (
              <div key={product.id}>
                <div className="relative  pb-40">
                  <Image
                    src={`https://imagedelivery.net/v1jWi3k6iPtjDeXfIvS6lQ/${data?.product.image}/square`}
                    className="bg-slate-300 object-cover"
                    layout="fill"
                  />
                </div>
                <h3 className="text-gray-700 -mb-1">{product.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ItemDetail;
