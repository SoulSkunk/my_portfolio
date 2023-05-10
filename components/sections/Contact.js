import styles from "../../styles/Contact.module.scss";
import Titles from "../Titles";
import Form from "../Form";

function Contact() {
  return (
    <div id="contact" className="container mt-section">
      <Titles value="Contact"></Titles>
      <div className="row">
        <div className="col-md-5">
          <div className={`${styles.bgMap} pe-5 h-100`}>
            <h3 className="fs-5">Parlons de ce que vous voulez !</h3>
            <p>
              Vous pouvez aussi m'envoyer un mail directement Envoyez moi un{" "}
              <a href="mailto:kylian.broccolichi@mediaschool.me">e-mail</a> 👋
            </p>
          </div>
        </div>
        <div className="col-md-7">
          <Form></Form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
