"use client";
import React, { useEffect, useState } from "react";
import { trpc } from "@/server/client";
import { createPost, fetchPost } from "./actions/_actions";


type Users = {
  id: number;
  name: string;
  race: string;
}
export default function Home() {
  // const getUsers = trpc.users.getUsers.useQuery();
  // const addUser = trpc.users.addUser.useMutation({
  //   onSettled:()=>{
  //     getUsers.refetch();
  //   }
  // });

  const [name, setName] = useState<string>("");
  const [race, setRace] = useState<string>("");
  const [users, setUsers] = useState<Users[]>();


  const handleFetch = async() => {
    const data = await fetchPost();
    setUsers(data);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPost();
        setUsers(data);
      } catch (err: any) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);


  return (
    <main className="flex  flex-col items-center justify-between p-24 text-lg">
      {JSON.stringify(users)}
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
          className="border" />
        <button className="border"
          onClick={async () => await createPost({ name, race }).then(() => handleFetch())}
        >Add</button>
      </div>
    </main>
  );
}
