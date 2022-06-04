import React from "react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <>
      <div className="about">
        <p>
          <b>
            Proyectos de Innovación Docente. Convocatoria PIBD 2020-2022.
            Modalidad Básicos I y II
            <br />
            <br />
            HERRAMIENTAS VIRTUALES EN INGLÉS PARA UN APRENDIZAJE INTERACTIVO Y
            DIVERTIDO DE LA QUÍMICA: CHEMGAME. nº (20-07)
            <br />
            <br />
            JUEGOS VIRTUALES EN INGLÉS PARA UN APRENDIZAJE INTERACTIVO Y
            DIVERTIDO DE LA QUÍMICA: CHEMGAME 2.0. nº (21-11)
          </b>
        </p>
        <p>
          Estos proyectos de investigación docente están enfocados en el diseño
          de una intervención educativa basada en la gamificación para
          alumnos/as de los primeros cursos de Química (Módulo Básico) de los
          múltiples Grados en Ciencias e Ingeniería impartidos en la Universidad
          de Granada. El objetivo principal es suscitar el interés y la
          motivación del alumnado mediante actividades interactivas impulsando
          la comprensión de los fundamentos teóricos, propiedades de compuestos
          químicos y técnicas comunes usadas en su estudio en inglés.
        </p>
      </div>
      <div
        className="background-container"
        style={{
          backgroundImage: `linear-gradient(black, black), url("${process.env.PUBLIC_URL}/assets/periodic_table.PNG")`,
        }}
      ></div>
    </>
  );
}

export default AboutPage;
