import { GetServerSidePropsContext } from "next";
import { firebaseAdmin } from "./firebaseAdmin";
import nookies from "nookies";

export function withAuthToHomeServerSideProps(getServerSidePropsFunc?: Function) {
  return async (context: GetServerSidePropsContext) => {
    try {
      const cookies = nookies.get(context);
      await firebaseAdmin.auth().verifyIdToken(cookies.token);
      return {
        redirect: {
          permanent: false,
          destination: "/",
        },
        props: {} as never,
      };
    } catch (err) {
      if (getServerSidePropsFunc) {
        return { props: { data: await getServerSidePropsFunc(context) } };
      }
      return { props: { data: { props: {} } } };
    }
  }
}
