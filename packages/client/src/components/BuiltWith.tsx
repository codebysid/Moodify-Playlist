import { builtWith } from "../lib/constants";
import Button from "./Button";
import withNavigate from "./HOC/NavigateTo";
import Icons from "./Icons";

const BuiltWith = () => {
  const GithubStarBtn = withNavigate(Button);
  return (
    <div className=" flex flex-col justify-center items-center gap-20 ">
      <h2 className=" text-xl lg:text-3xl font-bold text-center">Built with</h2>
      <div className=" flex flex-row flex-wrap gap-10 lg:gap-20 justify-center items-center">
        {builtWith &&
          builtWith.map((tech) => {
            return (
              <div
                key={tech.id}
                className=" bg-primary p-4 px-6 lg:p-12 rounded-lg flex flex-col items-center justify-center gap-4 lg:gap-7 hover:-rotate-0 [transform:rotate3d(1_,-1,_1,_15deg)] transition-all duration-300 hover:shadow-lg [box-shadow:12px_12px_0px_0px_#0d0d0d] backdrop-filter backdrop-blur-md "
              >
                {tech.icon}
                <p className="font-semibold lg:text-2xl">{tech.title}</p>
              </div>
            );
          })}
      </div>

      <GithubStarBtn
        icon={<Icons name="starIcon" />}
        href="https://github.com/codebysid/Moodify-Playlist"
      >
        Star <span className=" underline underline-offset-4">Moodify</span> on
        Github
      </GithubStarBtn>
    </div>
  );
};

export default BuiltWith;
