import SideBar from "@/components/SideBar";
import BreedsContent from "@/components/content/BreedsContent";
import SearchRow from "@/components/search/SearchRow";

const Breeds = () => {
  return (
    <div className="flex justify-between tablet:justify-center" remove-scrollbar="y">
      <div className="tablet:hidden">
        <SideBar />
      </div>
      <div className="flex justify-end pt-[30px] pb-[30px] mr-[30px] min-h-screen tablet:mr-0">
        <div className="flex flex-col space-y-[10px] min-w-[680px]">
          <SearchRow />
          <BreedsContent />
        </div>
      </div>
    </div>
  );
};

export default Breeds;
