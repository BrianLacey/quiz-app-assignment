// import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col gap-y-16 pt-48 text-4xl text-yellow-950">
      <div className="flex justify-center">Welcome to Your Quiz Maker!</div>
      <div className="flex flex-col gap-y-4">
        <div className="flex justify-center">Brought to life by</div>
        <div className="flex justify-center">Brian Lacey</div>
      </div>
      <div className="flex justify-center">
        {/* <Link
          className="bg-yellow-950 text-white p-4 rounded-xl hover:bg-slate-900 active:p-3 active:mt-1 active:text-[32px]"
          href="/QuizMaker"
        >
          Begin
        </Link> */}
      </div>
    </div>
  );
};

export default Home;
