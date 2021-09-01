import MainNews from "../MainNews/MainNews";
import GameCrazy from "../GameCrazy/GameCrazy";
import StreamLobby from "../StreamLobby/StreamLobby";
import AndroidGameRanking from "../AndroidGameRanking/AndroidGameRanking";
export default function MainContent() {
  return (
    <div className="flex flex-col gap-2.5">
      <MainNews></MainNews>
      <GameCrazy></GameCrazy>
      <StreamLobby></StreamLobby>
      <AndroidGameRanking></AndroidGameRanking>
    </div>
  );
}
