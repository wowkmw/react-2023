// import useFetchData from "../hooks/useFetchData";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  //   const data = useFetchData();
  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img src={data.avatar_url} width={300} alt="" />
    </div>
  );
};

export { Github };
