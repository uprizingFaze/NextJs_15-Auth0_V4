import Link from "next/link";

import { Coins, ArrowRight } from "lucide-react";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Routes protected in the client",
    href: "/client",
    description:
      "Protected routes in the client are routes that are protected by the client component.",
    cta: "Client",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Routes protected On the server",
    href: "/server",
    description:
      "Protected routes on the server are routes that are protected by the server component.",
    cta: "Server",
  },
];

const singleFeatureText: FeatureText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "More information",
    href: "https://github.com/auth0/nextjs-auth0/tree/v4",
    description:
      "Check out the documentation for more information on how to use Auth0 with Next.js 15.", 
    cta: "GitHub",
  },
];

const Feature = () => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-4xl">
        Example routes
      </h3>
      <h4 className="text-2xl font-light opacity-70">
        Here are some example routes to get you started.
      </h4>

      <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-2">
        {featureText.map(({ icon, title, description, href, cta }, index) => (
          <Link
            href={`${href}`}
            className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
            key={index}
          >
            <div className="grid gap-4">
              {icon}
              <h4 className="text-xl text-primary">{title}</h4>
              <p className="text-base opacity-75">{description}</p>
            </div>
            {cta && (
              <div className="flex h-fit items-center text-sm font-semibold">
                <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            )}
          </Link>
        ))}
      </div>
      <div>
        {singleFeatureText.map(
          ({ icon, title, description, href, cta }, index) => (
            <Link
              href={`${href}`}
              className="flex flex-col justify-between gap-6 rounded-lg border bg-muted/25 p-6 transition-all hover:-mt-2 hover:mb-2"
              key={index}
            >
              <div className="grid gap-4">
                {icon}
                <h4 className="text-xl text-primary">{title}</h4>
                <p className="text-base opacity-75">{description}</p>
              </div>
              {cta && (
                <div className="flex h-fit items-center text-sm font-semibold">
                  <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              )}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Feature;
