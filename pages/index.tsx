import { MainLayout } from "@/components/layouts";
import { NextPageWithLayout } from "@/models/common";


const Home: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-6xl font-semibold">Alex Smith</h2>
      <h4 className="text-xl text-[#aaa]">Frontend - Developer</h4>
    </div>
  );
};
Home.Layout = MainLayout;

export default Home;
