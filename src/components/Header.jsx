import TypingEffect from "react-typing-effect";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Falonne MUYOMBO TSHOBOLA</h1>
        <TypingEffect
          className="typed-text"
          text={[
            "Développeuse web",
            "Développeuse Conceptrice D'applications PHP Symfony",
          ]}
          speed={200}
          eraseDelay={1500}
          typingDelay={500}
          loop={true}
        />
        <a href="#" className="btn-main-offer">
          Contacter moi
        </a>
      </div>
    </div>
  );
};

export default Header;
