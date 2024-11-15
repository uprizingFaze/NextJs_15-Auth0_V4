import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/vercel.svg";


const Hero = () => {
  return (
    <div className="mb-14 mt-16">
      <h1 className="text-3xl font-normal tracking-tight md:text-6xl">
        This is a example with NextJs 15 and Auth0.
      </h1>
      <div className="flex w-fit flex-wrap items-center gap-6 rounded-lg border p-4">
        <p>As seen in:</p>
        <Image className="h-6 w-fit " src={Logo} alt=""></Image>
        <Image className="h-6 w-fit " src={Logo} alt=""></Image>
        <Image className="h-6 w-fit " src={Logo} alt=""></Image>
      </div>

      <div className="md:text-lg">
        <p className="hidden md:block">
          We make components for marketing sites.
        </p>
        <div className="grid gap-2 md:flex">
          <p className="opacity-50">
            Visit craftui.org to use our components for free.{" "}
          </p>
          <Link className="transition-all hover:opacity-70" href="#">
            Check it Out -{`>`}
          </Link>
        </div>
        <p className="mt-4 text-xs">
          <span className="opacity-50">Available now online.</span> Tell us what
          you build next.
        </p>
      </div>
    </div>
  );
};

export default Hero;
