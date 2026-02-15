import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Material = ({href, icon }) => {
  return (
    <a href={href} target="_blank" className="hover:text-3xl transition-all">
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};
export default Material;
