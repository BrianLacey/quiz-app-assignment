import { ICategoryDoc, IQuizDoc } from "../models";

export const categoriesData: { trivia_categories: ICategoryDoc[] } = {
  trivia_categories: [
    { id: 9, name: "General Knowledge" },
    { id: 10, name: "Entertainment: Books" },
    { id: 11, name: "Entertainment: Film" },
    { id: 12, name: "Entertainment: Music" },
    { id: 13, name: "Entertainment: Musicals & Theatres" },
    { id: 14, name: "Entertainment: Television" },
    { id: 15, name: "Entertainment: Video Games" },
    { id: 16, name: "Entertainment: Board Games" },
    { id: 17, name: "Science & Nature" },
    { id: 18, name: "Science: Computers" },
    { id: 19, name: "Science: Mathematics" },
    { id: 20, name: "Mythology" },
    { id: 21, name: "Sports" },
    { id: 22, name: "Geography" },
    { id: 23, name: "History" },
    { id: 24, name: "Politics" },
    { id: 25, name: "Art" },
    { id: 26, name: "Celebrities" },
    { id: 27, name: "Animals" },
    { id: 28, name: "Vehicles" },
    { id: 29, name: "Entertainment: Comics" },
    { id: 30, name: "Science: Gadgets" },
    { id: 31, name: "Entertainment: Japanese Anime &amp; Manga" },
    { id: 32, name: "Entertainment: Cartoon & Animations" },
  ],
};

export const contentData: { response_code: number; results: IQuizDoc[] } = {
  response_code: 0,
  results: [
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Film",
      question:
        "What name did Tom Hanks give to his volleyball companion in the film `Cast Away`?",
      correct_answer: "Wilson",
      incorrect_answers: ["Friday", "Jones", "Billy"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Film",
      question:
        "The 2016 Disney animated film &#039;Moana&#039; is based on which culture?",
      correct_answer: "Polynesian",
      incorrect_answers: ["Native American", "Japanese", "Nordic"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Film",
      question:
        "This movie contains the quote, &quot;Houston, we have a problem.&quot;",
      correct_answer: "Apollo 13",
      incorrect_answers: ["The Right Stuff", "Capricorn One", "Marooned"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Film",
      question: "Which of these movies did Jeff Bridges not star in?",
      correct_answer: "The Hateful Eight",
      incorrect_answers: ["Tron: Legacy", "The Giver", "True Grit"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Film",
      question:
        "In &quot;Jurassic World&quot;, what is the name of the dinosaur that is a genetic hybrid?",
      correct_answer: "Indominus Rex",
      incorrect_answers: ["Mosasaurus", "Pteranodon", "Tyrannosaurus Rex "],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Japanese Anime &amp; Manga",
      question:
        "In the 2012 animated film &quot;Wolf Children&quot;, what are the names of the wolf children?",
      correct_answer: "Ame &amp; Yuki",
      incorrect_answers: [
        "Hana &amp; Yuki",
        "Ame &amp; Hana",
        "Chuck &amp; Anna",
      ],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Japanese Anime &amp; Manga",
      question: "Who is the colossal titan in &quot;Attack On Titan&quot;?",
      correct_answer: "Bertolt Hoover",
      incorrect_answers: ["Reiner", "Eren", "Sasha"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Japanese Anime &amp; Manga",
      question:
        "What color is Ry\u016bko Matoi&#039;s half of the Scissor Blade in the anime Kill la KIll?",
      correct_answer: "Red",
      incorrect_answers: ["Green", "Blue", "Purple"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Japanese Anime &amp; Manga",
      question: "Satella in &quot;Re:Zero&quot; is the witch of what?",
      correct_answer: "Envy",
      incorrect_answers: ["Pride", "Sloth", "Wrath"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Japanese Anime &amp; Manga",
      question: "In the anime Noragami who is one of the main protagonists?",
      correct_answer: "Yukine",
      incorrect_answers: ["Karuha", "Mineha", "Mayu"],
    },
  ],
};
