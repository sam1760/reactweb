const Tech = ({ isHighlight, data }) => {
  return (
    <div className="flex gap-4 text-sm">
      {data.map((tech, index) => (
        <div
          key={`${tech}-tech-${index}`}
          className={`bg-primarySubcontent px-4 hover:bg-green-400 cursor-pointer rounded-md ${isHighlight ? "text-primaryAccent" : ""}`}
        >
          {tech}
        </div>
      ))}
    </div>
  );
};
export default Tech;
