import { navItems } from "../lib/constants";
import Button from "./Button";
import withNavigate from "./HOC/NavigateTo";
import Logo from "./Logo";

const Navbar = () => {
  const LogoWithHomeNavigation = withNavigate(Button);
  return (
    <section className=" w-full flex flex-row items-center justify-center lg:justify-around bg-secondary py-0 lg:py-4">
      <LogoWithHomeNavigation route="/" variant="ghost">
        <Logo />
      </LogoWithHomeNavigation>
      <nav className="flex-row gap-6 hidden lg:flex">
        {navItems.map((item) => {
          return (
            <a href={item.link} key={item.id}>
              <span className="relative cursor-pointer px-6 z-10 after:absolute after:block after:bg-primary after:h-[1px] after:w-full after:inset-0 after:rounded-lg after:-z-10 after:m-auto after:opacity-0 after:transition-all after:duration-500 hover:after:opacity-100 hover:after:h-[50px]">
                {item.title}
              </span>
            </a>
          );
        })}
      </nav>
      <nav className="flex flex-row items-center justify-around w-full lg:hidden fixed bottom-0 left-0 bg-primary z-50">
        {navItems.map((item) => {
          return (
            <a href={item.link} key={item.id}>
              <span className="w-full flex justify-center items-center">
                <span className="relative cursor-pointer pt-2 z-10 after:absolute after:block after:bg-secondary after:h-[1px] after:w-full after:inset-0 after:rounded-lg after:-z-10 after:m-auto after:opacity-0 after:transition-all after:duration-500 hover:after:opacity-100 hover:after:h-[50px] fill-white">
                  {item.icon}
                </span>
              </span>
            </a>
          );
        })}
      </nav>
    </section>
  );
};

export default Navbar;
