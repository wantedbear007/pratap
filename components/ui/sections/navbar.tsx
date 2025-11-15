import { USER_DATA } from "@/content/user-data";
import ThemeToggle from "../enhancers/theme-toggle";




export default function Navbar() {
  return (
    <nav className=" w-full flex items-center justify-between px-20 py-10 bg-theme-bg-100 ">
      <div className="text-2xl font-semibold font-stack-headline  text-theme-fg">
        {USER_DATA.name}
      </div>
      <ThemeToggle />
    </nav>
  );
}
