import Title from "../UI/Title/Title.js";
import OnSaleProductionTabs from "./OnSaleProductionTabs.js";
export default function OnSaleProduction() {
  const animeVideoTitle = "上市發行表";
  return (
    <div className="on-sale-production">
      <Title text={animeVideoTitle} />
      <div className="pb-1.25"></div>
      <OnSaleProductionTabs />
    </div>
  );
}
