import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout(props) {
  const { children } = props;
  return (
    <>
      <Navbar />
      <main className='min-h-[50dvh] px-7.5 md:px-10 lg:px-25 py-15 lg:pt-10 lg:pb-34 flex flex-col gap-5 bg-bg-secondary'>
        {children}
      </main>
      <Footer />
    </>
  );
}
