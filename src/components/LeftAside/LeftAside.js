import ServeBar from "../ServeBar/ServeBar.js";
import DailySignIn from "../DailySignIn/DailySignIn.js";
import AnimeVideo from "../AnimeVideo/AnimeVideo.js";
export default function LeftAside() {
  return (
    <div className="flex flex-col gap-2.5">
      <img src="/img/06.jpg" className="w-full h-37.5" alt="" />
      <ServeBar />
      <DailySignIn />
      <AnimeVideo />
    </div>
  );
}
