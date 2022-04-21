import Link from "next/link";
import Layout from "../../components/layout";
import { Chat, Product, User } from "@prisma/client";
import useSWR from "swr";
import Image from "next/image";
import useUser from "../../libs/client/useUser";

const Chats = () => {
  const { user } = useUser();
  const { data } = useSWR(`/api/chats`);
  console.log(data);

  return (
    <Layout seoTitle="Chats" hasTabBar>
      <div className="py-10 divide-y-[1px]">
        {data?.chats?.map((chat) => (
          <Link href={`/chats/${chat.id}`} key={chat.id}>
            <a className="flex px-4 cursor-pointer py-3 items-center space-x-3">
              {user?.id === chat.userId ? (
                chat.product.user.avatar ? (
                  <Image
                    width={48}
                    height={48}
                    src={`https://imagedelivery.net/v1jWi3k6iPtjDeXfIvS6lQ/${chat.product.user.avatar}/avatar`}
                    className="w-12 h-12 rounded-full bg-slate-300"
                    alt="avatar-image"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-slate-300" />
                )
              ) : chat.user.avatar ? (
                <Image
                  width={48}
                  height={48}
                  src={`https://imagedelivery.net/v1jWi3k6iPtjDeXfIvS6lQ/${chat.user.avatar}/avatar`}
                  className="w-12 h-12 rounded-full bg-slate-300"
                  alt="avatar-image"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-slate-300" />
              )}
              <div>
                <p className="text-gray-700">
                  {user?.id === chat.userId
                    ? chat.product.user.name
                    : chat.user.name}
                </p>
                <p className="text-sm  text-gray-500">
                  {chat.messages[chat.messages.length - 1]?.message}
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
};
export default Chats;
