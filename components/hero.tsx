import Link from "next/link";

const Hero = () => {
  return (
    <div className="mb-14 mt-16">
      <h1 className="text-3xl font-normal max-w-3xl tracking-tight md:text-6xl mb-5">
        This is a example with NextJs 15 and Auth0.
      </h1>
      <div className="flex w-fit flex-wrap items-center gap-6 rounded-lg border p-3 mb-7">
        <p>
          By{" "}
          <span className="text-blue-500">
            <Link href="https://x.com/uprizingFaze">uprizingFaze</Link>
          </span>
        </p>
      </div>

      <div className="md:text-lg ">
        <p className="hidden md:block mb-3">
          Example of a web app with Next.js 15 and Auth0.
        </p>
        <div className="grid gap-2 md:flex ">
          <p className="opacity-50 max-w-xl">
            Check out the documentation for more information on how to use Auth0
            with Next.js 15.
          </p>
          <Link
            className="transition-all hover:opacity-70"
            href="https://github.com/auth0/nextjs-auth0/tree/v4"
          >
            Check it Out -{`>`}
          </Link>
        </div>
        <p className="mt-4 text-xs">
          <span className="opacity-50">Basic example.</span>
          Tell me if you want more examples or features.
        </p>
      </div>
    </div>
  );
};

export default Hero;
