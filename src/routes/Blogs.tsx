import Header from "../components/Header";
import Blogcard from "../components/Blogcard";
import { useEffect, useState } from "react";
const modules = import.meta.glob("src/blogs/*.mdx");

export interface blogInfo {
  title: string;
  slug: string;
  date: Date;
  excerpt: string;
}

async function getBlogFrontmatter() {
  // Check out import.meta.glob docs on vite
  // Check out frontmatter guide on mdx
  const blogList: blogInfo[] = await Promise.all(
    Object.keys(modules).map(async (fileName) => {
      const file: any = await modules[fileName]();
      return {
        title: file.title,
        slug: file.slug,
        date: file.date,
        excerpt: file.excerpt,
      };
    }),
  );
  return blogList;
}

const Blogs: React.FC = () => {
  const [blogs, setblogs] = useState<blogInfo[]>([]);
  useEffect(() => {
    getBlogFrontmatter().then((blogList) => setblogs(blogList));
  }, []);

  return (
    <div className="dark text-white flex flex-col justify-center bg-background items-center">
      <div className="min-h-screen w-10/12 md:w-3/5 md:m-10 lg:m-0 xl:w-2/5 flex justify-center items-start flex-col gap-5">
        <Header activeTab="blog" />
        <div className="flex flex-col gap-10 mt-5">
          {blogs.map((blog: blogInfo) => (
            <Blogcard
              key={blog.slug}
              title={blog.title}
              date={blog.date}
              excerpt={blog.excerpt}
              slug={blog.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
