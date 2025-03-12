'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { move } from "./_action";

export default function Home() {
  const router = useRouter()
  
  return (
    <>
      <Link href="/test">{'<Link />'} to /test</Link>
      <button onClick={() => {router.push('/test')}}>router.push to /test</button>
      <button onClick={move}>redirect in server action to /test</button>
    </>
  );
}
