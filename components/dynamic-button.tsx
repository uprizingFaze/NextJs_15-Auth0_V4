"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@auth0/nextjs-auth0";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function DynamicButton() {
  const { user } = useUser();

  if (!user) {
    return (
      <main className="space-x-2">
        <Button variant="outline" asChild>
          <a href="/auth/login">Log in</a>
        </Button>
        <Button asChild>
          <a href="/auth/login?screen_hint=signup">Sign up</a>
        </Button>
      </main>
    );
  }

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Avatar className="h-8 w-8 cursor-pointer rounded-lg">
          <AvatarImage src={user?.picture} alt={user?.name} />
          <AvatarFallback>
            {user?.name
              ?.split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent className="w-auto">
        <div className="flex space-x-2">
          <Avatar className="h-16 w-16">
            <AvatarImage src={user?.picture} alt={user?.name} />
            <AvatarFallback>
              {user?.name
                ?.split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{user?.name}</h4>
            <p className="text-sm text-muted-foreground">{user?.email}</p>
            <Button variant="destructive" size="sm" asChild>
              <a href="/auth/logout">Log out</a>
            </Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
