const Picture = ({picExp,title}) => {
  return (
    <div>
      <img
        src={picExp}
        alt={title}
        className="w-5/6 rounded-md border-2 border-primaryContent"
      />
    </div>
  );
};
export default Picture;
