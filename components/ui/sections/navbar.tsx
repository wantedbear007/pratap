import { USER_DATA } from "@/content/user-data";
import ThemeToggle from "../enhancers/theme-toggle";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-4 sm:py-6 md:py-8 lg:py-10 bg-theme-bg-100">
      <div className="text-lg sm:text-xl md:text-2xl font-semibold font-stack-headline text-theme-fg">
        {USER_DATA.name}
      </div>
      <ThemeToggle />
    </nav>
  );
}
