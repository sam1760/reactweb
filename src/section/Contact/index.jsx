import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGit,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="flex items-end gap-4 text-lg">
      <FontAwesomeIcon
        className="hover:scale-125 hover:text-primaryTitle transition-all"
        icon={faInstagram}
      />
      <FontAwesomeIcon
        className="hover:scale-125 hover:text-primaryTitle transition-all"
        icon={faGit}
      />
      <FontAwesomeIcon
        className="hover:scale-125 hover:text-primaryTitle transition-all"
        icon={faSquareYoutube}
      />
    </div>
  );
};
export default Contact;
