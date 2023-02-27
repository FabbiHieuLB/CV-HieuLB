import { MainLayout } from "@/components/layouts";

export interface AboutMeProps {}

export default function AboutMe(props: AboutMeProps) {
  return (
    <div className="about-me">
      <div className="about-title">
        <h2>About <span>Me</span></h2>
      </div>
    </div>
  );
}

AboutMe.Layout = MainLayout;
