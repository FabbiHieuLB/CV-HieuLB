import { MainLayout } from "@/components/layouts";

export interface ResumeProps {}

export default function Resume(props: ResumeProps) {
  return (
    <div className="resume">
      <h2 className="text-4xl font-semibold text-[#eee] mb-10">Resume</h2>
      <div className="flex flex-row gap-8">
        <div className="w-[60%]">
          <div className="education">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-[#eee]">Educaiton</h3>
            </div>
            <div className="relative flex flex-row pb-7">
              <div className="w-[25%]">
                <p className="text-sm text-[#aaa] font-semibold">2008</p>
                <span className="text-sm text-[#a5a6a7] font-light">
                  University of Studies
                </span>
              </div>
              <div className="absolute top-0 left-[21%] bottom-0 w-[1px] bg-[#444] before:mt-[4px] before:w-[17px] before:h-[17px] before:absolute before:ml-[-8px] before:rounded-[10px] before:bg-[#04b4e0] before:opacity-25 after:absolute after:mt-2 after:w-[9px] after:h-[9px] after:ml-[-4px] after:bg-[#222] after:rounded-[5px] after:border-solid after:border-[#04b4e0] after:border-[2px]"></div>
              <div className="w-[75%]">
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
            <div className="relative flex flex-row">
              <div className="w-[25%]">
                <p className="text-sm text-[#aaa] font-semibold">2008</p>
                <span className="text-sm text-[#a5a6a7] font-light">
                  University of Studies
                </span>
              </div>
              <div className="absolute top-0 left-[21%] bottom-0 w-[1px] bg-[#444] before:mt-[4px] before:w-[17px] before:h-[17px] before:absolute before:ml-[-8px] before:rounded-[10px] before:bg-[#04b4e0] before:opacity-25 after:absolute after:mt-2 after:w-[9px] after:h-[9px] after:ml-[-4px] after:bg-[#222] after:rounded-[5px] after:border-solid after:border-[#04b4e0] after:border-[2px]"></div>
              <div className="w-[75%]">
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

        <div className="w-[40%]">
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[#eee] mb-5">
              Design <span className="text-[#04b4e0]">Skills</span>
            </h3>
            <div className="mb-3">
              <div className="flex justify-between">
                <h4 className="text-sm font-semibold text-[#eee]">
                  Web Design
                </h4>
                <p className="text-xs text-[#aaa]">95%</p>
              </div>
              <div className="job-exp">
                <div className="inline-block relative bg-[#222] border-solid border-[#04b4e0] border-[1px] rounded-[8px] h-[10px] w-full">
                  <div className="w-[95%] bg-[#04b4e0] border-solid border-[#222] border-[2px] rounded-[8px] h-[8px]"></div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="flex justify-between">
                <h4 className="text-sm font-semibold text-[#eee]">
                  Print Design
                </h4>
                <p className="text-xs text-[#aaa]">65%</p>
              </div>
              <div className="job-exp">
                <div className="inline-block relative bg-[#222] border-solid border-[#04b4e0] border-[1px] rounded-[8px] h-[10px] w-full">
                  <div className="w-[65%] bg-[#04b4e0] border-solid border-[#222] border-[2px] rounded-[8px] h-[8px]"></div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="flex justify-between">
                <h4 className="text-sm font-semibold text-[#eee]">
                  Logo Design
                </h4>
                <p className="text-xs text-[#aaa]">80%</p>
              </div>
              <div className="job-exp">
                <div className="inline-block relative bg-[#222] border-solid border-[#04b4e0] border-[1px] rounded-[8px] h-[10px] w-full">
                  <div className="w-[80%] bg-[#04b4e0] border-solid border-[#222] border-[2px] rounded-[8px] h-[8px]"></div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="flex justify-between">
                <h4 className="text-sm font-semibold text-[#eee]">
                  Graphic Design
                </h4>
                <p className="text-xs text-[#aaa]">90%</p>
              </div>
              <div className="job-exp">
                <div className="inline-block relative bg-[#222] border-solid border-[#04b4e0] border-[1px] rounded-[8px] h-[10px] w-full">
                  <div className="w-[90%] bg-[#04b4e0] border-solid border-[#222] border-[2px] rounded-[8px] h-[8px]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="skill-item">
            <h3 className="text-2xl font-semibold text-[#eee] mb-5 ">
              Coding <span className="text-[#04b4e0]">Skills</span>
            </h3>
            <div className="mb-3">
              <div className="flex justify-between">
                <h4 className="text-sm font-semibold text-[#eee]">
                  JavaScript
                </h4>
                <p className="text-xs text-[#aaa]">95%</p>
              </div>
              <div className="job-exp">
                <div className="inline-block relative bg-[#222] border-solid border-[#04b4e0] border-[1px] rounded-[8px] h-[10px] w-full">
                  <div className="w-[95%] bg-[#04b4e0] border-solid border-[#222] border-[2px] rounded-[8px] h-[8px]"></div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="flex justify-between">
                <h4 className="text-sm font-semibold text-[#eee]">PHP</h4>
                <p className="text-xs text-[#aaa]">85%</p>
              </div>
              <div className="job-exp">
                <div className="inline-block relative bg-[#222] border-solid border-[#04b4e0] border-[1px] rounded-[8px] h-[10px] w-full">
                  <div className="w-[85%] bg-[#04b4e0] border-solid border-[#222] border-[2px] rounded-[8px] h-[8px]"></div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="flex justify-between">
                <h4 className="text-sm font-semibold text-[#eee]">HTML/CSS</h4>
                <p className="text-xs text-[#aaa]">100%</p>
              </div>
              <div className="job-exp">
                <div className="inline-block relative bg-[#222] border-solid border-[#04b4e0] border-[1px] rounded-[8px] h-[10px] w-full">
                  <div className="w-full bg-[#04b4e0] border-solid border-[#222] border-[2px] rounded-[8px] h-[8px]"></div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="flex justify-between">
                <h4 className="text-sm font-semibold text-[#eee]">
                  Smarty/Twig
                </h4>
                <p className="text-xs text-[#aaa]">75%</p>
              </div>
              <div className="job-exp">
                <div className="inline-block relative bg-[#222] border-solid border-[#04b4e0] border-[1px] rounded-[8px] h-[10px] w-full">
                  <div className="w-[75%] bg-[#04b4e0] border-solid border-[#222] border-[2px] rounded-[8px] h-[8px]"></div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="flex justify-between">
                <h4 className="text-sm font-semibold text-[#eee]">Perl</h4>
                <p className="text-xs text-[#aaa]">90%</p>
              </div>
              <div className="job-exp">
                <div className="inline-block relative bg-[#222] border-solid border-[#04b4e0] border-[1px] rounded-[8px] h-[10px] w-full">
                  <div className="w-[90%] bg-[#04b4e0] border-solid border-[#222] border-[2px] rounded-[8px] h-[8px]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="knowledges">
            <h3 className="text-2xl font-semibold text-[#eee] mb-5">
              Knowledges
            </h3>
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
