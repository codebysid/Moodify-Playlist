import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import Tagline from "./Tagline";

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

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const btn = submitBtnRef.current;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
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

      if (!res) throw new Error("Gemini under too much load, try later");
      const data = await res.json();
      if (!data) throw new Error("Gemini couldn't identify mood");
      if (!data.success) throw new Error("Something went wrong, try again");
      const aiMood = data.message.mood.replace("\n", "").toLowerCase().trim();
      setMood((prev) => ({
        ...prev,
        detectedMoodWithAi: aiMood,
      }));
      btn.textContent = "Generating Playlist....";

      const res2 = await fetch(`${backendUrl}/spotify/getSongs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ aiMood }),
      });
      if (!res2) {
        throw new Error("Spotify under too much load, try later");
      }
      const data2 = await res2.json();
      if (!data2 && !data2.success)
        throw new Error("Spotify under too much load, try later");
      btn.textContent = "Create playlist with AI";
      navigate(`/playlist`, { state: { url: data2.message.playlistUrl } });
    } catch (err) {
      console.log(err);
      navigate("/error", {
        state: { message: "Spotify API under too much load, pls try later" },
      });
    }
  };

  const handleMoodDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMood((prev) =>
      prev
        ? { ...prev, moodDescription: e.target.value }
        : {
            moodDescription: e.target.value,
            detectedMoodWithAi: "",
            moodPlaylistUrl: "",
          }
    );
  };

  return (
    <div className=" flex flex-col gap-10">
      <Tagline tagline="Express Your Mood." />
      <div className="border-animation relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center justify-center w-full border-2 border-primary bg-secondary p-10 rounded-full">
          <form
            className="flex flex-col justify-center items-start lg:items-center gap-5 lg:w-80"
            onSubmit={handleSubmit}
          >
            <textarea
              className=" bg-transparent outline-none resize-none pl-2 h-14 lg:h-28 w-full lg:text-xl"
              value={mood.moodDescription}
              onChange={handleMoodDescriptionChange}
              placeholder="Ex: Frustrated due to college assignments"
            />
            <Button
              ref={submitBtnRef}
              type="submit"
              className="disabled:cursor-not-allowed w-full lg:text-xl"
            >
              <span>Create playlist with AI</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputMood;
