// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faCheckSquare,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";

const Apropos = () => {
  return (
    <div className="apropos" id="apropos">
      <div className="container py-5">
        <h2 className="text-center pb-5">A propos de moi</h2>
        <div className="d-flex gap-5">
          <div className="flex-shrink-0">
            <img
              src="/maPhoto.png"
              alt="A propos de moi"
              className="img-fluid mx-auto rounded"
              style={{ maxWidth: "450px", maxHeight: "450px" }}
            />
          </div>
          <div className="flex-grow-1 ms-3 d-flex flex-column gap-5">
            <div className="qualites d-flex gap-3 flex-wrap justify-content-center align-items-center">
              <h4 className="qualite p-3 rounded d-flex justify-content-center align-items-center text-white">
                <FontAwesomeIcon icon={faLightbulb} className="me-2 color1" />
                Créative
              </h4>
              <h4 className="qualite p-3 rounded d-flex justify-content-center align-items-center text-white">
                <FontAwesomeIcon icon={faCheckSquare} className="me-2 color1" />
                Rigoureuse
              </h4>
              <h4 className="qualite p-3 rounded d-flex justify-content-center align-items-center text-white">
                <FontAwesomeIcon
                  icon={faUserAstronaut}
                  className="me-2 color1"
                />
                Autonome
              </h4>
            </div>
            <p className="text-center mt-4 px-4 fs-6">
              Passionnée par la création d'applications web modernes et
              fonctionnelles, je suis une développeuse web animée par le désir
              de concevoir des solutions innovantes qui répondent véritablement
              aux besoins des utilisateurs. Chaque projet est pour moi une
              opportunité d'allier esthétique et performance pour offrir des
              expériences en ligne engageantes et efficaces.
            </p>
            <h5 className="text-center mt-4 ">
              <em className="text-center color1">
                "L'aventure du développement n'est jamais terminée. Chaque
                nouveau projet est une opportunité d'apprendre et de grandir."
              </em>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apropos;
