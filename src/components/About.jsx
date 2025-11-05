import { Container } from 'react-bootstrap';
import daun from "../assets/daun1.png";

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <div className="d-flex">
          <div className="image">
            <img src={daun} alt="About_image" />
          </div>
          <div className="wrap-text">
            <h2 className="tag">About</h2>
            <p>
              Tomatoes are one of the most common horticultural crops found
              worldwide. Tomatoes are known to be susceptible to various diseases.
              These diseases can be identified by observing physical changes in
              the plant such as leaves. Once infected, proper treatment is needed
              to prevent crop failure. <br /> This project was created to
              classify tomato diseases based on leaf images along with descriptions
              and treatments for these diseases using machine learning. This
              project is called TomatoGuard.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
