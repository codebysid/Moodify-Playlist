const navItems = [
  {
    id: 1,
    title: "How to use it ?",
  },
  {
    id: 3,
    title: "Example Mood Prompts",
  },
  {
    id: 2,
    title: "Contact",
  },
];

interface INavItems {
  direction: "row" | "col";
}

const NavItems = ({ direction }: INavItems) => {
  return (
    <nav className={`${direction == "row" ? `flex-row` : "flex-col"} gap-6`}>
      {navItems.map((item) => {
        return (
          <span
            key={item.id}
            className="relative cursor-pointer px-6 z-10 after:absolute after:block after:bg-primary after:h-[1px] after:w-full after:inset-0 after:rounded-lg after:-z-10 after:m-auto after:opacity-0 after:transition-all after:duration-500 hover:after:opacity-100 hover:after:h-[50px]"
          >
            {item.title}
          </span>
        );
      })}
    </nav>
  );
};

export default NavItems;
