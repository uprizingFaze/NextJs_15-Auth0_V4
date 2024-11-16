import Example from "@/components/examples";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="m-auto flex h-full w-full max-w-5xl flex-col gap-8 px-4 py-4 md:px-6 md:py-10">
      <Hero />
      <Example />
    </main>
  );
}
