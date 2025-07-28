import Card from "./Card";

import ScrollStack, { ScrollStackItem } from "./effects/ScrollStack";
const List = [
  {
    id: 1,
    image: "../assets/seenau.png",
  },
  {
    id: 2,
    image: "../assets/Kiyatama.png",
  },
  {
    id: 3,
    image: "../assets/Dirava.png",
  },
];
const CardList = () => {
  return (
    <div className="flex flex-col  w-full ">
      <h1 className="font-jakarta text-2xl font-medium text-left mb-3">
        Website Projects.
      </h1>

      <ScrollStack className="h-screen overflow-hidden">
        {List.map((item) => (
          <ScrollStackItem
            className={` text-black shadow-[0_0_30px_rgba(0,0,0,0.1)] bg-amber-50 rounded-lg`}
            key={item.id}
          >
            <div className={`text-black w-full h-full`}>
              <h2>Card {item.id}</h2>
              <p>This is the {item.id} card in the stack</p>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  );
};
export default CardList;
