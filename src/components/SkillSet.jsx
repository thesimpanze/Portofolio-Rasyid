// Import Magnet component
import Magnet from "./Magnet";

// Import semua SVG secara langsung
import HtmlSvg from "../assets/html.svg";
import CssSvg from "../assets/css.svg";
import JsSvg from "../assets/js.svg";
import TailwindSvg from "../assets/tailwind.svg";
import ReactSvg from "../assets/react.svg";
import LaravelSvg from "../assets/laravel.svg";
import FigmaSvg from "../assets/figma.svg";
import FramerMotionSvg from "../assets/FramerMotion.svg";
import reactRouter from '../assets/react-router.svg';

// Array data skill yang menggunakan import langsung
const Skill = [
  {
    id: 1,
    name: "HTML",
    icon: HtmlSvg,
  },
  {
    id: 2,
    name: "CSS",
    icon: CssSvg,
  },
  {
    id: 3,
    name: "Javascript",
    icon: JsSvg,
  },
  {
    id: 4,
    name: "Tailwind",
    icon: TailwindSvg,
  },
  {
    id: 5,
    name: "React",
    icon: ReactSvg,
  },
  {
    id: 6,
    name: "Laravel",
    icon: LaravelSvg,
  },
  {
    id: 7,
    name: "Figma",
    icon: FigmaSvg,
  },
  {
    id: 8,
    name: "Motion",
    icon: FramerMotionSvg,
  },
  {
    id: 9,
    name: "React Router",
    icon: reactRouter,
  },
];

const SkillSet = () => {
  return (
    <div className="flex flex-wrap gap-5">
      {Skill.map((skill) => (
        <Magnet key={skill.id} disabled={false} magnetStrength={10}>
          <div className="text-white ">
            <img src={skill.icon} alt={skill.name} width={70} className="grayscale hover:grayscale-0" />
          </div>
        </Magnet>
      ))}
    </div>
  );
};

export default SkillSet;