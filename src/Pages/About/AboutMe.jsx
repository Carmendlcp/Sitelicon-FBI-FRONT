import React from 'react';
import './AboutMe.css';
import myPhoto from '../../assets/20240222_222941.jpg'; 

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="content">
        <div className="left-section">
          <img src={myPhoto} alt="Foto Carmen" />
        </div>
        <div className="right-section">
          <p>
            ¡Hola a todos!
          </p>
          <p>
            Mi nombre es Carmen, y estoy entusiasmada de compartir un poco sobre mí y mi experiencia en este proyecto. Estoy en un viaje de aprendizaje constante en el mundo de la programación. Todavía estoy aprendiendo y enfrentando desafíos, comprometida a crecer y mejorar cada día.¡Me queda muchísmo por aprender!
          </p>
          <p>
            Una de las principales dificultades que he encontrado en este proyecto ha sido la familiarización con varios conceptos nuevos, desde las rutas hasta la lógica detrás del código... No he trabajado con Tailwind, por ejemplo, que seguro que me haría acabar antes. También me ha costado un poco el back, es lo que llevo más flojo. A menudo, tengo que revisar videos de clases pasadas o buscando información en trabajos anteriores para superar estos obstáculos. Pero gracias a todo ello y a que no desisto, logro sacarlo y superar los problemas que se me van presentando. Pero soy muy consciente de que tengo mucho por mejorar.
          </p>
          <p>
            Mi carrera profesional anterior me ha llevado por diversos sectores, y en cada uno de ellos he encontrado aprendizajes valiosos. Mi experiencia previa en el trato con el cliente me ha proporcionado habilidades sólidas en la comunicación y la gestión de relaciones, aspectos que considero fundamentales en cualquier entorno laboral.
          </p>
          <p>
            A pesar de haber disfrutado en cada uno de mis trabajos anteriores, decidí aventurarme en el mundo de la programación porque siempre he sentido curiosidad por él. Aunque comencé desde cero, estoy contenta con la oportunidad de aprender y crecer en esta industria, que al final, este mundo es un constante aprendizaje.
          </p>
          <p>
            Estoy agradecida por la oportunidad de participar con Sitelicon y estoy emocionada por las experiencias que puedan estar por venir. ¡Espero poder contribuir y aprender mucho más con vosotros! Muchas gracias de antemano 😊
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
