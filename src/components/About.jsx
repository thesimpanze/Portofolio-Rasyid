
import ScrollFloat from "./ScrollFloat";
import ScrollReveal from "./ScrollRevealText";

const About = () => {
  return (
    <div className="px-4 py-8">
      <ScrollFloat animationDuration={1} ease="back.inOut(2)" scrollStart="center bottom+=50%" scrollEnd="bottom bottom-=40%" stagger={0.03} textClassName="font-jakarta text-3xl text-white ">
        About me.
      </ScrollFloat>
      <ScrollReveal textClassName="md:text-xl text-sm mb-2 text-gray-400" baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}>
        I’m an Informatics Engineering student at Politeknik Elektronika Negeri Surabaya (PENS) and a junior frontend developer passionate about building user-friendly web applications. I work with technologies like React.js, Laravel,
        Tailwind CSS, HTML, CSS, and JavaScript. I enjoy turning UI/UX designs into clean, responsive interfaces and continuously learning new tools to improve both functionality and user experience in every project I build.
      </ScrollReveal>
      <div className="border-b-2 border-gray-400 pt-3 mb-3" />

      <ScrollFloat animationDuration={1} ease="back.inOut(2)" scrollStart="center bottom+=30%" scrollEnd="bottom bottom-=30%" stagger={0.03} textClassName="font-jakarta text-3xl text-white ">
        Education.
      </ScrollFloat>
      <ScrollReveal textClassName="md:text-xl text-sm text-gray-400" baseOpacity={0} enableBlur={true} baseRotation={10} blurStrength={10}>
        2023 - present: collage student of Informatic Engineering at Electronic Engineering Polytechnic Institute of Surabaya
      </ScrollReveal>

    </div>
  );
};
export default About;
