import { useNavigate } from "react-router-dom";
import { blogInfo } from "../routes/Blogs";

const Blogcard: React.FC<blogInfo> = ({ title, slug, date, excerpt }) => {
  const navigate = useNavigate();
  const displayBlog = () => {
    navigate("/blogs/" + slug);
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
