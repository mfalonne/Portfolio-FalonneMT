// import React from "react";

const Apropos = () => {
  return (
    <div className="apropos" id="apropos">
      <div className="container">
        <h2 className="text-center my-5">A propos de moi</h2>
        <div className="d-flex">
          <div className="flex-shrink-0 rounded">
            <img
              src="/maPhoto.png"
              alt="A propos de moi"
              className="img-fluid mx-auto"
            />
          </div>
          <div className="flex-grow-1 ms-3">
            <div className="qualites d-flex gap-3 flex-wrap justify-content-center align-items-center">
              <h4 className="qualite p-3 rounded d-flex justify-content-center align-items-center">
                Créative
              </h4>
              <h4 className="qualite p-3 rounded d-flex justify-content-center align-items-center">
                Rigoureuse
              </h4>
              <h4 className="qualite p-3 rounded d-flex justify-content-center align-items-center">
                Autonome
              </h4>
            </div>
            <p className="text-center mt-4">
              Je suis une développeuse web passionnée par la création
              d'applications web modernes et fonctionnelles. Mon objectif est de
              concevoir des solutions innovantes qui répondent aux besoins des
              utilisateurs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apropos;
