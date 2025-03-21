import MainBanner from "./ui/components/MainBanner";
import SearchForm from "./ui/components/SearchForm";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="p-6 pt-35">
        <MainBanner />
        <SearchForm />


      </div>

      <div className="flex flex-col md:flex-row gap-4 bg-white m-0 p-12 pt-30 pb-30 items-center">
        <div className="w-full md:max-w-md md:mx-auto">
          <h6 className="text-xl font-bold text-center italic">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&quot;</h6>
          <h6 className="text-lg text-center mt-4 uppercase">&quot;John Doe&quot;</h6>
        </div>

        {/* <div className="w-full md:w-1/2">
          <h6 className="text-xl font-bold text-center italic">" amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</h6>
          <h6 className="text-lg text-center mt-4 uppercase">John Doe</h6>
        </div> */}
      </div>
    </div>
  );
}
