interface ITagline {
  tagline: string;
}

const Tagline = ({ tagline }: ITagline) => {
  return (
    <div className="relative lg:text-5xl text-2xl flex flex-col text-center gap-4 after:absolute after:h-9 after:w-[2px] after:bg-primary lg:after:top-[52px] after:top-[38px] after:left-[50%]">
      <span>{tagline}</span>
    </div>
  );
};

export default Tagline;
