import ScrollItem from "./ScrollItem";

interface IExamples {
  scrollData: string[];
  scrollDirection: "left" | "right";
}

const InfiniteScroll = ({ scrollData, scrollDirection }: IExamples) => {
  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex ${
          scrollDirection == `left`
            ? `scroll-content-left`
            : scrollDirection == "right" && `scroll-content-right`
        } `}
      >
        {scrollData &&
          scrollData.map((item, key) => <ScrollItem key={key} item={item} />)}
        {scrollData &&
          scrollData.map((item, key) => <ScrollItem key={key} item={item} />)}
      </div>
    </div>
  );
};

export default InfiniteScroll;
