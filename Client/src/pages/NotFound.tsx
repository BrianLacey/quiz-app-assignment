import { useNavigate, Link } from "react-router";
import { useDispatch } from "react-redux";
import { changeLoading } from "../slices/loadingSlice";

const NotFound = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleBack = () => {
    dispatch(changeLoading(true));
    navigate(-1);
  };

  return (
    <div className="flex flex-col gap-y-16 pt-48 text-4xl text-yellow-950">
      <div className="flex justify-center">Sorry, there's nothing here.</div>
      <div className="flex justify-center">
        <Link
          className="bg-yellow-950 text-white p-4 rounded-xl hover:bg-slate-900 active:p-3 active:mt-1 active:text-[32px]"
          to="/quiz-maker"
          onClick={handleBack}
        >
          Go back
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
