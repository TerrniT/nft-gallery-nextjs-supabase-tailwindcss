import Head from "next/head";
import Footer from "../components/Footer";
import { createClient } from "@supabase/supabase-js";
import Gallery, { ImageProps } from "../components/Gallery";

const Home = ({ images }: { images: ImageProps[] }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black/60 backdrop-blur-lg ">
      <Head>
        <title>NFT Gallery App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Gallery images={images} />

      <Footer />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || ""
  );

  const { data } = await supabaseAdmin.from("images").select("*").order("id");
  return {
    props: {
      images: data,
    },
  };
}
