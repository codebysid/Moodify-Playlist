import { useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import Icons from "./Icons";

const Playlist = () => {
  const {
    state: { url },
  } = useLocation();
  const navigate = useNavigate();
  if (!url) navigate("/");
  const handleOpenPlaylist = () => (window.location.href = "url");
  return (
    <div className=" w-full flex justify-center items-center">
      <Button
        className="disabled:cursor-not-allowed"
        icon={<Icons name="spotifyIcon" />}
        onClick={handleOpenPlaylist}
      >
        <span>Open Playlist in Spotify</span>
      </Button>
    </div>
  );
};

export default Playlist;
