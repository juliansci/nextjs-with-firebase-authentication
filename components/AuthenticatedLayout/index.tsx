import Head from 'next/head'
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

export default function AuthenticatedLayout({ children, user }) {
  return (
    <>
      <Head>
        <title>Project Title</title>
      </Head>
      <div className="w-full">
        <Header user={user} />
        <Content>{children}</Content>
        <Footer />
      </div>
    </>

  );
}
