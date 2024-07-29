"use client";
import React, { useState } from "react";
import { trpc } from "@/server/client";
export default function Home() {
  const getUsers = trpc.users.getUsers.useQuery();
  const addUser = trpc.users.addUser.useMutation({
    onSettled:()=>{
      getUsers.refetch();
    }
  });

  const [name, setName] = useState<string>("");
  const [race, setRace] = useState<string>("");

  return (
    <main className="flex  flex-col items-center justify-between p-24 text-lg">
      {JSON.stringify(getUsers.data)}
      <div className="flex flex-col gap-3">
        Name: {" "}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="border"
        />
        Race:{""}
        <input
          value={race}
          onChange={(e) => setRace(e.target.value)}
          type="text"
          className="border"/>
        <button className="border"
        onClick={()=>addUser.mutate({name,race})}
        >Add</button>
      </div>
    </main>
  );
}
