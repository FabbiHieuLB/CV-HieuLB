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
      <h2 className="text-4xl font-semibold text-[#eee] mb-10">Contact</h2>
      <div className="contact-main flex flex-row gap-8">
        <div className="w-[30%]">
          <div className="mb-[15px] bg-[#333] border-solid border-[#444] border-[1px] py-[20px] px-[10] text-center">
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

          <div className="mb-[15px] bg-[#333] border-solid border-[#444] border-[1px] py-[20px] px-[10] text-center">
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

          <div className="mb-[15px] bg-[#333] border-solid border-[#444] border-[1px] py-[20px] px-[10] text-center">
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

          <div className="mb-[15px] bg-[#333] border-solid border-[#444] border-[1px] py-[20px] px-[10] text-center">
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

        <div className="w-[70%]">
          <div className="mb-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.6660331943!2d105.79108181531399!3d21.046044792563087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab3073615aff%3A0x5f7d5efd40024836!2zSG_DoG5nIFF14buRYyBWaeG7h3QsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1678066551146!5m2!1svi!2s"
              width="100%"
              height="140"
              loading="lazy"
            ></iframe>
          </div>
          <form action="">
            <h3 className="text-2xl font-semibold text-[#eee] mb-5 ">
              How Can I <span className="text-[#04b4e0]">Help You?</span>
            </h3>
            <div className="grid gap-1 grid-cols-2">
              <div className="form-left">
                <div className="mb-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border-solid border-[#999] border-[2px] bg-transparent outline-none pt-[10px] pr-[25px] pb-[10px] pl-[12px] rounded-[5px] w-full"
                  />
                </div>
                <div className="form-email mb-5">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="border-solid border-[#999] border-[2px] bg-transparent outline-none pt-[10px] pr-[25px] pb-[10px] pl-[12px] rounded-[5px] w-full"
                  />
                </div>
                <div className="form-sub mb-5">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="border-solid border-[#999] border-[2px] bg-transparent outline-none pt-[10px] pr-[25px] pb-[10px] pl-[12px] rounded-[5px] w-full"
                  />
                </div>
              </div>
              <div className="form-right">
                <textarea
                  rows={8}
                  placeholder="Message"
                  className="border-solid border-[#999] border-[2px] bg-transparent outline-none pt-[10px] pr-[25px] pb-[16px] pl-[12px] rounded-[5px] w-full"
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
