import React from "react";
import { trpc } from "@/server/client";
export default function Home() {
  const getUsers =trpc.users.getUsers.useQuery();
  return (
    <main className="flex  flex-col items-center justify-between p-24">
        {JSON.stringify(getUsers.data)}
    </main>
  );
}
