import React from "react";
import "./TeamPage.css";

function Team() {
  const team = [
    {
      name: "Luisa M. Pastrana Martínez",
      rol: "Associate Researcher, PhD",
      email: "lpastrana@ugr.es",
      imageURL: `${process.env.PUBLIC_URL}/assets/team2.png`,
      coordinator: true,
    },
    {
      name: "Francisco J. Maldonado Hódar",
      rol: "Full Profesor",
      email: "fjmaldon@ugr.es",
      imageURL: `${process.env.PUBLIC_URL}/assets/team3.png`,
      coordinator: false,
    },
    {
      name: "Sergio Morales Torres",
      rol: "Associate Researcher, PhD",
      email: "semoto@ugr.es",
      imageURL: `${process.env.PUBLIC_URL}/assets/team4.jpg`,
      coordinator: false,
    },
    {
      name: "Christian Alexis Sánchez Núñez",
      rol: "Professor",
      email: "cas@ugr.es",
      imageURL: `${process.env.PUBLIC_URL}/assets/team1.png`,
      coordinator: false,
    },
  ];
  return (
    <div className="team-container">
      <div className="row row-cols-2 row-cols-sm-4 pt-2">
        {team.map((member) => (
          <div className="col mb-4">
            <div className="card h-100">
              <div className="card-image">
                <img src={member.imageURL} className="card-img-top" alt="..." />
              </div>
              <div className="card-body text-align-center">
                <p className="card-title text-center">{member.name}</p>
                <p className="card-text text-center">{member.rol}</p>
                {member.coordinator && (
                  <p className="card-text text-center">(Coordinator)</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
