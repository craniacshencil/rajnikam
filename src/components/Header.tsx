import clsx from "clsx";
import { twMerge } from "tailwind-merge";
interface headerInputs {
  activeTab: "home" | "blog";
}
const Header: React.FC<headerInputs> = ({ activeTab }) => {
  return (
    <div className="w-full flex justify-between flex-wrap items-center mt-5">
      <h1 className="text-3xl self-end text-primary">Raj Nikam</h1>
      <nav className="flex justify-around gap-2 mt-1 text-m self-start text-primary font-bold">
        <a
          // This adds different styling on the basis of which page it is on
          className={twMerge(
            clsx(
              activeTab == "home" && "underline underline-offset-4 text-accent",
            ),
            "hover:text-secondary transition duration-300",
          )}
          href={`/`}
        >
          Home
        </a>
        <p>|</p>
        <a
          className={twMerge(
            clsx(
              activeTab == "blog" && "underline underline-offset-4 text-accent",
            ),
            "hover:text-secondary transition duration-300",
          )}
          href={`/blogs`}
        >
          Blog
        </a>
      </nav>
    </div>
  );
};

export default Header;
