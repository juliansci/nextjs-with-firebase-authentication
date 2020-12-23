import { GetServerSidePropsContext } from "next";
import { firebaseAdmin } from "../auth/firebaseAdmin";
import nookies from "nookies";

export function withAuthServerSideProps(getServerSidePropsFunc?: Function) {
  return async (context: GetServerSidePropsContext) => {
    try {
      const cookies = nookies.get(context);
      const user = await firebaseAdmin.auth().verifyIdToken(cookies.token);
      if (getServerSidePropsFunc) {
        return { props: { user, data: await getServerSidePropsFunc(context, user) } };
      }
      return { props: { user, data: { props: { user } } } };
    } catch (err) {
      return {
        redirect: {
          permanent: false,
          destination: "/login",
        },
        props: {} as never,
      };
    }
  }
}
