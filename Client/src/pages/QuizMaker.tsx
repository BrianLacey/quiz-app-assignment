import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Button } from "@headlessui/react";
import { changeLoading } from "../slices/loadingSlice";
import { addCategories } from "../slices/categoriesSlice";
import { resetError, updateError } from "../slices/errorSlice";
import { addQuiz } from "../slices/quizSlice";
import { fetchCategories } from "../services.ts/categoriesServices";
import { fetchContent } from "../services.ts/contentServices";
import {
  IState,
  ICategory,
  IDifficulty,
  ISelectedCategory,
  ISelectedDifficulty,
  ILoading,
} from "../models";
import Loading from "../components/Loading";
import CompleteListbox from "../components/CompleteListbox";
import Alert from "../components/Alert";
import NotFound from "./NotFound";
import { difficulty } from "../constants";

const QuizMaker = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories: ICategory[] = useSelector(
    (state: IState) => state.categories
  );
  const loading: ILoading = useSelector((state: IState) => state.loading);
  const [selectedCategory, setSelectedCategory] =
    useState<ISelectedCategory>(0);
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<ISelectedDifficulty>(0);

  const getCategories = async () => {
    try {
      const categories: ICategory[] = await fetchCategories();
      if (categories.length > 0) {
        dispatch(addCategories(categories));
      }
    } catch (error) {
      dispatch(updateError({ isOpen: true, message: error.message }));
    }
    dispatch(changeLoading(false));
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleSelectedCategory = (id: number) => {
    const selection = categories.findIndex((category) => category.id === id);
    setSelectedCategory(selection);
  };

  const handleSelectedDifficulty = (difficulty: number) => {
    setSelectedDifficulty(difficulty);
  };

  const convertCategory = (selected) => categories[selected].id;
  const convertDifficulty: (selected: number) => IDifficulty["name"] = (
    selected
  ) => difficulty[selected].name;

  const closeAlert = () => {
    dispatch(resetError());
  };

  const submitPrefs = async () => {
    dispatch(changeLoading(true));
    const convertedCategory = convertCategory(selectedCategory);
    const convertedDifficulty = convertDifficulty(selectedDifficulty);
    try {
      const quiz = await fetchContent(convertedCategory, convertedDifficulty);
      dispatch(addQuiz(quiz));
      navigate("/take-quiz");
    } catch (error) {
      dispatch(changeLoading(false));
      dispatch(updateError({ isOpen: true, message: error.message }));
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : categories.length > 0 ? (
        <>
          <Alert onClose={closeAlert} />
          <div className="flex flex-col gap-y-16 pt-48 text-yellow-950">
            <div className="flex justify-center text-4xl font-bold">
              Quiz Maker
            </div>
            <div className="flex justify-center gap-x-8">
              <div className="text-lg">
                <CompleteListbox
                  value={selectedCategory}
                  onChange={handleSelectedCategory}
                  selected={categories[selectedCategory].name
                    .replace(/&#039;/g, "\'")
                    .replace(/&quot;/g, '\"')
                    .replace(/&amp;/g, "\&")}
                  list={categories}
                />
              </div>
              <div className="text-lg">
                <CompleteListbox
                  value={selectedDifficulty}
                  onChange={handleSelectedDifficulty}
                  selected={difficulty[selectedDifficulty].name}
                  list={difficulty}
                />
              </div>
              <Button
                className="bg-yellow-950 text-white text-lg p-4 rounded-xl hover:bg-slate-900 active:p-3 active:mx-[9px] active:mt-1 active:text-base"
                onClick={submitPrefs}
              >
                Create
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>
          <Alert onClose={closeAlert} />
          <NotFound />
        </>
      )}
    </>
  );
};

export default QuizMaker;
