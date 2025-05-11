import Magnet from "./Magnet";

const Skill = [
  {
    id: 1,
    name: "HTML",
    icon: "src/assets/html.svg",
  },
  {
    id: 2,
    name: "CSS",
    icon: "src/assets/css.svg",
  },
  {
    id: 3,
    name: "Javascript",
    icon: "src/assets/js.svg",
  },
  {
    id: 4,
    name: "tailiwind",
    icon: "src/assets/tailwind.svg",
  },
  {
    id: 5,
    name: "React",
    icon: "src/assets/react.svg",
  },
  {
    id: 6,
    name: "Laravel",
    icon: "src/assets/laravel.svg",
  },
  {
    id: 7,
    name: "Figma",
    icon: "src/assets/figma.svg",
  },
  {
    id: 8,
    name: "Motion",
    icon: "src/assets/FramerMotion.svg",
  },
];
const SkillSet = () => {
  return (
    <div className="flex flex-wrap  gap-5 ">
      {Skill.map((skill) => (
        <Magnet  disabled={false} magnetStrength={50}>
          <div className="text-white" key={skill.id}>
            <img src={skill.icon} alt="" width={70} className="grayscale hover:grayscale-0" />
          </div>
        </Magnet>
      ))}
    </div>
  );
};
export default SkillSet;
