import Layout from "../../../components/layout";
import Message from "../../../components/message";
import useUser from "../../../libs/client/useUser";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Chat, User } from "@prisma/client";
import { useForm } from "react-hook-form";
import useMutation from "../../../libs/client/useMutation";
import client from "../../../libs/server/client";
import React, { useEffect, useRef, useState } from "react";
import { withSsrSession } from "../../../libs/server/withSession";

const ChatDetail = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();
  const { data, mutate } = useSWR(
    router.query.id ? `/api/chats/${router.query.id}` : null,
    {
      refreshInterval: 1000,
    }
  );
  useEffect(() => {
    if (data?.ok === false) {
      router.push("/chats");
    }
  }, [data, router]);
  const [sendMessage, { data: sendMessageData, loading }] = useMutation(
    `/api/chats/${router.query.id}`
  );
  const onValid = (form) => {
    if (loading) return;
    reset();
    mutate(
      (prev) =>
        prev && {
          ...prev,
          chat: {
            ...prev.chat,
            messages: [
              ...prev.chat.messages,
              {
                id: Date.now(),
                message: form.message,
                user: { ...user },
              },
            ],
          },
        },
      false
    );
    sendMessage({ form, productId: data?.chat?.productId });
  };
  // scroll to bottom
  const chatBoxRef = React.createRef();
  useEffect(() => {
    (() => {
      if (chatBoxRef.current) {
        chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight + 100;
      }
    })();
  }, [data, chatBoxRef]);
  return (
    <Layout canGoBack seoTitle="Chat">
      <div
        className="py-10 pb-32 h-[100vh] overflow-y-scroll  px-4 space-y-4 scrollbar-hide"
        ref={chatBoxRef}
      >
        {data?.chat?.messages.map((message) => (
          <Message
            key={message.id}
            message={message.message}
            reversed={message.user?.id === user?.id}
            avatar={message.user?.avatar}
          />
        ))}
      </div>
      <div className="fixed py-2 bg-white  bottom-5 inset-x-0">
        <form
          onSubmit={handleSubmit(onValid)}
          className="flex relative max-w-md items-center w-full mx-auto"
        >
          <input
            {...register("message", { required: true })}
            type="text"
            className="shadow-sm rounded-full w-full border-gray-300 focus:ring-blue-500 focus:outline-none pr-12 focus:border-blue-500"
          />
          <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
            <button className="flex focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 items-center bg-blue-500 rounded-full px-3 hover:bg-blue-600 text-sm text-white">
              &rarr;
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
export default ChatDetail;
