const FormattedDate = ({ isMouseEnter, children }) => {
  return (
    <div>
      <span
        className={`text-sm  ${isMouseEnter ? "text-primaryAccent" : "text-primarySubcontent"}`}
      >
        {children}
      </span>
    </div>
  );
};
export default FormattedDate;
