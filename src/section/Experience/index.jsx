import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import picExp1 from "../../assets/pic1.jpg";
import picExp2 from "../../assets/pic2.jpg";
import { useState } from "react";
import FormattedDate from "../../components/FomattedDate";
import Picture from "../../components/Picture";
import TitleLink from "../../components/TItleLink";
import Material from "../../components/Material";
import Discription from "../../components/Discription";
import Tech from "../../components/Tech";

const Experience = () => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  return (
    <div>
      <div className="text-primaryAccent font-medium">Experience</div>
      <div
        className={`grid grid-cols-[25%_75%] py-3 transition-all
       ${isMouseEnter["exp1"] ? "bg-gray-200" : ""}`}
        onMouseEnter={() => setIsMouseEnter({ exp1: true })}
        onMouseLeave={() => setIsMouseEnter({ exp1: false })}
      >
        <div>
          <FormattedDate
            isMouseEnter={isMouseEnter["exp1"]}
            children={"2024-2025"}
          />
          <Picture picExp={picExp1} title="FullStacke" />
        </div>
        <div className="grid gap-y-4">
          <TitleLink
            isMouseEnter={isMouseEnter["exp1"]}
            title={"FullStack"}
            link={"https://github.com/sam1760/reactweb"}
          />
          <div className="flex gap-4 text-2xl h-10 items-center ">
            <Material href={"#"} icon={faGithub} />
            <Material href={"#"} icon={faYoutube} />
          </div>
          <Discription
            discription={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here"
            }
          />
          <div>
            <Tech
              isHighlight={isMouseEnter["exp1"]}
              data={["react", "Next", "Tailwind"]}
            />
          </div>
        </div>
      </div>

      <div
        className={`grid grid-cols-[25%_75%] py-3 transition-all
       ${isMouseEnter["exp2"] ? "bg-gray-200" : ""}`}
        onMouseEnter={() => setIsMouseEnter({ exp2: true })}
        onMouseLeave={() => setIsMouseEnter({ exp2: false })}
      >
        <div>
          <FormattedDate
            isMouseEnter={isMouseEnter["exp2"]}
            children={"2024-2025"}
          />
          <Picture picExp={picExp2} title="FullStack" />
        </div>
        <div className="grid gap-y-4">
          <TitleLink
            isMouseEnter={isMouseEnter["exp2"]}
            title={"FullS"}
            link={""}
          />
          <div className="flex gap-4 text-2xl h-10 items-center">
            <Material href={"#"} icon={faGithub} />
            <Material href={"#"} icon={faYoutube} />
          </div>
          <Discription
            discription={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here"
            }
          />
          <div className="flex gap-4 text-sm">
            <Tech
              data={["React", "Next", "TailWind"]}
              isHighlight={isMouseEnter["exp2"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
