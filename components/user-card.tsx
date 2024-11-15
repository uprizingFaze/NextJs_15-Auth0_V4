import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AtSign, Mail } from "lucide-react";

export default function UserCard({
  avatarUrl = "https://github.com/uprizingFaze.png",
  name = "uprizing",
  nickname = "uprizing",
  email = "uprizing@example.com",
}: {
  avatarUrl?: string;
  name?: string;
  nickname?: string;
  email?: string;
}) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="flex flex-col items-center p-6 space-y-4">
          <Avatar className="w-24 h-24">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback>
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">{name}</h2>
            <div className="flex items-center justify-center text-sm text-muted-foreground">
              <AtSign className="w-4 h-4 mr-1" />
              <span>{nickname}</span>
            </div>
            <div className="flex items-center justify-center text-sm text-muted-foreground">
              <Mail className="w-4 h-4 mr-1" />
              <span>{email}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
