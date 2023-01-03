import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";

import { FormControl, FormLabel, Input, Text, Button } from "@chakra-ui/react";
import { supabase } from "./helper";

const FormNFT = () => {
  const [name, setName] = useState("");
  const [creator, setCreator] = useState("");
  const [href, setHref] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  const toast = useToast();

  async function createProduct() {
    try {
      const { data, error } = await supabase
        .from("images")
        .insert({
          name: name,
          href: href,
          username: creator,
          imageSrc: imageSrc,
        })
        .single();

      toast({
        title: "NFT created",
        colorScheme: "green",
        variant: "top-accent",
        position: "top",
        isClosable: true,
      });

      if (error) throw error;
      window.location.reload();
    } catch (error: any) {
      toast({
        title: `${error.message}`,
        position: "top",
        colorScheme: "red",
        variant: "solid",
        isClosable: true,
      });
    }
  }

  return (
    <div className="flex-1 p-7 ">
      <Text textAlign={"left"} fontSize="3xl">
        Share your NFT
      </Text>
      <FormControl my={4} id="name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Name"
          _placeholder={{ color: "gray.500" }}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>

      <FormControl my={4} id="username">
        <FormLabel>Creator</FormLabel>
        <Input
          placeholder="Your nickname"
          _placeholder={{ color: "gray.500" }}
          type="text"
          onChange={(e) => setCreator(e.target.value)}
        />
      </FormControl>

      <FormControl my={4} id="href" isRequired>
        <FormLabel>Link to creator </FormLabel>
        <Input
          placeholder="default: #"
          _placeholder={{ color: "gray.500" }}
          type="text"
          onChange={(e) => setHref(e.target.value)}
        />
      </FormControl>

      <FormControl my={4} id="imageSrc">
        <FormLabel>File link</FormLabel>
        <Input
          placeholder="file url"
          _placeholder={{ color: "gray.500" }}
          type="text"
          onChange={(e) => setImageSrc(e.target.value)}
        />
      </FormControl>

      <Button mt={4} onClick={() => createProduct()}>
        Add
      </Button>
    </div>
  );
};

export default FormNFT;
