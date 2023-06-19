function Contact(){
    return (
        <section className="contact" id="contact">
  <h1 className="heading">
    contact <span> me </span>
  </h1>
  <div className="icons-container">
    <div className="icons">
      <i className="fas fa-envelope" />
      <h3>My Email</h3>
      <p>jayandrathapa5518@gmail.com</p>
    </div>
    <div className="icons">
      <i className="fas fa-phone" />
      <h3>My Number</h3>
      <p>9863467790</p>
      <p>9818173031</p>
    </div>
    <div className="icons">
      <i className="fas fa-map-marker-alt" />
      <h3>My Address</h3>
      <p>Maitidevi, Kathmandu</p>
    </div>
  </div>
  <div className="row">
    <form action="">
      <input type="text" placeholder="name" className="box" />
      <input type="email" placeholder="email" className="box" />
      <input type="number" placeholder="number" className="box" />
      <textarea
        name=""
        placeholder="message"
        id=""
        cols={30}
        rows={10}
        defaultValue={""}
      />
      <input type="submit" className="btn" defaultValue="Send Message" />
    </form>
    <iframe
      className="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3794981426213!2d85.3322217149014!3d27.705566782792655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199ffe9d7c6b%3A0x91b3a969f305a0bc!2sMaitidevi%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1664170704645!5m2!1sen!2snp"
      width={600}
      height={450}
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
    />
  </div>
</section>

        );
    }
    
    export default Contact;