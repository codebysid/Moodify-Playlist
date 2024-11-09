import { useNavigate } from "react-router-dom";
import Button from "./Button";
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

  const navigate = useNavigate();

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

      if (!res) throw new Error("Gemini under too much load, try later");
      const data = await res.json();
      if (!data) throw new Error("Gemini couldn't identify mood");
      console.log({ data });
      if (!data.success) throw new Error("Something went wrong, try again");
      const aiMood = data.message.mood.replace("\n", "").toLowerCase().trim();
      setMood((prev) => ({
        ...prev,
        detectedMoodWithAi: aiMood,
      }));
      btn.textContent = "Generating Playlist....";

      const res2 = await fetch(`${backendUrl}/spotify/getSongs/${aiMood}`);
      if (!res2) {
        console.log("invalid response", { res2 });
      }
      const data2 = await res2.json();
      if (!data2 && !data2.success)
        throw new Error("Spotify under too much load, try later");
      console.log({ data2 });
      btn.textContent = "Create playlist with AI";
      navigate(`/playlist`, { state: { url: data2.message.playlistUrl } });
    } catch (err) {
      console.log(err);
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

  useEffect(() => {
    console.log({ mood });
  }, [mood]);

  return (
    <div className="flex flex-col lg:flex-row gap-16 items-center justify-center w-full">
      <form
        className="flex flex-col justify-center items-start lg:items-center gap-5 lg:w-80"
        onSubmit={handleSubmit}
      >
        <textarea
          className=" bg-transparent outline-none resize-none pl-2 h-14 lg:h-28 w-full lg:text-xl border-b-2 border-primary"
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
  );
};

export default InputMood;
