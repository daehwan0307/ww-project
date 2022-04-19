import { NextPage } from "next";
import Layout from "../../components/layout";
import Button from "../../components/button";
import Input from "../../components/input";
import TextArea from "../../components/textarea";
import { useForm } from "react-hook-form";
import useMutation from "../../libs/client/useMutation";
import { useEffect, useState } from "react";
import { Product } from "@prisma/client";
import { useRouter } from "next/router";

const Upload = () => {
  const router = useRouter();
  const { register, handleSubmit, watch } = useForm();
  const [uploadProduct, { loading, data }] = useMutation("/api/products");
  const onValid = async ({
    name,
    price,
    description,
    givenTalent,
    receivedTalent,
  }) => {
    if (loading) return;
    else {
      uploadProduct({ name, price, description });
    }
  };
  useEffect(() => {
    if (data?.ok) {
      router.replace(`/products/${data.product.id}`);
    }
  }, [data, router]);

  return (
    <Layout canGoBack title="재능교환 글쓰기">
      <form className="p-4 space-y-4" onSubmit={handleSubmit(onValid)}>
        <Input
          register={register("name", { required: true })}
          required
          label="제목"
          name="name"
          type="text"
        />

        <div>
          <h1 className="text-sm font-medium text-gray-700">가르쳐 줄 재능</h1>
          <select className="rounded-md w-full appearance-none px-3 py-2 border border-gray-300  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
            <option value="" disabled selected>
              가르쳐 줄 재능 선택
            </option>
            <option value="archi">어학</option>
            <option value="mechanic">요리</option>
            <option value="indust">스포츠</option>
            <option value="elec">음악</option>
            <option value="chemical">공예</option>
            <option value="history">컴퓨터</option>
            <option value="lang">교양</option>
            <option value="philo">패션</option>
            <option value="history">코딩</option>
            <option value="lang">데이터 분석</option>
            <option value="philo">연기/춤</option>
            <option value="philo">기타</option>
          </select>
        </div>
        <div>
          <h1 className="text-sm font-medium text-gray-700">가르쳐 줄 재능</h1>
          <select className="rounded-md w-full appearance-none px-3 py-2 border border-gray-300  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
            <option value="" disabled selected>
              배우고 싶은 재능 선택
            </option>
            <option value="archi">어학</option>
            <option value="mechanic">요리</option>
            <option value="indust">스포츠</option>
            <option value="elec">음악</option>
            <option value="chemical">공예</option>
            <option value="history">컴퓨터</option>
            <option value="lang">교양</option>
            <option value="philo">패션</option>
            <option value="history">코딩</option>
            <option value="lang">데이터 분석</option>
            <option value="philo">연기/춤</option>
            <option value="philo">기타</option>
          </select>
        </div>

        <TextArea
          register={register("description", { required: true })}
          name="description"
          label=""
          required
          placeholder="재능교환 할 대상에게 하고싶은말을 작성해주세요."
        />
        <Button text={loading ? "Loading..." : "완료"} />
      </form>
    </Layout>
  );
};

export default Upload;
