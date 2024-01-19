import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <h4>Profile component</h4>
      {user ? <h1>Logged in user: {user.username}</h1> : <h1>Not logged in</h1>}
    </>
  );
};

export default Profile;
