import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const userEmail = user?.user?.email;

    const currentUser = { userEmail: userEmail };
    if (userEmail) {
      fetch(`http://localhost:5000/user/${userEmail}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
            console.log("data inside data: ",data)
          setToken(data);
        });
    }
  }, [user]);
  return [token];
};

export default useToken;
