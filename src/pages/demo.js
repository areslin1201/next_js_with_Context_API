import { useContext } from "react";
import { ContextData } from "@/context/context";
import Link from "next/link";

export default function Demo(){
  const { value } = useContext(ContextData);

  return (
    <>
      <p>value: {value}</p>
      <Link href={`/`}>go to home</Link>
    </>
  )
}