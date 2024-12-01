import Header from "./Header";
import "../blogs/blogs.css";
import { useEffect, useState } from "react";
interface blogInputs {
  blogName: string;
}

// now the import statement here is a dynamic import
// It returns a promise which needs to be handled in an async function
async function getBlogContent(blogName: string) {
  let file: any;
  try {
    file = await import(`../blogs/${blogName}.mdx`);
    return file.default;
  } catch (err) {
    return new Error("Couldn't import file");
  }
}

const Blog: React.FC<blogInputs> = ({ blogName }) => {
  const [blogContent, setblogContent] = useState("");
  useEffect(() => {
    getBlogContent(blogName).then((blogData) => setblogContent(blogData));
  }, []);

  return (
    <div className="dark w-screen text-white flex flex-col justify-center bg-background items-center">
      <div className="min-h-screen w-10/12 md:m-10 lg:m-0 xl:w-2/5 flex justify-center items-start flex-col gap-5">
        <Header activeTab="blog" />
        <div className="blog w-full text-justify">{blogContent}</div>
      </div>
    </div>
  );
};

export default Blog;
