import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <footer className="footerDevsteam py-4 mt-5">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h2 className="fw-bold logoFooter">
              DevSteam
            </h2>

            <p className="fraseFooter mb-0">
              Juro que tô tentando 🙏
            </p>
          </div>

          <div className="col-md-6 text-center">
            <h3 className="fw-bold mb-3">
              Meus Contatos Abaixo!
            </h3>

            <div className="d-flex justify-content-center gap-4 mt-3">

              
              <a
                href="https://github.com/biel-365"
                target="_blank"
                rel="noreferrer"
                className="iconeFooter"
              >
                <GitHubIcon fontSize="large" />
              </a>


              <a
                href="https://www.instagram.com/biel_365official/"
                target="_blank"
                rel="noreferrer"
                className="iconeFooter"
              >
                <InstagramIcon fontSize="large" />
              </a>

              
              <a
                href="mailto:suporte@devsteam.com"
                className="iconeFooter"
              >
                <ContactSupportIcon fontSize="large" />
              </a>

            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
