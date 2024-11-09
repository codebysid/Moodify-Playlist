import { useLocation } from "react-router-dom";
import Button from "./Button";
import Icons from "./Icons";
import withNavigate from "./HOC/NavigateTo";

const Playlist = () => {
  const { state } = useLocation();
  const HomeButton = withNavigate(Button);
  if (!state && !state?.url)
    throw new Error("Generate a playlist first before accessing this route");
  const handleOpenPlaylist = () => (window.location.href = state.url);
  return (
    <div className=" w-full flex flex-col gap-3 justify-center items-center">
      <Button
        className="disabled:cursor-not-allowed"
        icon={<Icons name="spotifyIcon" />}
        onClick={handleOpenPlaylist}
      >
        <span>Open Playlist in Spotify</span>
      </Button>
      <HomeButton route="/" variant="ghost">
        Generate More Playlist
      </HomeButton>
    </div>
  );
};

export default Playlist;
