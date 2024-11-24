import Header from "../components/Header";
const Blog: React.FC = () => {
  return (
    <div className="dark flex flex-col justify-center bg-background items-center">
      <div className="min-h-screen w-10/12 md:m-10 lg:m-0 lg:w-2/5 flex justify-center items-start flex-col gap-5">
        <Header activeTab="blog" />
        Hello
      </div>
    </div>
  );
};

export default Blog;
