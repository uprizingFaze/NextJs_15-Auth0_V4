import { Shield } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { auth0 } from "@/lib/auth0";
import NotAuthenticated from "@/components/not-authenticated";

export default async function Protected() {
  const session = await auth0.getSession();

  if (!session) {
    return <NotAuthenticated />;
  }
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-green-500" />
            <CardTitle>Protected Route</CardTitle>
          </div>
          <CardDescription>
            This is a secure area of the application
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            You are viewing this content because you have been successfully
            authenticated. Only authorized users can access this protected
            section.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
