import  { NextPage } from "next";
import Layout from "../../components/layout";
import Link from "next/link";
const Chats  = () => {
    return (
      <Layout hasTabBar title="채팅" >
        <Link href="/chats/abc " passHref><div className="divide-y-[1px] ">
          {[1, 1, 1,].map((_, i) => (
            <div
              key={i}
              className="flex px-4 cursor-pointer py-3 items-center space-x-3"
            >
              <div className="w-12 h-12 rounded-full bg-slate-300" />
              <div>
                <p className="text-gray-700">Steve Jebs</p>
                <p className="text-sm  text-gray-500">
                    안녕하세요
                </p>
              </div>
            </div>
          ))}
        </div></Link>
      </Layout>
    );
  };
  
  export default Chats;
