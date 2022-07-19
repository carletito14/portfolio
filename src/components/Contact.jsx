/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [t] = useTranslation("global");

  const sendEmail = () => {
    window.location = "mailto:contactomanuelgutierrez@gmail.com";
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#023047] flex justify-center items-center p-4"
    >
      <form
        action="https://formsubmit.co/contactomanuelgutierrez@gmail.com"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-200 text-gray-300">
            {t("contact.title")}
          </p>
          <p className="text-gray-300 py-4">
            // {t("contact.subtitle")} -{" "}
            <strong className="underline cursor-pointer" onClick={sendEmail}>
              {" "}
              contactomanuelgutierrez@gmail.com
            </strong>
          </p>
        </div>
        <div className="flex flex-col m-auto w-6/12">
          <input
            className="bg-[#ccd6f6] p-2 rounded-xl"
            type="text"
            placeholder={t("contact.form.name")}
            name="name"
          />
          <input
            className="my-4 bg-[#ccd6f6] p-2 rounded-xl"
            type="email"
            placeholder={t("contact.form.email")}
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2"
            name="message"
            rows="5"
            placeholder={t("contact.form.message")}
          ></textarea>
          <button className="text-white border-2 hover:bg-yellow-500 hover:border-yellow-200 px-4 py-3 my-8 mx-auto flex items-center">
            {t("contact.collaborate-button")}
          </button>
        </div>

        <input
          type="hidden"
          name="_next"
          value="https://www.linkedin.com/in/manuel-gutiérrez-campos/"
        />
        <input type="hidden" name="_captcha" value="false" />
      </form>
    </div>
  );
};

export default Contact;
