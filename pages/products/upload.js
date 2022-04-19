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

  function handleOnChange(e) {
    data.product.givenTalent = e.value;
  }
  const onValid = async ({
    name,
    description,
    givenTalent,
    receivedTalent,
  }) => {
    if (loading) return;
    else {
      uploadProduct({ name, description, givenTalent, receivedTalent });
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
        <Input
          kind="givenSelect"
          label="가르쳐 줄 재능"
          required
          name="givenTalent"
          register={register("givenTalent", { require: true })}
        />
        <Input
          kind="receivedSelect"
          label="배우고 싶은 재능"
          required
          name="receivedTalent"
          register={register("receivedTalent", { require: true })}
        />

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
