import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    const userEmail = user?.email;
    if (userEmail)
      fetch(`https://quiet-bayou-95560.herokuapp.com/admin/${userEmail}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
          setAdminLoading(false);
        });
  }, [user]);
  return [admin, adminLoading];
};

export default useAdmin;
