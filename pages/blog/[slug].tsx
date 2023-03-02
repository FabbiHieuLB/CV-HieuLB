import { MainLayout } from "@/components/layouts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUser } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export interface BlogDetailPageProps {}

export default function BlogDetailPage(props: BlogDetailPageProps) {
  return (
    <article>
      <div className=" relative bg-[#b2b2b2]">
        {/* <Image src="./images/blog_post_1_full.jpg" /> */}
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

          <h2 className="text-3xl mx-[0px] my-[15px] text-[#eee] font-semibold">
            Best Practices for Animated Progress Indicators
          </h2>
        </header>

        <div className="text-base text-[#d5d5d5]">
          <p className="mb-[10px]">
            Nulla nulla nisl, sodales ac nulla ac, consequat vulputate purus.
            Curabitur tincidunt ipsum vel nibh rutrum accumsan. Nunc ullamcorper
            posuere leo, vitae aliquet risus pharetra in. Integer turpis eros,
            iaculis et mi non, pulvinar egestas leo. Etiam sagittis ex turpis,
            vitae cursus tortor interdum eu. Quisque ultrices nunc eget erat
            vestibulum euismod. Ut mauris nisi, facilisis at arcu nec, facilisis
            porttitor lorem.
          </p>
          <p className="mb-[10px]">
            Vivamus vitae neque molestie, porta libero sed, tincidunt leo. In
            nec posuere odio, id rhoncus lorem. Proin id erat ut dolor
            condimentum viverra. Praesent viverra sed dolor ac luctus. Praesent
            placerat id lorem quis lacinia.
          </p>

          <blockquote className="mb-[10px] px-[20px] py-[15px] my-[20px] mx-0 border-l-2 border-solid italic">
            Maecenas id finibus felis. Etiam vitae nibh et felis efficitur
            pellentesque. Mauris suscipit sapien nunc, a lacinia nibh feugiat
            ut. In hac habitasse platea dictumst.
            <footer className="quote-author">
              <span>Larry L. Johnson</span>
            </footer>
          </blockquote>

          <p className="mb-[10px]">
            Etiam interdum vulputate risus, vitae elementum neque consectetur
            sed. Donec at risus dui. Ut in suscipit neque. Vestibulum sit amet
            lobortis magna, commodo venenatis ante. Cras molestie, ex a auctor
            lacinia, risus est aliquam risus, sit amet semper purus tortor id
            ante. Donec lacus ipsum, porttitor et libero a, fringilla auctor
            quam. Sed in nisl id libero tincidunt aliquet. Aenean dui ipsum,
            auctor ut leo ut, semper dignissim lacus. Suspendisse faucibus
            viverra consequat. Maecenas efficitur massa vel eros sagittis
            dapibus. Nam lobortis mi in turpis hendrerit eleifend. Nulla non
            massa felis.
          </p>

          <p className="mb-[10px]">
            Donec sit amet dolor ante. Vivamus vel massa accumsan, faucibus quam
            quis, convallis velit. Aliquam erat volutpat. Integer imperdiet diam
            quis arcu venenatis, quis sagittis nibh rhoncus. Donec non nisi
            scelerisque, sodales metus quis, accumsan mauris. Curabitur volutpat
            risus rutrum erat condimentum tristique. Nullam at felis diam.
            Quisque dictum felis non ante pretium mollis. Aliquam turpis neque,
            varius nec diam a, aliquam pulvinar diam. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Sed ipsum libero, aliquet
            sed bibendum faucibus, semper a dui.
          </p>
        </div>

        <div className="inline-block w-full bg-[#333] border-solid border-[#444] border-[1px] px-[10px] py-[8px] mt-[30px] text-[#b5b5b5] text-base">
          <span>
            <a href="#" rel="bookmark">
              <FontAwesomeIcon icon={faClock} className="" />
              <span className="entry-date"> March 16, 2020</span>
            </a>
          </span>
          <span>
            <a href="#" rel="author">
              <FontAwesomeIcon icon={faUser} className="" /> LMPixels
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
