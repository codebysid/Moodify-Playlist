import Button from "./Button";
import Icons from "./Icons";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

const InputMood = () => {
  const [mood, setMood] = useState<{
    moodDescription: string;
    detectedMoodWithAi: string;
    moodPlaylistUrl: string;
  }>({
    moodDescription: "",
    detectedMoodWithAi: "",
    moodPlaylistUrl: "",
  });
  const submitBtnRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const btn = submitBtnRef.current;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    console.log({ backendUrl, btn, submitBtnRef });
    if (!mood.moodDescription || !backendUrl || !btn) return;
    btn.textContent = "Detecting Mood....";
    setMood((prev) => ({
      ...prev,
      detectedMoodWithAi: "",
      moodPlaylistUrl: "",
    }));
    try {
      const res = await fetch(
        `${backendUrl}/gemini/detectMood/${encodeURIComponent(
          mood.moodDescription
        )}`
      );

      if (!res) throw new Error("can't get res");
      const data = await res.json();
      if (!data) throw new Error("can't get res");
      console.log({ data });
      if (!data.success) throw new Error("Unsuccessful request");
      const aiMood = data.message.mood.replace("\n", "").toLowerCase().trim();
      setMood((prev) => ({
        ...prev,
        detectedMoodWithAi: aiMood,
      }));
      btn.textContent = "Generating Playlist....";

      const res2 = await fetch(`${backendUrl}/spotify/getSongs/excited`);
      if (!res2) {
        console.log("invalid response", { res2 });
      }
      const data2 = await res2.json();
      if (!data2 && !data2.success) return;
      console.log({ data2 });
      setMood((prev) => ({
        ...prev,
        moodPlaylistUrl: data2.message.playlistUrl,
      }));
      btn.textContent = "Create playlist with AI";
    } catch (err) {
      console.log(err);
    }
  };

  const handleMoodDescriptionChange = (e: ChangeEvent<HTMLInputElement>) =>
    setMood((prev) =>
      prev
        ? { ...prev, moodDescription: e.target.value }
        : {
            moodDescription: e.target.value,
            detectedMoodWithAi: "",
            moodPlaylistUrl: "",
          }
    );

  const handleOpenPlaylist = () =>
    (window.location.href = mood.moodPlaylistUrl);

  useEffect(() => {
    console.log({ mood });
  }, [mood]);
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-row items-center  justify-start gap-40">
        <form
          className="flex flex-col justify-center min-h-screen gap-5"
          onSubmit={handleSubmit}
        >
          <input
            className="rounded-lg px-8 py-4 bg-transparent outline-none"
            value={mood.moodDescription}
            onChange={handleMoodDescriptionChange}
            placeholder="Ex: Frustrated due to college stress"
          />

          <Button
            ref={submitBtnRef}
            icon={<Icons name="geminiIcon" />}
            type="submit"
            className=" disabled:cursor-not-allowed"
          >
            <span>Create playlist with AI</span>
          </Button>
        </form>
        {mood.moodPlaylistUrl && (
          <Button
            icon={<Icons name="spotifyIcon" />}
            onClick={handleOpenPlaylist}
          >
            <span>Open Playlist in Spotify</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default InputMood;
