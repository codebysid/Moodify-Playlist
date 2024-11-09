import { useRouteError } from "react-router-dom";
import Button from "./Button";
import withNavigate from "./HOC/NavigateTo";

export default function CustomError() {
  const HomeButton = withNavigate(Button);
  let error = useRouteError();
  console.error(error);
  return (
    <div className=" flex flex-col items-center gap-4 text-center">
      <span className="lg:text-xl">
        {error instanceof Error
          ? error.message
          : (
              <div className=" flex flex-col gap-2">
                <span>{(error as any)?.statusText}</span>
                <span>{(error as any)?.data}</span>
              </div>
            ) || "An unknown error occurred."}
      </span>
      <HomeButton route="/">Create New Playlist</HomeButton>
    </div>
  );
}