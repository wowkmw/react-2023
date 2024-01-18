import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-orange-500 text-black text-3xl text-center py-5">
      {userid != undefined ? `User: ${userid}` : "Generic user detected"}
    </div>
  );
}

export default User;
