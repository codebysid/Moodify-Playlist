import Button from "./Button";

interface ILogo {
  onClick?: () => void;
}

const Logo = ({ onClick }: ILogo) => {
  return (
    <Button onClick={onClick} variant="ghost">
      <span className="text-3xl lg:text-5xl font-bold flex flex-row items-center justify-center grayscale hover:grayscale-0 transition-all duration-200 cursor-pointer">
        <span>Mood</span>
        <span>
          <img
            src="/guitar.png"
            alt="logo"
            className="h-16 lg:h-20 -scale-x-100"
          />
        </span>
        <span>fy</span>
      </span>
    </Button>
  );
};

export default Logo;
