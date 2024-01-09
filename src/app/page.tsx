import SideBar from "@/components/SideBar";

const Home = () => {
  return (
    <div className="flex justify-between tablet:justify-center">
      <SideBar />
      <div className="flex justify-end tablet:hidden">
        <div className="fixed w-[680px] h-[840px] rounded-[20px] bg-pink-100 dark:bg-white dark:opacity-5 m-[30px]" />
        <img
          src="/girl-and-pet-1.png"
          className="fixed w-[900px] h-[900px] mx-[-110px]"
        />
      </div>
    </div>
  );
};

export default Home;
