import Icons from "./Icons";

const navItems = [
  {
    id: 1,
    title: "How to use ?",
    icon: <Icons name="questionMarkIcon" />,
    link: "#howToUse",
  },
  {
    id: 3,
    title: "Example Mood Prompts",
    icon: <Icons name="playIcon" />,
    link: "#demoDescriptions",
  },
  {
    id: 2,
    title: "Contact",
    icon: <Icons name="contactDevIcon" />,
    link: "#contactDeveloper",
  },
];

const Navbar = () => {
  return (
    <section className=" w-full flex flex-row items-center justify-around ">
      <h1 className="text-3xl lg:text-5xl font-bold">Moodify</h1>
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
      <nav className="flex flex-row items-center justify-around w-full lg:hidden fixed bottom-0 bg-primary z-50">
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
