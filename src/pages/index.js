import { useContext } from "react";
import { ContextData } from "@/context/context";
import Link from "next/link";

export default function Home() {
  const { value, setValue } = useContext(ContextData);
  return (
    <>
      <button onClick={() => setValue(value + 1)}>add value</button>
      <p onClick={() => setValue(2)}>value: {value}</p>
      <Link href={`/demo`}>go to demo</Link>
    </>
  )
}
