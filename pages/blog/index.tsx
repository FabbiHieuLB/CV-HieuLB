import { MainLayout } from "@/components/layouts";

export interface BlogPostProps {}

export default function BlogPost(props: BlogPostProps) {
  return (
    <div className="blog">
      <div className="blog-title">
        <h2 className="text-4xl font-semibold text-[#eee] mb-10">Blog</h2>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-[#444] overflow-hidden">
          <img
            src="./images/blog_post_1.jpg"
            alt=""
            className="hover:scale-110 hover:ease-in-out hover:duration-300 cursor-pointer"
          />
          <div className="px-4 py-4">
            <span className="text-xs font-light text-[#aaa]">05 Mar 2020</span>
            <h3 className="text-lg font-semibold text-[#eee]">
              Why I Switched to Sketch For UI Design
            </h3>
          </div>
        </div>
        <div className=" bg-[#444] overflow-hidden">
          <img
            src="./images/blog_post_2.jpg"
            alt=""
            className="hover:scale-110 hover:ease-in-out hover:duration-300 cursor-pointer"
          />
          <div className="px-4 py-4">
            <span className="text-xs font-light text-[#aaa]">05 Mar 2020</span>
            <h3 className="text-lg font-semibold text-[#eee]">
              Why I Switched to Sketch For UI Design
            </h3>
          </div>
        </div>
        <div className=" bg-[#444] overflow-hidden">
          <img
            src="./images/blog_post_3.jpg"
            alt=""
            className="hover:scale-110 hover:ease-in-out hover:duration-300 cursor-pointer"
          />
          <div className="px-4 py-4">
            <span className="text-xs font-light text-[#aaa]">05 Mar 2020</span>
            <h3 className="text-lg font-semibold text-[#eee]">
              Why I Switched to Sketch For UI Design
            </h3>
          </div>
        </div>
        <div className=" bg-[#444] overflow-hidden">
          <img
            src="./images/blog_post_4.jpg"
            alt=""
            className="hover:scale-110 hover:ease-in-out hover:duration-300 cursor-pointer"
          />
          <div className=" px-4 py-4">
            <span className="text-xs font-light text-[#aaa]">05 Mar 2020</span>
            <h3 className="text-lg font-semibold text-[#eee]">
              Why I Switched to Sketch For UI Design
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

BlogPost.Layout = MainLayout;
