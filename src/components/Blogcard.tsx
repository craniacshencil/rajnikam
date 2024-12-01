import { useNavigate } from "react-router-dom";
interface blogCardInputs {
  title: string;
  date: Date;
  excerpt: string;
  slug: string;
}

const Blogcard: React.FC<blogCardInputs> = ({ title, date, excerpt, slug }) => {
  const navigate = useNavigate();
  const displayBlog = () => {
    navigate("/rajnikam/blogs/" + slug);
  };
  return (
    <div
      onClick={displayBlog}
      className="border-b-2 pb-5 border-gray-800 cursor-pointer hover:transition hover:duration-300 hover:ease-in-out hover:translate-x-5"
    >
      <h1 className="text-3xl">{title}</h1>
      <div className="pb-2 text-lg text-accent">{date.toString()}</div>
      <div className="text-gray-400">{excerpt}</div>
    </div>
  );
};

export default Blogcard;
