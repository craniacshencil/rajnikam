import Header from "../components/Header";
import React from "react";
import DockerNoob from "../blogs/docker_noob.mdx";
const modules = import.meta.glob("../blogs/*.mdx");

interface blogInfo {
  title: string;
  slug: string;
  date: Date;
  excerpt: string;
}

async function getBlogFrontmatter() {
  const blogList: blogInfo[] = [];
  // Check out import.meta.glob docs on vite
  // Check out frontmatter guide on mdx
  Object.keys(modules).forEach((fileName) => {
    modules[fileName]().then((file: any) => {
      const blog: blogInfo = {
        title: file.title,
        slug: file.title,
        date: file.date,
        excerpt: file.excerpt,
      };
      blogList.push(blog);
    });
  });
  return blogList;
}

const Blog: React.FC = () => {
  // Getting frontmatter from blogs to display all the blogs
  let blogList: blogInfo[];
  try {
    getBlogFrontmatter().then((data) => {
      blogList = data;
      console.log(blogList);
    });
  } catch (err) {
    console.log(err);
  }

  return (
    <div className="dark text-white flex flex-col justify-center bg-background items-center">
      <div className="min-h-screen w-10/12 md:m-10 lg:m-0 xl:w-2/5 flex justify-center items-start flex-col gap-5">
        <Header activeTab="blog" />
        <DockerNoob />
      </div>
    </div>
  );
};

export default Blog;
