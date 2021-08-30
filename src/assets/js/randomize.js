export const randomID = () => {
  return Math.random().toString(36).slice(-8);
};

const mockTitles = [
  "路呢歌裝蝶寸抓安雨枝玩遠媽兆，飽娘女民圓路工尾可大急己乍。皮像又主",
  "中校做跟歡，門消苦地少弓畫孝民院衣夕京跟田",
  "聽神掃實心高，西實風、嗎二雲兔跳要東良內嗎造二九刀河紅北念士消",
  "原相送久尼朋經他左完爸元化姊巾冰游京五？丟京是朋能",
];

export const randomTitle = () => {
  const i = (Math.random() * (mockTitles.length - 1)) | 0;
  return mockTitles[i];
};

export const randomImg = () => {
  const num = (Math.random() * 24 + 1) | 0;
  const filePath = `/img/${num > 9 ? num : "0" + num}.jpg`;
  return filePath;
};

const mockTags = ["PC", "PS4", "手機", "NS", "多平台"];

export const randomTag = () => {
  const i = (Math.random() * (mockTags.length - 1)) | 0;
  return mockTags[i];
};
