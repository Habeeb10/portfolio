import lines from "../../../src/assets/images/lines.svg";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <div className="titlecontainer">
        <h3 className="getintouch">Get in touch</h3>
        <img src={lines} alt="line" className="line" />
      </div>
      <form
        id="contact-form"
        // action="https://getform.io/f/c24e3714-791f-4a2b-8a82-9c4caf0c7a24"
        method="POST"
        class="form"
        data-text="Send"
      >
        <div className="inputcontainer">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              class="form-control"
              required=""
              id="email"
              data-validation-required-message="Please enter your mail"
            />
          </div>
          <div class="formgroup">
            <label for="phone">Phone</label>
            <input
              type="phone"
              name="phone"
              class="form-control"
              required=""
              id="phone"
              data-validation-required-message="Please enter your phone"
            />
          </div>
        </div>
        <div class="form-group2">
          <label for="message">Message</label>
          <textarea
            name="message"
            class="form-control2"
            rows="5"
            id="message"
            required=""
            data-validation-required-message="Please enter your message"
          ></textarea>
        </div>
        <div class="text-center mt-4">
          <button
            type="submit"
            class="sim-btn btn-hover-new   __webInspectorHideElement__"
            className="button2"
          >
            Send
          </button>
        </div>
      </form>
      <footer class="footer">
        <div>
          <nav class="contain text-center">
            <a
              href="https://www.linkedin.com/in/tijani-habeeb-43a84816b/"
              className="linked"
            >
              LinkedIn
            </a>

            <a href="mailto:tijanihabib42@gmail.com" className="email">
              Email
            </a>

            <a href="https://github.com/habeeb10" className="hub">
              GitHub
            </a>
          </nav>
        </div>
        <div class="footer-distributed">
          <div class="footer-left">
            <h3 class="footer-company-name">All Rights Reserved. © 2021 </h3>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Contact;
