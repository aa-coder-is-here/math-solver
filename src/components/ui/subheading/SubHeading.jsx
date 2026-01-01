const SubHeading = (props) => {
  const { content , textColor } = props;
  return (
    <div className="flex flex-col items-start">
      <div className={`inline-flex px-7 py-2 bg-glass-50 text-md font-normal text-${textColor} rounded-full`}>
        {content}
      </div>
    </div>
  );
};

export default SubHeading;
