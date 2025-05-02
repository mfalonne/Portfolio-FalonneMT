import { Carousel, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

const MonPortfolioDefilantAvecLiens = () => {
  const portfolioProjects = [
    {
      imageUrl: "/images/projet1_miniature.png",
      title: "Titre du Projet 1",
      description: "Petite description du projet 1.",
      link: "/projet/1", // Le lien vers la page de réalisation
    },
    {
      imageUrl: "/images/projet2_miniature.png",
      title: "Titre du Projet 2",
      description: "Petite description du projet 2.",
      link: "/projet/2",
    },
    // Ajoutez vos autres projets
  ];

  return (
    <Carousel>
      {portfolioProjects.map((projet, index) => (
        <Carousel.Item key={index}>
          <a href={projet.link} target="_blank" rel="noopener noreferrer">
            <img
              className="d-block w-100"
              src={projet.imageUrl}
              alt={projet.title}
              style={{
                maxHeight: "400px",
                objectFit: "contain",
                cursor: "pointer",
              }} // Indique que c'est cliquable
            />
          </a>
          <Carousel.Caption>
            <h3>{projet.title}</h3>
            <p>{projet.description}</p>
            <Button
              variant="primary"
              href={projet.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir la réalisation
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MonPortfolioDefilantAvecLiens;
