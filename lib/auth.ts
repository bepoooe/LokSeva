import supabase from "./supabaseClient";

// 🔹 Signup Function
export async function signUpUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  return data;
}

// 🔹 Login Function
export async function signInUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
}

// 🔹 Logout Function
export async function signOutUser() {
  await supabase.auth.signOut();
}
