"use client";

import { useUser } from "@auth0/nextjs-auth0";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import NotAuthenticated from "@/components/not-authenticated";

export default function ServerAuth() {
  const { user } = useUser();

  if (!user) {
    return <NotAuthenticated />;
  }

  return (
    <Card className="max-w-md w-full mx-4">
      <CardHeader className="flex flex-row items-center gap-4 relative">
        <Badge variant="blue" className="absolute top-4 right-4">
          Client Component
        </Badge>
        <Avatar>
          <AvatarImage src={user?.picture} alt={user?.name} />
          <AvatarFallback>{user?.name?.[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">Welcome!</h1>
          <p className="text-sm text-muted-foreground">{user?.email}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid gap-1">
            <h3 className="font-medium">Name</h3>
            <p className="text-sm text-muted-foreground">{user?.name}</p>
          </div>
          <div className="grid gap-1">
            <h3 className="font-medium">Auth0 ID</h3>
            <p className="text-sm text-muted-foreground">{user?.sub}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
