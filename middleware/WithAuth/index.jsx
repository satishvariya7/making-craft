// HOC/withAuth.jsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { memoryStrings } from "../../services";
import { removeCookie, getCookie } from "../../util/session";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);

    useEffect(async () => {
      const accessToken = getCookie(memoryStrings.userToken);
      if (!accessToken) {
        Router.replace("/");
      } else {
        if (accessToken) {
          setVerified(true);
        } else {
          removeCookie(memoryStrings.userToken);
          Router.replace("/");
        }
      }
    }, []);

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;
