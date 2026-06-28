import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="container flex min-h-dvh flex-col items-center justify-center gap-6 text-center">
      <Image src="/logo.png" alt="2BHAI.tech" width={96} height={96} priority />
      <div>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">2BHAI.tech</h1>
        <p className="mt-2 text-muted-foreground">
          Production foundation is live. Pages ship next.
        </p>
      </div>
      <Button>It works ✓</Button>
    </main>
  );
}
