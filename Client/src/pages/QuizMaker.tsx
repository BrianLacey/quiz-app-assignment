import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router";
import { addCategories } from "../slices/categoriesSlice";
import { changeLoading } from "../slices/loadingSlice";
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
import { difficulty } from "../constants";

const QuizMaker = () => {
  const dispatch = useDispatch();
  const categories: ICategory[] = useSelector(
    (state: IState) => state.categories
  );
  const loading: ILoading = useSelector((state: IState) => state.loading);
  const [selectedCategory, setSelectedCategory] =
    useState<ISelectedCategory>(0);
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<ISelectedDifficulty>(0);

  const getCategories = async () => {
    const categories: ICategory[] = await fetchCategories();
    dispatch(addCategories(categories));
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

  const submitPrefs = async () => {
    const convertedCategory = convertCategory(selectedCategory);
    const convertedDifficulty = convertDifficulty(selectedDifficulty);
    await fetchContent(convertedCategory, convertedDifficulty);
    dispatch(changeLoading(true));
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-y-16 pt-48 text-4xl text-yellow-950">
          <div className="flex justify-center">Hello Quiz Maker!</div>
          <div className="flex justify-center gap-x-8">
            <div className="text-lg">
              <CompleteListbox
                value={selectedCategory}
                onChange={handleSelectedCategory}
                selected={categories[selectedCategory].name}
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
            <div className="pt-0.5">
              <Link
                className="bg-yellow-950 text-white text-lg p-4.5 rounded-xl hover:bg-slate-900 active:p-3 active:mx-[9px] active:mt-1 active:text-base"
                to="/take-quiz"
                onClick={submitPrefs}
              >
                Create
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuizMaker;
