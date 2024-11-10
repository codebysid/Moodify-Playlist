import { useLocation } from "react-router-dom";
import Button from "./Button";
import Icons from "./Icons";
import withNavigate from "./HOC/NavigateTo";
import Tagline from "./Tagline";

const Playlist = () => {
  const { state } = useLocation();
  const HomeButton = withNavigate(Button);
  if (!state && !state?.url)
    throw new Error("Generate a playlist first before accessing this route");
  const handleOpenPlaylist = () => (window.location.href = state.url);
  return (
    <div className=" flex flex-col gap-10">
      <Tagline tagline="Explore Your Playlist." />
      <div className="border-animation relative z-10">
        <div className=" w-full flex flex-col gap-3 justify-center items-center border-2 border-primary p-10 rounded-full bg-secondary">
          <Button
            className="disabled:cursor-not-allowed"
            icon={<Icons name="spotifyBtnIcon" />}
            onClick={handleOpenPlaylist}
          >
            <span>Open Playlist</span>
          </Button>
          <HomeButton route="/" variant="ghost">
            Generate More Playlist
          </HomeButton>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
