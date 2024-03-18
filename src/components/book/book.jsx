

const book = ({book}) => {
  const {title}=book;
  return (
    <div className="px-2">
      <h1 className="text-2xl p-4 bg-white mb-2 rounded-xl">{title}</h1>
    </div>
  );
};

export default book;