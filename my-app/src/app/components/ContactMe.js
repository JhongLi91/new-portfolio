"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const Text = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
      e.preventDefault();

      const templateParams = {
        from_name: name,
        from_email: email,
        to_name: "Jian Hong Li",
        message: message,
      };

      emailjs
        .send(
          "service_rwpdhkz",
          "template_64ua2um",
          templateParams,
          "coQKsVeLVXvF6T4t7",
        )

        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
            alert("Your message was successfully sent :)");
            setName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.log("ERROR");
          },
        );
    };

    return (
      <div className="flex flex-col">
        <div className="OrangeFont font-bold text-sm pb-8">CONTACT ME</div>
        <div className="text-base pb-2">
          Want to contact me? Use the form below and leave a kind message!
        </div>
        <div className="text-sm SlateFont">
          <form
            method="post"
            onSubmit={(e) => {
              sendEmail(e);
            }}
          >
            NAME:
            <br />
            <input
              className="rounded-md text-black w-72 mb-2 pl-2 "
              type="text"
              name="user_name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <br />
            EMAIL:
            <br />
            <input
              className="rounded-md text-black w-72 mb-2 pl-2"
              type="text"
              name="user_email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            COMMENT:
            <br />
            <textarea
              className="rounded-md text-black w-full h-48 mb-2 pl-2"
              name="message"
              cols={30}
              rows={3}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <br />
            <input
              className="mr-2 px-2 py-1 text-sm emailButton"
              type="submit"
              value="SEND"
            />
            <input
              className="ml-2 px-2 py-1 text-sm emailButton"
              type="reset"
              value="RESET"
            />
          </form>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Text />
    </div>
  );
}
