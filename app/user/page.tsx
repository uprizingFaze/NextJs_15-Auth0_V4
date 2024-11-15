import NotAuthenticated from "@/components/not-authenticated";
import UserCard from "@/components/user-card";
import { auth0 } from "@/lib/auth0";

export default async function Home() {
  const session = await auth0.getSession();

  if (!session) {
    return <NotAuthenticated />;
  }

  return (
    <UserCard
      avatarUrl={session.user.picture}
      name={session.user.name}
      nickname={session.user.nickname}
      email={session.user.email}
    />
  );
}
