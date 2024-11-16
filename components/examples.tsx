import Link from "next/link";
import { Coins, ArrowRight, Route } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

type ExampleText = {
  icon: JSX.Element;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

const exampleText: ExampleText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Routes protected On the server",
    href: "/server",
    description:
      "Protected routes on the server are routes that are protected by the server component.",
    cta: "Server",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Routes protected in the client",
    href: "/client",
    description:
      "Protected routes in the client are routes that are protected by the client component.",
    cta: "Client",
  },
];

const singleFeatureText: ExampleText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "More information",
    href: "https://github.com/auth0/nextjs-auth0/tree/v4",
    description:
      "Check out the documentation for more information on how to use Auth0 with Next.js 15.",
    cta: "GitHub",
  },
];

const sdkRoutes = [
  {
    path: "/auth/login",
    description:
      "Login route where users will be redirected to start an authentication transaction",
    href: "/auth/login",
  },
  {
    path: "/auth/logout",
    description:
      "Logout route that must be added to your Auth0 application's Allowed Logout URLs",
    href: "/auth/logout",
  },
  {
    path: "/auth/callback",
    description:
      "Callback route that must be added to your Auth0 application's Allowed Callback URLs",
    href: "/auth/callback",
  },
  {
    path: "/auth/profile",
    description:
      "Route to check the user's session and return their attributes",
    href: "/auth/profile",
  },
  {
    path: "/auth/access-token",
    description: "Route to check the user's session and return an access token",
    href: "/auth/access-token",
  },
  {
    path: "/auth/backchannel-logout",
    description:
      "Route that will receive a logout_token when a configured Back-Channel Logout initiator occurs",
    href: "/auth/backchannel-logout",
  },
];

const Example = () => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-2xl">Example routes</h3>
      <h4 className="text-xl font-light opacity-70">
        Here are some example routes to get you started.
      </h4>

      <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-2">
        {exampleText.map(({ icon, title, description, href, cta }, index) => (
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
              className="flex bg-card flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
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
      <div className="mt-12">
        <h3 className="text-2xl mb-6">SDK Routes</h3>
        <h4 className="text-xl font-light opacity-70 mb-6">
          The SDK mounts 6 routes
        </h4>
        <div className="grid gap-4 mt-6 md:mt-12">
          {sdkRoutes.map((route, index) => (
            <Link href={route.href} key={index}>
              <Card className="transition-all hover:-translate-y-1 hover:shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Route className="h-5 w-5" />
                    <code className="text-primary">{route.path}</code>
                  </CardTitle>
                  <CardDescription>{route.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example;
