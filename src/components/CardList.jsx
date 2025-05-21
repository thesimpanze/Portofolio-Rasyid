import Card from "./Card";
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
    <div className="flex flex-col   w-[80%]">
      <h1 className="font-jakarta text-2xl font-medium text-left mb-3">Website Projects.</h1>
      <div className=" grid md:grid-cols-2 gap-6 items-center ">
        {List.map((item) => (
          <div key={item.id} className="flex justify-center items-center">
            <Card image={item.image} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default CardList;
