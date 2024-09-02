import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setStatus("Reset!");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (name == "" || email == "" || message == "") {
      setStatus("Please fill out all fields.");
      return;
    }

    if (messageSent) {
      setStatus(
        "You have already sent me kind message, save your kindness to someone else!",
      );
      return;
    }

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
          setStatus("Your message was sent successfully!");
          setMessageSent(true);
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
            onClick={() => handleReset()}
          />
        </form>
        <div
          className="pt-1 ml-1"
          style={{ color: messageSent ? "lightgreen" : "red" }}
        >
          {status}
        </div>
      </div>
    </div>
  );
}
