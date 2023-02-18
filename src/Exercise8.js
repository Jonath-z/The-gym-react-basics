import React from "react";

const data = [
  {
    id: 1,
    setup: "What's the best thing about a Boolean?",
    punchline: "Even if you're wrong, you're only off by a bit",
  },
  {
    id: 2,
    setup: "Why do programmers wear glasses?",
    punchline: "Because they need to C#",
  },
];

const JokeCard = (props) => (
  <div className="flex flex-col justify-center items-center gap-2 rounded-md py-8 px-5 bg-white w-full">
    <p className="font-bold text-xl text-center">{props.setup}</p>
    <p className="text-center">{props.punchline}</p>
  </div>
);

const Exercise8 = () => {
  return (
    <div className="absolute inset-0 w-full h-full bg-green-200">
      <div className="mt-28 xl:w-1/2 mx-auto flex xl:flex-row gap-5 flex-col w-full px-10">
        {data.map((joke) => {
          return <JokeCard setup={joke.setup} punchline={joke.punchline} />;
        })}
      </div>
    </div>
  );
};

export default Exercise8;
