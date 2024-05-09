import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Sections/Hero";
import Layout from "./components/ui/Layout";

function App() {
  return (
    <main>
      <Navbar />
      <Layout maxWidth="max-w-[1440px]">
        <Hero />
      </Layout>
    </main>
  );
}

export default App;
