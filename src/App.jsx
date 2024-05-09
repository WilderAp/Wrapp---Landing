import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Sections/Hero";
import Layout from "./components/ui/Layout";
import Footer from "./components/ui/footer";

function App() {
  return (
    <main>
      <Navbar />
      <Layout maxWidth="max-w-[1440px]">
        <Hero />
      </Layout>
      <Footer />
    </main>
  );
}

export default App;
