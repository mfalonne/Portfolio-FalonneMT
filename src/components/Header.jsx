import Particles from "react-tsparticles";
import TypingEffect from "react-typing-effect";
import { loadFull } from "tsparticles";

const Header = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <>
      <Particles
        className="ts-particules"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          // background: {
          //   color: "#000000", // Fond noir pour faire ressortir les lignes
          // },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff", // Couleur des particules
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
              },
            },
            line_linked: {
              // Cette section crée l'effet de toile d'araignée
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
              },
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 200,
                line_linked: {
                  opacity: 0.5,
                },
              },
              bubble: {
                distance: 200,
                size: 10,
                duration: 2,
                opacity: 0.8,
              },
              repulse: {
                distance: 100,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <div className="header-wraper">
        <div className="main-info">
          <h1>Falonne MUYOMBO TSHOBOLA</h1>
          <TypingEffect
            className="typed-text"
            text={[
              "Développeuse web",
              "Conceptrice Développeuse D'applications PHP Symfony",
            ]}
            speed={200}
            eraseDelay={1500}
            typingDelay={500}
            loop={true}
          />
          <div className="bouton">
            <a href="#" className="btn-main-offer">
              Télécharger CV
            </a>
            <a href="#" className="btn-main-offer">
              Contacter moi
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
