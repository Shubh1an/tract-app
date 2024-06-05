const CardComponent = ({
  headTitle,
  badge,
  children,
  className,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className={`p-3 px-6 sm:px-16  ${className} relative`}>
      <p className="border-b-[3px] border-green-700 text-2xl text-black w-fit font-bold">
        {headTitle}
      </p>
      {children}
      {buttonText && (
        <div className="flex justify-center w-full my-5 mt-10">
          <button
            onClick={onButtonClick}
            className="w-fit text-center text-white px-4 py-1.5 rounded-lg bg-green-600 font-semibold mx-auto focus:ring-green-300 focus:ring-2  text-lg"
          >
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
};

export default CardComponent;
