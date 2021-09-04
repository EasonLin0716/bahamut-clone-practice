import MainNews from "../MainNews/MainNews";
import GameCrazy from "../GameCrazy/GameCrazy";
import StreamLobby from "../StreamLobby/StreamLobby";
import AndroidGameRanking from "../AndroidGameRanking/AndroidGameRanking";
import GuildLobby from "../GuildLobby/GuildLobby";
import CreateLobby from "../CreateLobby/CreateLobby";
export default function MainContent() {
  return (
    <div className="flex flex-col gap-2.5">
      <MainNews></MainNews>
      <GameCrazy></GameCrazy>
      <AndroidGameRanking></AndroidGameRanking>
      <CreateLobby></CreateLobby>
      <StreamLobby></StreamLobby>
      <GuildLobby></GuildLobby>
    </div>
  );
}
