import Loading from "../components/Loading";
import { useSelector } from "react-redux";
import { IState, ILoading } from "../models";

const Results = () => {
  const loading: ILoading = useSelector((state: IState) => state.loading);
  return loading ? <Loading /> : "Here's the Results Page!";
};

export default Results;
