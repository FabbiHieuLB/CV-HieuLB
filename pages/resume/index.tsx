import { MainLayout } from "@/components/layouts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

export interface ResumeProps {}

export default function Resume(props: ResumeProps) {
  return (
    <div className="resume">
      <h2 className="resume-title text-4xl font-semibold text-[#eee] mb-10">
        Resume
      </h2>
      <div className="resume-main">
        <div className="experience">
          <div className="education">
            <div className="education-title mb-4">
              <h3 className="text-xl font-semibold text-[#eee]">Educaiton</h3>
            </div>
            <div className="education-item">
              <div className="year">
                <p className="text-sm text-[#aaa] font-semibold">2008</p>
                <span className="text-sm text-[#a5a6a7] font-light">
                  University of Studies
                </span>
              </div>
              <div className="job">
                <h4 className="text-base text-[#eee] font-semibold">
                  Frontend Development
                </h4>
                <p className="text-base text-[#d5d5d5]">
                  Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac
                  dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet
                  sem in, lobortis ante.
                </p>
              </div>
            </div>
            <div className="education-item">
              <div className="year">
                <p className="text-sm text-[#aaa] font-semibold">2008</p>
                <span className="text-sm text-[#a5a6a7] font-light">
                  University of Studies
                </span>
              </div>
              <div className="job">
                <h4 className="text-base text-[#eee] font-semibold">
                  Frontend Development
                </h4>
                <p className="text-base text-[#d5d5d5]">
                  Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac
                  dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet
                  sem in, lobortis ante.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="skill">
          <div className="skill-item">
            <div className="title">
              <h3 className="text-xl font-semibold text-[#eee] ">
                Design <span className="text-[#04b4e0]">Skills</span>
              </h3>
            </div>
            <div className="skill-job">
              <div className="job-name">
                <h4 className="text-sm font-semibold text-[#eee]">
                  Web Design
                </h4>
                <p className="text-xs text-[#aaa]">95%</p>
              </div>
              <div className="job-exp">
                <div className="skill-container inline-block relative bg-[#222] border-solid border-[#04b4e0] border-[1px] rounded-[8px] h-[10px] w-full">
                  <div className="skill-percentage w-[95%] bg-[#04b4e0] border-solid border-[#222] border-[2px] rounded-[8px] h-[8px]"></div>
                </div>
              </div>
            </div>
            <div className="skill-job">
              <div className="job-name">
                <h4 className="text-sm font-semibold text-[#eee]">
                  Print Design
                </h4>
                <p className="text-xs text-[#aaa]">65%</p>
              </div>
              <div className="job-exp">
                <div className="skill-container inline-block relative bg-[#222] border-solid border-[#04b4e0] border-[1px] rounded-[8px] h-[10px] w-full">
                  <div className="skill-percentage w-[65%] bg-[#04b4e0] border-solid border-[#222] border-[2px] rounded-[8px] h-[8px]"></div>
                </div>
              </div>
            </div>
            <div className="skill-job">
              <div className="job-name">
                <h4 className="text-sm font-semibold text-[#eee]">
                  Logo Design
                </h4>
                <p className="text-xs text-[#aaa]">80%</p>
              </div>
              <div className="job-exp">
                <div className="skill-container inline-block relative bg-[#222] border-solid border-[#04b4e0] border-[1px] rounded-[8px] h-[10px] w-full">
                  <div className="skill-percentage w-[80%] bg-[#04b4e0] border-solid border-[#222] border-[2px] rounded-[8px] h-[8px]"></div>
                </div>
              </div>
            </div>
            <div className="skill-job">
              <div className="job-name">
                <h4 className="text-sm font-semibold text-[#eee]">
                  Graphic Design
                </h4>
                <p className="text-xs text-[#aaa]">90%</p>
              </div>
              <div className="job-exp">
                <div className="skill-container inline-block relative bg-[#222] border-solid border-[#04b4e0] border-[1px] rounded-[8px] h-[10px] w-full">
                  <div className="skill-percentage w-[90%] bg-[#04b4e0] border-solid border-[#222] border-[2px] rounded-[8px] h-[8px]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="skill-item">
            <div className="title">
              <h3 className="text-xl font-semibold text-[#eee] ">
                Coding <span className="text-[#04b4e0]">Skills</span>
              </h3>
            </div>
            <div className="skill-job">
              <div className="job-name">
                <h4 className="text-sm font-semibold text-[#eee]">
                  JavaScript
                </h4>
                <p className="text-xs text-[#aaa]">95%</p>
              </div>
              <div className="job-exp">
                <div className="skill-container inline-block relative bg-[#222] border-solid border-[#04b4e0] border-[1px] rounded-[8px] h-[10px] w-full">
                  <div className="skill-percentage w-[95%] bg-[#04b4e0] border-solid border-[#222] border-[2px] rounded-[8px] h-[8px]"></div>
                </div>
              </div>
            </div>
            <div className="skill-job">
              <div className="job-name">
                <h4 className="text-sm font-semibold text-[#eee]">PHP</h4>
                <p className="text-xs text-[#aaa]">85%</p>
              </div>
              <div className="job-exp">
                <div className="skill-container inline-block relative bg-[#222] border-solid border-[#04b4e0] border-[1px] rounded-[8px] h-[10px] w-full">
                  <div className="skill-percentage w-[85%] bg-[#04b4e0] border-solid border-[#222] border-[2px] rounded-[8px] h-[8px]"></div>
                </div>
              </div>
            </div>
            <div className="skill-job">
              <div className="job-name">
                <h4 className="text-sm font-semibold text-[#eee]">HTML/CSS</h4>
                <p className="text-xs text-[#aaa]">100%</p>
              </div>
              <div className="job-exp">
                <div className="skill-container inline-block relative bg-[#222] border-solid border-[#04b4e0] border-[1px] rounded-[8px] h-[10px] w-full">
                  <div className="skill-percentage w-full bg-[#04b4e0] border-solid border-[#222] border-[2px] rounded-[8px] h-[8px]"></div>
                </div>
              </div>
            </div>
            <div className="skill-job">
              <div className="job-name">
                <h4 className="text-sm font-semibold text-[#eee]">
                  Smarty/Twig
                </h4>
                <p className="text-xs text-[#aaa]">75%</p>
              </div>
              <div className="job-exp">
                <div className="skill-container inline-block relative bg-[#222] border-solid border-[#04b4e0] border-[1px] rounded-[8px] h-[10px] w-full">
                  <div className="skill-percentage w-[75%] bg-[#04b4e0] border-solid border-[#222] border-[2px] rounded-[8px] h-[8px]"></div>
                </div>
              </div>
            </div>
            <div className="skill-job">
              <div className="job-name">
                <h4 className="text-sm font-semibold text-[#eee]">Perl</h4>
                <p className="text-xs text-[#aaa]">90%</p>
              </div>
              <div className="job-exp">
                <div className="skill-container inline-block relative bg-[#222] border-solid border-[#04b4e0] border-[1px] rounded-[8px] h-[10px] w-full">
                  <div className="skill-percentage w-[90%] bg-[#04b4e0] border-solid border-[#222] border-[2px] rounded-[8px] h-[8px]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="knowledges">
            <h3 className="text-xl font-semibold text-[#eee] ">Knowledges</h3>
            <ul>
              <li className="inline-block bg-[#04b4e0] rounded-[3px] text-[#fff] px-2 py-1 mr-2 my-1 text-sm">
                Marketing
              </li>
              <li className="inline-block bg-[#04b4e0] rounded-[3px] text-[#fff] px-2 py-1 mr-2 my-1 text-sm">
                Print
              </li>
              <li className="inline-block bg-[#04b4e0] rounded-[3px] text-[#fff] px-2 py-1 mr-2 my-1 text-sm">
                Digital Design
              </li>
              <li className="inline-block bg-[#04b4e0] rounded-[3px] text-[#fff] px-2 py-1 mr-2 my-1 text-sm">
                Social Media
              </li>
              <li className="inline-block bg-[#04b4e0] rounded-[3px] text-[#fff] px-2 py-1 mr-2 my-1 text-sm">
                Time Management
              </li>
              <li className="inline-block bg-[#04b4e0] rounded-[3px] text-[#fff] px-2 py-1 mr-2 my-1 text-sm">
                Communication
              </li>
              <li className="inline-block bg-[#04b4e0] rounded-[3px] text-[#fff] px-2 py-1 mr-2 my-1 text-sm">
                Problem-Solving
              </li>
              <li className="inline-block bg-[#04b4e0] rounded-[3px] text-[#fff] px-2 py-1 mr-2 my-1 text-sm">
                Social Networking
              </li>
              <li className="inline-block bg-[#04b4e0] rounded-[3px] text-[#fff] px-2 py-1 mr-2 my-1 text-sm">
                Flexibility
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

Resume.Layout = MainLayout;
