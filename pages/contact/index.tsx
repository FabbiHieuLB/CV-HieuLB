import { MainLayout } from "@/components/layouts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export interface ContactProps {}

export default function Contact(props: ContactProps) {
  return (
    <div className="contact">
      <div className="contact-title">
        <h2 className="text-4xl font-semibold text-[#eee] mb-10">Contact</h2>
      </div>
      <div className="contact-main">
        <div className="information">
          <div className="information-item mb-[15px] bg-[#333] border-solid border-[#444] border-[1px] py-[20px] px-[10] text-center">
            <div className="item-con mb-2">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="font-black text-[30px] text-[#04b4e0]"
              />
            </div>
            <div className="item-name">
              <span className="text-base font-semibold text-[#eee]">
                San Francisco
              </span>
            </div>
          </div>

          <div className="information-item mb-[15px] bg-[#333] border-solid border-[#444] border-[1px] py-[20px] px-[10] text-center">
            <div className="item-con mb-2">
              <FontAwesomeIcon
                icon={faPhone}
                className="font-black text-[30px] text-[#04b4e0]"
              />
            </div>
            <div className="item-name">
              <span className="text-base font-semibold text-[#eee]">
                415-832-2000
              </span>
            </div>
          </div>

          <div className="information-item mb-[15px] bg-[#333] border-solid border-[#444] border-[1px] py-[20px] px-[10] text-center">
            <div className="item-con mb-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="font-black text-[30px] text-[#04b4e0]"
              />
            </div>
            <div className="item-name">
              <span className="text-base font-semibold text-[#eee]">
                alex@example.com
              </span>
            </div>
          </div>

          <div className="information-item mb-[15px] bg-[#333] border-solid border-[#444] border-[1px] py-[20px] px-[10] text-center">
            <div className="item-con mb-2">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="font-black text-[30px] text-[#04b4e0]"
              />
            </div>
            <div className="item-name">
              <span className="text-base font-semibold text-[#eee]">
                Freelance Available
              </span>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <div className="map">
            <span>MAP</span>
          </div>
          <form action="">
            <h3 className="text-xl font-semibold text-[#eee] ">
              How Can I <span className="text-[#04b4e0]">Help You?</span>
            </h3>
            <div className="form-main grid gap-1 grid-cols-2">
              <div className="form-left">
                <div className="form-name mb-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border-solid border-[#999] border-[2px] bg-transparent outline-none pt-[10px] pr-[25px] pb-[10px] pl-[12px] rounded-[5px]"
                  />
                </div>
                <div className="form-email mb-5">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="border-solid border-[#999] border-[2px] bg-transparent outline-none pt-[10px] pr-[25px] pb-[10px] pl-[12px] rounded-[5px]"
                  />
                </div>
                <div className="form-sub mb-5">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="border-solid border-[#999] border-[2px] bg-transparent outline-none pt-[10px] pr-[25px] pb-[10px] pl-[12px] rounded-[5px]"
                  />
                </div>
              </div>
              <div className="form-right">
                <textarea
                  rows={7}
                  placeholder="Message"
                  className="border-solid border-[#999] border-[2px] bg-transparent outline-none pt-[10px] pr-[25px] pb-[10px] pl-[12px] rounded-[5px]"
                />
              </div>
            </div>
            <button className="border-solid border-[#04b4e0] border-[2px] bg-transparent rounded-[30px] px-8 py-3 text-sm text-[#f5f5f5]">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

Contact.Layout = MainLayout;
