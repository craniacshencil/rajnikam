interface blogCardInputs {
  title: string;
  date: Date;
  excerpt: string;
}

const Blogcard: React.FC<blogCardInputs> = ({ title, date, excerpt }) => {
  console.log("card created");
  return (
    <div className="border-b-2 pb-5 border-gray-800 cursor-pointer hover:transition hover:duration-300 hover:ease-in-out hover:translate-x-5">
      <h1 className="text-3xl">{title}</h1>
      <div className="pb-2 text-lg text-accent">{date.toString()}</div>
      <div className="text-gray-400">{excerpt}</div>
    </div>
  );
};

export default Blogcard;
