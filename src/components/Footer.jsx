const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <p>© 2023 Falonne MUYOMBO TSHOBOLA. Tous droits réservés.</p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <ul className="social-links">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
