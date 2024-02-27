import { useSession, signIn, signOut } from "next-auth/react"


export default function Login() {
  const { data: session,status } = useSession();
  const userEmail = session?.user?.email;

  if (status === "loading") {
    return <p>ま手間mてwてwklf絵話ifkぉ絵bん和fgぉ絵の亜wft</p>;
  }

  if (status === "authenticated") {
    return (
      <>
        <p>Signed in as {userEmail}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      <p>Not signed in.</p>
      <button onClick={() => signIn("github")}>Sign in</button>
    </>
  );
  
  
}
