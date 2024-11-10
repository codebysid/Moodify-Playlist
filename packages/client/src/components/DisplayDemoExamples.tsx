import { moodSamples } from "../lib/constants";
import InfiniteScroll from "./InfiniteScroll";

const DisplayDemoExamples = () => {
  return (
    <div id="demoDescriptions" className="flex flex-col gap-20">
      <h2 className="text-xl lg:text-3xl font-bold text-center">
        Demo descriptions
      </h2>
      <div className="flex flex-col gap-2 w-[95vw]">
        <InfiniteScroll scrollData={moodSamples} scrollDirection="left" />
        <InfiniteScroll scrollData={moodSamples} scrollDirection="right" />
      </div>
    </div>
  );
};

export default DisplayDemoExamples;
