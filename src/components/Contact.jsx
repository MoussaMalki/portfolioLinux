import "./ComponentsStyles.css";
const Contact = (props) => {
  return (
    <section>
      <div class="form">
        <form
          action="https://formspree.io/f/xvoyvlwk"
          method="POST"
          id="contactForm"
        >
          <div class="nameContainer">
            <input
              type="text"
              placeholder="your name"
              name="name"
              pattern="[a-z A-Z]+(([\d]*)?([a-z A-Z]*)?)*"
              required
            />
            <i class="bx bx-user" style={{ color: "var(--second-color)" }}></i>
          </div>

          <div class="emailContainer">
            <input
              type="text"
              placeholder="youremail@gmail.com"
              name="email"
              pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
              required
            />
            <i
              class="bx bx-envelope"
              style={{ color: "var(--main-color)" }}
            ></i>
          </div>

          <div class="msgContainer">
            <textarea
              name="message"
              placeholder="your message"
              required
            ></textarea>
            <i
              class="bx bx-message-square-dots"
              style={{ color: "#FFB84C" }}
            ></i>
          </div>
          <button type="submit" id="sendBtn">
            {props.lang === "ar" ? "ارسل" : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
