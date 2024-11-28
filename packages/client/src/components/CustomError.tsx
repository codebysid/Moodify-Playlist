import { useLocation, useRouteError } from "react-router-dom";
import Button from "./Button";
import withNavigate from "./HOC/NavigateTo";

export default function CustomError() {
  const { state } = useLocation();
  const HomeButton = withNavigate(Button);
  let error = useRouteError();
  console.error(error);
  return (
    <div className=" flex flex-col items-center gap-4 text-center">
      <span className="lg:text-xl">
        {error instanceof Error ? (
          error.message
        ) : error ? (
          <div className="flex flex-col gap-2">
            <span>{(error as any)?.statusText || "Status unknown"}</span>
            <span>{(error as any)?.data || "No additional data"}</span>
          </div>
        ) : (
          state.message || "An unknown error occurred."
        )}
      </span>
      <HomeButton route="/">Create New Playlist</HomeButton>
    </div>
  );
}
