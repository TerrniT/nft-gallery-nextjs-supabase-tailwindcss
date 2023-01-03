import React, { useState } from "react";
import Image from "next/image";
import { cn, supabase } from "./helper";
import { ImageProps } from "./Gallery";
import { Button, Flex } from "@chakra-ui/react";

const GalleryImage = ({ image }: { image: ImageProps }) => {
  const [isLoading, setLoading] = useState(true);

  async function deleteProduct() {
    try {
      const { data, error } = await supabase
        .from("images")
        .delete()
        .eq("id", image.id);

      if (error) throw error;
      window.location.reload();
    } catch (error: any) {
      alert(error.message);
    }
  }
  return (
    <div className="flex-1">
      <a href={image.href} className="group">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-300  xl:aspect-w-7 xl:aspect-h-8">
          <Image
            alt="not found"
            src={image.imageSrc}
            className={cn(
              "duration-700 ease-in-out group-hover:opacity-75",
              isLoading
                ? "scale-110 blur-2xl grayscale"
                : "scale-100 blur-0 grayscale-0"
            )}
            onLoadingComplete={() => setLoading(false)}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h3 className="text-md mt-4 text-left font-bold text-white">
          {image.name}
        </h3>
        <p className="text-md mt-1 text-left font-medium text-white">
          @{image.username}
        </p>
      </a>
      {/*ts-ignore*/}
      <Button
        variant={"outline"}
        colorScheme={"red"}
        size={"xs"}
        onClick={() => deleteProduct()}
      >
        Delete
      </Button>
    </div>
  );
};

export default GalleryImage;
