import useSWR from "swr";
import Item from "./item";

export default function ProductList({ kind }) {
  const { data } = useSWR(`/api/users/me/${kind}`);
  return data ? (
    <>
      {data[kind]?.map((record) => (
        <Item
          id={record.product.id}
          key={record.id}
          title={record.product.name}
          hearts={record.product._count.favs}
          comments={record.product.commentsCount}
        />
      ))}
    </>
  ) : null;
}
