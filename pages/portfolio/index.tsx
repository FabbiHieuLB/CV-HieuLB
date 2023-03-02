import { MainLayout } from "@/components/layouts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

export interface PortfolioProps {}

export default function Portfolio(props: PortfolioProps) {
  return (
    <div className="portfolio">
      <div className="portfolio-title">
        <h2 className="text-4xl font-semibold text-[#eee] mb-10">Portfolio</h2>
      </div>
    </div>
  );
}

Portfolio.Layout = MainLayout;
