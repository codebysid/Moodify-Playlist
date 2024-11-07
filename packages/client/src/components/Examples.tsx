import ScrollItem from "./ScrollItem";

interface IExamples {
  infiniteScrollData: string[];
  scrollDirection: "left" | "right";
}

const Examples = ({ infiniteScrollData, scrollDirection }: IExamples) => {
  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex ${
          scrollDirection == `left`
            ? `scroll-content-left`
            : scrollDirection == "right" && `scroll-content-right`
        } `}
      >
        {infiniteScrollData.map((item, key) => (
          <ScrollItem key={key} item={item} />
        ))}
        {infiniteScrollData.map((item, key) => (
          <ScrollItem key={key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Examples;
