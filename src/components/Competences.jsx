import React from "react";

const Competences = () => {
  return (
    <div className="competences" id="competences">
      <div className="container">
        <h2 className="text-center my-3">Mes compétences</h2>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div classeName="frontend">
              <h3>Technologies Frontend</h3>
              <ul>
                <li>Language: HTMLS, CSS3, JavaScript/TypeScipt</li>
                <li>
                  Frameworks & Bibliothèques: Saas, Bootstrap,
                  React.Js/Redux/React Native, Angular, Vue.JS
                </li>
                <li>Responsive Design</li>
                <li>UX/UI: Figma</li>
                <li>SEO</li>
                <li>CMS: WordPress</li>
              </ul>
            </div>
            <div classeName="backend">
              <h3>Technologies Backend</h3>
              <ul>
                <li>Languages: PHP, Java, Node.js</li>
                <li>Frameworks: Symfony, Spring</li>
                <li>Gestion de données: SQL/MySQL, NoSQL/MongoDB </li>
                <li>API REST</li>
                <li>API REST</li>
              </ul>
            </div>
            <div classeName="developpement">
              <h3>Outils de développement</h3>
              <ul>
                <li>Git</li>
                <li>UML</li>
                <li>CI/CD</li>
                <li>DevOps: AWS</li>
              </ul>
            </div>
            <div classeName="informatique">
              <h3>Réseau et Télécommunications</h3>
              <ul>
                <li>Git</li>
                <li>UML</li>
                <li>CI/CD</li>
                <li>DevOps: AWS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competences;
