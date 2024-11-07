const ScrollItem = ({ item }: { item: string }) => {
  return (
    <div className="bg-primary p-4 rounded-xl min-w-80 min-h-32 mx-2">
      {item}
    </div>
  );
};

export default ScrollItem;
