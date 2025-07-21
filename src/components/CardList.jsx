import Card from "./Card";

import ScrollStack, {ScrollStackItem} from "./effects/ScrollStack";
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
    <div className="flex flex-col h-screen  w-screen">
      <h1 className="font-jakarta text-2xl font-medium text-left mb-3">
        Website Projects.
      </h1>
      {/* <div className=" grid md:grid-cols-2 gap-6 items-center ">
        {List.map((item) => (
          <div key={item.id} className="flex justify-center items-center">
            <Card image={item.image} />
          </div>
        ))}
      </div> */}
      <div className="h-screen overflow-y-auto">
        <ScrollStack className="h-screen overflow-hidden">
          <ScrollStackItem className="bg-amber-50 text-black">
            <div className="bg-amber-50 text-black w-full">
              <h2>Card 1</h2>
              <p>This is the first card in the stack</p>
            </div>
          </ScrollStackItem>
          <ScrollStackItem>
            <div className="bg-amber-50 text-black">
              <h2>Card 2</h2>
              <p>This is the second card in the stack</p>
            </div>
          </ScrollStackItem>
          <ScrollStackItem>
            <div className="bg-red-50 text-black">
              <h2>Card 3</h2>
              <p>This is the third card in the stack</p>
            </div>
          </ScrollStackItem>
          <ScrollStackItem>
            <div className="bg-red-50 text-black">
              <h2>Card 3</h2>
              <p>This is the third card in the stack</p>
            </div>
          </ScrollStackItem>
        </ScrollStack>
      </div>
    </div>
  );
};
export default CardList;
