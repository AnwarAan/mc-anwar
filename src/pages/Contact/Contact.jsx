import icon from "../../assets/icon";
import SocialMedia from "../../components/SocialMedia";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div>
        <form
          method="post"
          action="mailto:anwaraan998@gmail.com"
          enctype="text/plain"
        >
          <fieldset>
            <legend>Contact Me</legend>
            <table>
              <tr>
                <td>
                  <label htmlFor="name">Fullname</label>
                </td>
                <td>
                  <input name="nam" id="name" type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="email">Email</label>
                </td>
                <td>
                  <input name="email" id="email" type="text" />
                </td>
              </tr>

              <tr>
                <td className="message">
                  <label htmlFor="message">Message</label>
                </td>
                <td>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="4"
                  ></textarea>
                </td>
              </tr>
            </table>
            <button type="submit">Submit</button>
          </fieldset>
        </form>

        <div className="flex justify-center mt-32">
          <SocialMedia
            link="https://www.linkedin.com/in/muchamad-choirul-anwar-aa4351211/"
            image={icon.linkedin}
          />
          <SocialMedia
            link="https://www.instagram.com/mcnwr76/"
            image={icon.instagram}
          />
          <SocialMedia link="https://github.com/AnwarAan" image={icon.github} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
