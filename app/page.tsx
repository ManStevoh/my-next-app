import Image from "next/image";
import Hello from "@/app/components/hello";
export default function Home() {
  console.log('what im i doing here? --   SERVER/CLIENT?');
  return (
    <><h1 className="text-3xl">welcome to next js</h1><Hello /></>
  );
}
