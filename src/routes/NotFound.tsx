import Header from "../components/Header";
import Footer from "../components/Footer";
const NotFound: React.FC = () => {
  return (
    <div className="dark text-white flex flex-col justify-center bg-background items-center">
      <div className="min-h-screen w-10/12 md:w-3/5 md:m-10 lg:m-0 xl:w-2/5 flex justify-center items-start flex-col gap-5">
        <Header activeTab={null} />
        <div className="404content w-full flex flex-col justify-center mt-auto mb-auto">
          <div className="text-4xl pb-5 self-center">
            You have wandered... well nowhere
          </div>
          <div className="text-xl self-center pb-3">
            Here are some cool blogs that I found while making this
          </div>
          <div className="flex justify-center items-center gap-5 text-justify">
            <div className="flex flex-col justify-center gap-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-accent hover:text-secondary transition duration-300"
                href="https://mitchellh.com"
              >
                - Mitchell Hashimoto
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-accent hover:text-secondary transition duration-300"
                href="https://macwright.com/"
              >
                - Tom Macwright
              </a>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-accent hover:text-secondary transition duration-300"
                href="https://nadh.in/"
              >
                - Kailash Nadh
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-accent hover:text-secondary transition duration-300"
                href="https://overreacted.io/"
              >
                - Dan Abramov
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default NotFound;
