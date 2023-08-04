import "./Student.css";
export default function Student (){

      return(
            <section className="contact-section">
            <div className="contact-container">
              <h2>Contact Me</h2>
              <p>
                I'd love to hear from you! Whether you have a question, a project idea,
                or just want to say hi, feel free to get in touch using the form below.
              </p>
              <form>
                <div className="form-group">
                  <label className="form-group-1" htmlFor="name">Name</label>
                  <input className="int-btn" type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label className="form-group-1" htmlFor="email">Email</label>
                  <input className="int-btn" type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label className="form-group-1" htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button onSubmit={alert('the meassege shared succesfully')} className="sub-btn" type="submit">Send Message</button>
              </form>
            </div>
          </section>
        );
      
};