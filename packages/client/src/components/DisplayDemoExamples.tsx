import Examples from "./Examples";
import { moodSamples } from "../lib/constants";

const DisplayDemoExamples = () => {
  return (
    <div id="demoDescriptions" className="flex flex-col gap-20">
      <h2 className="text-xl font-bold text-center">Demo descriptions</h2>
      <div className="flex flex-col gap-2">
        <Examples infiniteScrollData={moodSamples} scrollDirection="left" />
        <Examples
          infiniteScrollData={moodSamples.reverse()}
          scrollDirection="right"
        />
      </div>
    </div>
  );
};

export default DisplayDemoExamples;
