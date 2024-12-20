import { useNavigate } from "react-router-dom";
import { blogInfo } from "../routes/Blogs";

const Blogcard: React.FC<blogInfo> = ({ title, slug, date, excerpt, tags }) => {
  const navigate = useNavigate();
  const displayBlog = () => {
    navigate("/blogs/" + slug);
  };
  return (
    <div
      onClick={displayBlog}
      className="flex flex-col flex-wrap gap-1 mt-5 pb-5 border-b-2 border-gray-400 dark:border-gray-800 cursor-pointer hover:transition hover:duration-300 hover:ease-in-out hover:translate-x-5"
    >
      <h1 className="shrink text-text text-3xl">{title}</h1>
      <div className="text-lg text-accent">{date.toString()}</div>
      <div className="md:mt-1 md:text-gray-600 md:dark:text-gray-400">
        {excerpt}
      </div>
      <div className="hidden md:flex md:gap-2 md:shrink tags md:mt-3">
        {tags.map((tag) => (
          <span
            key={slug + tag}
            className="md:p-1 md:px-2 md:text-text md:opacity-70 md:rounded md:font-mono md:bg-secondary md:text-sm"
          >
            {"#" + tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Blogcard;
