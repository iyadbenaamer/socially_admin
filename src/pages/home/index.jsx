import { useSelector } from "react-redux";

import { Content } from "./content";

const Home = () => {
  const username = useSelector((state) => state.admin.username);

  return (
    <div className="content col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 xl:col-span-6">
      <h1 className="text-2xl p-4 sticky top-[45px] bg-100 z-30 lg:w-4/5 center">
        Admin Panel - {username}
      </h1>
      <Content />
    </div>
  );
};
export default Home;
