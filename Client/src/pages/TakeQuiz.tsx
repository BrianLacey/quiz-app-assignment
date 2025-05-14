import { useSelector, useDispatch } from "react-redux";
import { changeLoading } from "../slices/loadingSlice";
import Loading from "../components/Loading";
import {
  IState,
  ILoading,
} from "../models";

const TakeQuiz = () => {
  const loading: ILoading = useSelector((state: IState) => state.loading);

  return <>{loading ? <Loading /> : "Taking the quiz here!"}</>;
};

export default TakeQuiz;
