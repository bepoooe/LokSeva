"use client";
import { useEffect, useState } from "react";
import supabase from "@/lib/supabaseClient";
import { User } from "@supabase/supabase-js";

export default function Dashboard() {
  
const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        window.location.href = "/auth"; // Redirect to login page
      } else {
        setUser(data.user);
      }
    });
  }, []);

  return <div className="p-10 text-xl">Welcome, {user?.email}!</div>;
}
