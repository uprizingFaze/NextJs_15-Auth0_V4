
"use client";

import { useUser } from "@auth0/nextjs-auth0";
import { createContext, useContext, ReactNode } from "react";

type UserContextType = ReturnType<typeof useUser>;

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const userState = useUser();

  return (
    <UserContext.Provider value={userState}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
}