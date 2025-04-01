import { useSession , signOut } from "@/utils/auth-client";
  
const Navbar = () => {
  const session = useSession();

  return (
    <nav className="p-4 flex justify-between">
      <h1 className="text-xl font-bold">My App</h1>
      {session ? (
        <button
          onClick={() => signOut()}
          className="py-2 px-4 border border-white rounded-md hover:bg-white hover:text-black transition-all duration-300"
        >
          Logout
        </button>
      ) : (
        <a href="/login">Login</a>
      )}
    </nav>
  );
};

export default Navbar;
