import Image from "next/image";
import { ChakraProvider } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import Header from "./components/header";

export default function Home() {
  return (
    <ChakraProvider>
<Header/>
  </ChakraProvider>
  );
}
