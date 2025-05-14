import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex flex-col gap-y-16 pt-48 text-8xl text-yellow-950">
      <div className="flex justify-center">Loading</div>
      <div className="flex justify-center">
        <ClipLoader cssOverride={{borderWidth: "8px"}} size={150} />
      </div>
    </div>
  );
};

export default Loading;
