import { useEffect } from "react";
import { useUserContext } from "../context/userContext";

const Profile = () => {
  const { user } = useUserContext();
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
