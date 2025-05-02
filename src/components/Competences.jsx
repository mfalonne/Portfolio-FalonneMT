import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faSass,
  faBootstrap,
  faReact,
  faAngular,
  faVuejs,
  faWordpress,
  faPhp,
  faJava,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faChartBar,
  faCubes,
  faCogs,
  faExchangeAlt,
  faDesktop,
  faSignal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Competences = () => {
  return (
    <div
      className="competences bgcolor2"
      id="competences"
      style={{ height: "60vh" }}
    >
      <div className="container">
        <h2 className="text-center text-white py-5">Mes compétences</h2>
        <div className="d-flex gap-5 flex-nowrap justify-content-center align-items-center">
          {/* Frontend Card */}
          <div
            className="card text-white bgColor1"
            style={{ width: "30rem", height: "20rem" }}
          >
            <div className="card-body frontend bgColor1">
              <h3 className="card-title text-center py-3 text-black">
                Frontend
              </h3>
              <div className="row">
                <div className="col-md-4 d-flex flex-column align-items-center gap-3">
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faHtml5} size="2x" />
                    <strong>HTML5</strong>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faCss3Alt} size="2x" />
                    <strong>CSS3</strong>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faJsSquare} size="2x" />
                    <strong>JavaScript</strong>
                  </div>
                </div>
                <div className="col-md-4 d-flex flex-column align-items-center gap-3">
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faReact} size="2x" />
                    <strong>React</strong>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faAngular} size="2x" />
                    <strong>Angular</strong>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faVuejs} size="2x" />
                    <strong>Vue.js</strong>
                  </div>
                </div>
                <div className="col-md-4 d-flex flex-column align-items-center gap-3">
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faWordpress} size="2x" />
                    <strong>WordPress</strong>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faSass} size="2x" />
                    <strong>Sass</strong>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faBootstrap} size="2x" />
                    <strong>Bootstrap</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Backend Card */}
          <div
            className="card text-white bgColor1"
            style={{ width: "30rem", height: "20rem" }}
          >
            <div className="card-body backend">
              <h3 className="card-title text-center py-3 text-black">
                Backend
              </h3>
              <div className="row">
                <div className="col-md-4 d-flex flex-column align-items-center gap-3">
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faPhp} size="2x" />
                    <strong>PHP</strong>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faJava} size="2x" />
                    <strong>Java</strong>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faNodeJs} size="2x" />
                    <strong>Node.js</strong>
                  </div>
                </div>
                <div className="col-md-4 d-flex flex-column align-items-center gap-3">
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faCogs} size="2x" />
                    <strong>Spring</strong>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faDatabase} size="2x" />
                    <strong>SQL/NoSQL</strong>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faDatabase} size="2x" />
                    <strong> MySQL/MongoDB</strong>
                  </div>
                </div>
                <div className="col-md-4 d-flex flex-column align-items-center gap-3">
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faExchangeAlt} size="2x" />
                    <strong>API REST</strong>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faCubes} size="2x" />
                    <strong>Symfony</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Development Card */}
          <div
            className="card text-white bgColor1"
            style={{ width: "30rem", height: "20rem" }}
          >
            <div className="card-body developpement">
              <h3 className="card-title text-center py-3 text-black">
                Développement
              </h3>
              <div className="row">
                <div className="col-md-6 d-flex flex-column align-items-center gap-3">
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faCogs} size="2x" />
                    <strong>Git</strong>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faChartBar} size="2x" />
                    <strong>CI/CD</strong>
                  </div>
                </div>
                <div className="col-md-6 d-flex flex-column align-items-center gap-3">
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faDesktop} size="2x" />
                    <strong>UML</strong>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faSignal} size="2x" />
                    <strong>DevOps: AWS</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competences;
