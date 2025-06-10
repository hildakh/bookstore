import Link from "next/link";
import UtilityBar from "./utility-bar";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center py-2 px-4">
      <Link href="/" className="text-md">Home</Link>
      <UtilityBar />
    </div>
  );
};

export default NavBar;