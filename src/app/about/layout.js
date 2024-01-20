import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Binti Bhatt | About",
  description: "Portfolio website of Binti Bhatt",
};

export default function AboutLayout({ children }) {
  return (
    <>
      <div className="bg-[url('/assets/images/hero-bg.jpg')] bg-cover">
        <section className="bg-gray-900 h-screen py-10 sm:py-1 px-4 md:px-10 md:py-4 lg:px-8 lg:py-10 xl:py-20 bg-opacity-70">
          <div className="container mx-auto mt-16 lg:mt-8 xl:mt-10 md:mt-4 sm:mt-8 border-gray-400 border-2 rounded-3xl">
            <Navbar />
            {children}
            <Footer />
          </div>
        </section>
      </div>
    </>
  );
}
