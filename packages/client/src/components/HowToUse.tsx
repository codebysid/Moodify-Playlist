const HowToUse = () => {
  return (
    <div
      id="howToUse"
      className=" flex flex-col justify-center items-center gap-20 "
    >
      <h2 className=" text-xl lg:text-3xl font-bold">How To Use ?</h2>
      <div className="flex flex-col justify-center items-center gap-5">
        <img
          src="/mobileViewHowToUse.png"
          alt="how to use moodify"
          className=" lg:h-[50rem]"
        />
      </div>
    </div>
  );
};

export default HowToUse;
