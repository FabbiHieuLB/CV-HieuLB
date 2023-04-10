import { MainLayout } from "@/components/layouts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUser } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import useFetch from "@/components/hooks/useFetch";
import { useRouter } from "next/router";

export interface BlogDetailPageProps {}

export default function BlogDetailPage(props: BlogDetailPageProps) {
  const router = useRouter();
  console.log("----Blog detail router----", router);

  const { loading, error, data }: any = useFetch(
    `http://localhost:1337/api/blogs/` + router.query.slug
  );
  console.log("Blog Detail", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <article>
      <div className=" relative bg-[#b2b2b2]">
        <img
          src="../images/blog_post_1_full.jpg"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="relative mt-[-70px] ml-[40px] mr-[40px] px-[30px] bg-[#222] z-10">
        <header className="entry-header">
          <div className="text-[#9e9e9e] mx-[0px] my-[15px] text-sm">
            <span>
              <a href="#" rel="category tag">
                UI
              </a>
            </span>
          </div>

          <h2 className="text-3xl mx-[0px] my-[15px] text-[#eee] font-semibold"></h2>
        </header>

        <div className="text-base text-[#d5d5d5]">
          <p className="mb-[10px]">{data.data.attributes.textOne}</p>
          <p className="mb-[10px]">{data.data.attributes.textTwo}</p>

          <blockquote className="mb-[10px] px-[20px] py-[15px] my-[20px] mx-0 border-l-2 border-solid italic">
            {data.data.attributes.textThree}
            <footer className="quote-author">
              <span>{data.data.attributes.author}</span>
            </footer>
          </blockquote>

          <p className="mb-[10px]">{data.data.attributes.textFour}</p>

          <p className="mb-[10px]">{data.data.attributes.textFive}</p>
        </div>

        <div className="inline-block w-full bg-[#333] border-solid border-[#444] border-[1px] px-[10px] py-[8px] mt-[30px] text-[#b5b5b5] text-base">
          <span>
            <a href="#" rel="bookmark">
              <FontAwesomeIcon icon={faClock} className="" />
              <span className="entry-date">
                {" "}
                {data.data.attributes.createdAt}
              </span>
            </a>
          </span>
          <span>
            <a href="#" rel="author">
              <FontAwesomeIcon icon={faUser} className="" />{" "}
              {data.data.attributes.author}
            </a>
          </span>

          <div className="">
            <a
              href="#"
              className="btn"
              target="_blank"
              title="Share on Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              href="#"
              className="btn"
              target="_blank"
              title="Share on Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a href="#" className="btn" title="Share on LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="mx-0 my-[30px]">
          <button className="text-sm text-[#e5e5e5] px-[7px] py-[2px] bg-[#444] rounded-[3px] ">
            animate
          </button>
          <button className="text-sm text-[#e5e5e5] px-[7px] py-[2px] bg-[#444] rounded-[3px] ">
            bar
          </button>
          <button className="text-sm text-[#e5e5e5] px-[7px] py-[2px] bg-[#444] rounded-[3px] ">
            design
          </button>
          <button className="text-sm text-[#e5e5e5] px-[7px] py-[2px] bg-[#444] rounded-[3px] ">
            progress
          </button>
          <button className="text-sm text-[#e5e5e5] px-[7px] py-[2px] bg-[#444] rounded-[3px] ">
            ui
          </button>
        </div>
      </div>
    </article>
  );
}

BlogDetailPage.Layout = MainLayout;
