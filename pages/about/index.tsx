import { MainLayout } from "@/components/layouts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

export interface AboutMeProps {}

export default function AboutMe(props: AboutMeProps) {
  return (
    <div className="about-me">
      <div className="mb-[60px]">
        <h2 className=" z-10 relative text-3xl font-semibold mb-[60px] after:absolute after:opacity-50 after:top-[15px] after:left-[15%] after:h-[30px] after:w-[50px] after:bg-gradient-to-r from-cyan-500 to-cyan-500 ">
          About <span className="text-[#04b4e0]">Me</span>
        </h2>
        <div className="flex">
          <div className="content-content w-[60%] mr-[30px]">
            <p className="text-[#d5d5d5] text-base ">
              Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue
              elit vel odio suscipit, sit amet tempor nisl imperdiet. Quisque ex
              justo, faucibus ut mi in, condimentum finibus dolor. Aliquam vitae
              hendrerit dolor, eget imperdiet mauris. Maecenas et ante id ipsum
              condimentum dictum et vel massa. Ut in imperdiet dolor, vel
              consectetur dui.
            </p>
          </div>
          <div className="content-information w-[35%]">
            <h4 className="text-base">
              <span className="text-[#04b4e0] mr-[5px] font-semibold ">
                Age
              </span>{" "}
              32
            </h4>
            <h4 className="text-base">
              <span className="text-[#04b4e0] mr-[5px] font-semibold ">
                Residence
              </span>{" "}
              USA
            </h4>
            <h4 className="text-base">
              <span className="text-[#04b4e0] mr-[5px] font-semibold ">
                Address
              </span>{" "}
              88 Pho Hue
            </h4>
            <h4 className="text-base">
              <span className="text-[#04b4e0] mr-[5px] font-semibold ">
                E-mail
              </span>{" "}
              email@example.com
            </h4>
            <h4 className="text-base">
              <span className="text-[#04b4e0] mr-[5px] font-semibold ">
                Phone
              </span>{" "}
              0123456789
            </h4>
          </div>
        </div>
      </div>

      <div className="mb-[60px]">
        <h3 className="text-xl text-[#eee] font-semibold mb-5">
          What <span className="text-[#04b4e0]">I Do</span>
        </h3>
        <div className="introduce-main grid gap-4 grid-cols-2 grid-rows-2">
          <div className="introduce-item">
            <div className="introduce-logo mb-2">
              <FontAwesomeIcon
                className="text-4xl text-[#04b4e0]"
                icon={faStore}
              />
            </div>
            <div className="introduce-title mb-2">
              <h4 className="text-lg text-[#eee] font-semibold">Ecommerce</h4>
            </div>
            <div className="introduce-content">
              <p className="text-base">
                Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
                tortor bibendum massa, sit amet ultricies ex lectus scelerisque
                nibh. Ut non sodales.
              </p>
            </div>
          </div>

          <div className="introduce-item">
            <div className="introduce-logo mb-2">
              <FontAwesomeIcon
                className="text-4xl text-[#04b4e0]"
                icon={faStore}
              />
            </div>
            <div className="introduce-title mb-2">
              <h4 className="text-lg text-[#eee] font-semibold">Ecommerce</h4>
            </div>
            <div className="introduce-content">
              <p className="text-base">
                Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
                tortor bibendum massa, sit amet ultricies ex lectus scelerisque
                nibh. Ut non sodales.
              </p>
            </div>
          </div>

          <div className="introduce-item">
            <div className="introduce-logo mb-2">
              <FontAwesomeIcon
                className="text-4xl text-[#04b4e0]"
                icon={faStore}
              />
            </div>
            <div className="introduce-title mb-2">
              <h4 className="text-lg text-[#eee] font-semibold">Ecommerce</h4>
            </div>
            <div className="introduce-content">
              <p className="text-base">
                Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
                tortor bibendum massa, sit amet ultricies ex lectus scelerisque
                nibh. Ut non sodales.
              </p>
            </div>
          </div>

          <div className="introduce-item">
            <div className="introduce-logo mb-2">
              <FontAwesomeIcon
                className="text-4xl text-[#04b4e0]"
                icon={faStore}
              />
            </div>
            <div className="introduce-title mb-2">
              <h4 className="text-lg text-[#eee] font-semibold">Ecommerce</h4>
            </div>
            <div className="introduce-content">
              <p className="text-base">
                Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
                tortor bibendum massa, sit amet ultricies ex lectus scelerisque
                nibh. Ut non sodales.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="px-5">
          <div className="testimonials-image mb-4">
            <img
              src="./images/testimonial-2.jpg"
              alt=""
              className="w-[90px] h-[90px] rounded-full"
            />
          </div>
          <div className="testimonials-text mb-4">
            <span className="italic text-base text-[#d5d5d5]">
              Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas
              dolor. Nulla condimentum nunc sit amet urna tempus finibus. Duis
              mollis leo id ligula pellentesque, at vehicula dui ultrices.
            </span>
          </div>
          <div className="testimonials-info flex justify-between">
            <div className="info-author">
              <h3 className="font-semibold text-[#eee]">Robert Watkins</h3>
              <p className="text-sm font-light text-[#a5a6a7]">
                Endicott Shoes
              </p>
            </div>
            <div className="info-icon">
              <FontAwesomeIcon
                icon={faQuoteRight}
                className="font-black text-[30px] text-[#04b4e0]"
              />
            </div>
          </div>
        </div>

        <div className="px-5">
          <div className="mb-4">
            <img
              src="./images/testimonial-2.jpg"
              alt=""
              className="w-[90px] h-[90px] rounded-full"
            />
          </div>
          <div className="mb-4">
            <span className="italic text-base text-[#d5d5d5]">
              Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas
              dolor. Nulla condimentum nunc sit amet urna tempus finibus. Duis
              mollis leo id ligula pellentesque, at vehicula dui ultrices.
            </span>
          </div>
          <div className="flex justify-between">
            <div className="info-author">
              <h3 className="font-semibold text-[#eee]">Robert Watkins</h3>
              <p className="text-sm font-light text-[#a5a6a7]">
                Endicott Shoes
              </p>
            </div>
            <div className="info-icon">
              <FontAwesomeIcon
                icon={faQuoteRight}
                className="font-black text-[30px] text-[#04b4e0]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

AboutMe.Layout = MainLayout;
