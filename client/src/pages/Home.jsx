import Blogs from "../components/Blogs";

const Home = () => {
  return (
    <div className="screen-height flex justify-center  m-custom">
      <div className="max-w-custom w-full mt-40 mb-20">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-white text-4xl sm:text-5xl">
            Welcome to Astro Bytes!
          </h2>
          <p className="text-text-100 text-lg">
            This is a simple app that allows you to create and share your own
            astronomy blog posts.
          </p>
        </div>

        <Blogs />
      </div>
    </div>
  );
};

export default Home;
