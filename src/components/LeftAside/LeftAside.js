import ServeBar from "../ServeBar/ServeBar.js";
import DailySignIn from "../DailySignIn/DailySignIn.js";
import AnimeVideo from "../AnimeVideo/AnimeVideo.js";
import AnimeList from "../AnimeList/AnimeList.js";
import OnSaleProduction from "../OnSaleProduction/OnSaleProduction.js";
import ChosenProducts from "../ChosenProducts/ChosenProducts.js";
import CaseStudy from "../CaseStudy/CaseStudy.js";
import LeftAsideFooter from "./LeftAsideFooter.js";
export default function LeftAside() {
  return (
    <div className="flex flex-col gap-2.5">
      <img
        src="/bahamut-clone-practice/img/06.jpg"
        className="w-full h-37.5"
        alt=""
      />
      <ServeBar />
      <DailySignIn />
      <AnimeVideo />
      <AnimeList />
      <OnSaleProduction />
      <ChosenProducts />
      <CaseStudy />
      <LeftAsideFooter />
    </div>
  );
}
