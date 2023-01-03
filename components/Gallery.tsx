import React from "react";
import GalleryImage from "./GalleryImage";
import FormNFT from "./FormNFT";

import { createClient } from "@supabase/supabase-js";

export type ImageProps = {
  id: number;
  href: string;
  imageSrc: string;
  name: string;
  username: string;
};

const Gallery = ({ images }: { images: ImageProps[] }) => {
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
      <div className="bg-whtie/90 relative mx-auto flex max-w-2xl flex-1 flex-col items-center justify-center py-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <FormNFT />
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {images.map((image) => (
            <GalleryImage key={image.id} image={image} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Gallery;

async function getStaticProps() {
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
