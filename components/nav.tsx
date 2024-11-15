"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Github, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import DynamicButton from "./dynamic-button";

export const Nav = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  const pathname = usePathname();
  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-125%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky left-0 right-0 top-4 z-50 mx-auto flex h-fit max-w-4xl items-center justify-between rounded-lg border bg-background p-2"
    >
      {/* Logo section */}
      <div className="flex-shrink-0">
        <h1 className="ml-2">
          <Link href="/">NextJS - Auth0</Link>
        </h1>
      </div>

      {/* Links section - centered */}
      <div className="hidden md:flex items-center justify-center flex-grow">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`mx-4 ${
              pathname === link.href
                ? "pointer-events-none text-muted-foreground"
                : "text-primary/80 transition-all hover:-mt-px hover:mb-px hover:text-primary"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Actions section */}
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" asChild>
          <Link href="https://github.com/uprizingFaze">
            <Github />
          </Link>
        </Button>
        <ModeToggle />
        <DynamicButton />

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="mt-8 flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${
                    pathname === link.href
                      ? "text-primary/80 transition-all hover:text-primary"
                      : "pointer-events-none text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
};

const links = [
  { name: "Home", href: "/" },
  // { name: "User", href: "/user" },
  { name: "About", href: "/about" },
  { name: "Protected", href: "/protected" },
  // { name: "Pricing", href: "/pricing" },
  // { name: "Headers", href: "/header" },
  // { name: "Footers", href: "/footer" },
];
