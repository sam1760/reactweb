import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TitleLink = ({ isMouseEnter, title, link }) => {
  return (
    <div className={`${isMouseEnter ? "text-primaryAccent" : ""}`}>
      <a href={link != "" ? link:"#"}>{title}</a>
      {link ? (
        <FontAwesomeIcon
          icon={faArrowDown}
          className={`rotate-90 ml-2 ${isMouseEnter ? "-translate-x-1" : ""}`}
        />
      ) : (
        ""
      )}
    </div>
  );
};
export default TitleLink;
