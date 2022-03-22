import {NextPage} from "next";

const Write =()=>{
    return  (
    
    <form className="px-4 py-4"> 
        <textarea
          className="mt-1 shadow-sm w-full focus:ring-blue-500 rounded-md border-gray-300 focus:border-blue-500 "
          rows={4}
          placeholder="Ask a question!"
        />
        <button className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none ">
             Submit
        </button>
    </form>
    );


};

export default Write;