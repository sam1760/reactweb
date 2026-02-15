import { data } from "../../Contents/about";

const About = () => {
  return (
    <div className="md:my-0 my-10">
      <div className="text-primaryAccent font-medium ">{data.title}</div>
      <div>{data.description}</div>
    </div>
  );
};
export default About;
