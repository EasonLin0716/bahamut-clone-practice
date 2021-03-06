export const randomID = () => {
  return Math.random().toString(36).slice(-8);
};

const FAKEIMG_URL = "https://fakeimg.pl/";

const mockTitles = [
  "路呢歌裝蝶寸抓安雨枝玩遠媽兆，飽娘女民圓路工尾可大急己乍。皮像又主",
  "中校做跟歡，門消苦地少弓畫孝民院衣夕京跟田",
  "聽神掃實心高，西實風、嗎二雲兔跳要東良內嗎造二九刀河紅北念士消",
  "原相送久尼朋經他左完爸元化姊巾冰游京五？丟京是朋能",
  "標演得反仍……無共打油沒連不正，笑學參什底同什不？",
  "？他節術難更意法人來離見作接麼持做下？修孩樂馬者成個道充農來酒市",
  "標件只第師現是請老關她病……時特路一裡有除子票的不頭其，人得臺反家",
  "是上……放各會說一類數回位政著而！職際中步國和度，始絕備弟時商球",
  "只頭生品有走顧全，民技傳預在然親定改土她今在是分，多治至處都給王",
  "當首紀記人滿究無性行要結！有天重記沒確當",
  "而調文；天媽現的代，健加的再德工現的代，健加的再德工",
  "工效教造夜讀灣才民子一方造……的示在，維下到車府錢。的我性",
  "可今出業放，落作了故！後往生不是小！指無響這是力那是人麼們，全都女",
  "則玩了一之其世在長往間曾院雲軍評字隊奇子說馬毒樣數美正門",
  "今時而度。人品極的部者是……何曾得當好臺費實",
  "工世決物部自一上要體你大上型運中先進連即間真配用。特亞三銷不",
  "太白水險會是山友友把天向流禮校為力火答室他熱老最比主世世達庭",
  "向很難是天兩過到我表：們我金近克，深性條成聽破福友日速化原是子",
];

const mockCategories = ["心得", "閒聊", "情報", "討論", "認真", "抱怨"];

const mockTopics = ["插畫達人", "插畫", "小說", "日誌"];

const randomColor = () => {
  const letters = "0123456789ABCDEF";
  let res = "";
  for (var i = 0; i < 6; i++) {
    res += letters[Math.floor(Math.random() * 16)];
  }
  return res;
};

export const randomCategory = () => {
  const i = (Math.random() * (mockCategories.length - 1)) | 0;
  return mockCategories[i];
};

export const randomTitle = (maxLength = Infinity) => {
  const i = (Math.random() * (mockTitles.length - 1)) | 0;
  return mockTitles[i].slice(0, maxLength);
};

export const randomTopic = (maxLength = Infinity) => {
  const i = (Math.random() * (mockTopics.length - 1)) | 0;
  return mockTopics[i].slice(0, maxLength);
};

export const randomName = (min = 3, max = 8) => {
  const i = (Math.random() * (mockTitles.length - 1)) | 0;
  return mockTitles[i].slice(min, max);
};

export const randomImg = () => {
  const num = (Math.random() * 24 + 1) | 0;
  const filePath = `/bahamut-clone-practice/img/${
    num > 9 ? num : "0" + num
  }.jpg`;
  return filePath;
};

const mockTags = ["PC", "PS4", "手機", "NS", "多平台", "其他"];

export const randomTag = () => {
  const i = (Math.random() * (mockTags.length - 1)) | 0;
  return mockTags[i];
};

export const randomBoolean = () => !!Math.round(Math.random());

export const randomNumber = (min = 0, max = 1000000) =>
  (Math.random() * (max - min + 1) + min) | 0;

export const randomPercentage = (min = 0, max = 99) =>
  (Math.random() * (max - min + 1) + min).toFixed(2) + "%";

export const randomFakeImgPl = () => {
  const randomWidth = randomNumber(400, 500);
  const randomHeight = randomNumber(300, 600);
  return `${FAKEIMG_URL}${randomWidth}x${randomHeight}/${randomColor()}`;
};
