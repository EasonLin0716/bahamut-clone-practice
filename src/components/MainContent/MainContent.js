import MainNews from "../MainNews/MainNews";
import GameCrazy from "../GameCrazy/GameCrazy";
import StreamLobby from "../StreamLobby/StreamLobby";
import AndroidGameRanking from "../AndroidGameRanking/AndroidGameRanking";
import GuildLobby from "../GuildLobby/GuildLobby";
import CreateLobby from "../CreateLobby/CreateLobby";
import MainForum from "../MainForum/MainForum";
import MainTopic from "../MainTopic/MainTopic";
import BottomRandomPost from "../BottomRandomPost/BottomRandomPost";
export default function MainContent() {
  return (
    <div className="flex flex-col gap-2.5">
      <MainNews></MainNews>
      <GameCrazy></GameCrazy>
      <AndroidGameRanking></AndroidGameRanking>
      <CreateLobby></CreateLobby>
      <StreamLobby></StreamLobby>
      <GuildLobby></GuildLobby>
      <MainForum></MainForum>
      <MainTopic></MainTopic>
      <BottomRandomPost></BottomRandomPost>
    </div>
  );
}
