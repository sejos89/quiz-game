import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./TeamPage.css";

function Team() {
  const { toggleTheme } = useContext(AppContext);

  const team = [
    {
      name: "Luisa M. Pastrana Martínez",
      rol: "Associate Researcher, PhD",
      email: "lpastrana@ugr.es",
      imageURL: `${process.env.PUBLIC_URL}/assets/team1.png`,
      // imageURL: "https://i.ibb.co/0Fg3Z5B/team2.png",
      coordinator: true,
    },
    {
      name: "Francisco J. Maldonado Hódar",
      rol: "Full Profesor",
      email: "fjmaldon@ugr.es",
      imageURL: "https://i.ibb.co/n36z4Zd/team3.png",
      coordinator: false,
    },
    {
      name: "Sergio Morales Torres",
      rol: "Associate Researcher, PhD",
      email: "semoto@ugr.es",
      imageURL: "https://i.ibb.co/T43K8b2/team4.jpg",
      coordinator: false,
    },
    {
      name: "Christian Alexis Sánchez Núñez",
      rol: "Professor",
      email: "cas@ugr.es",
      imageURL: "https://i.ibb.co/QvxxWxh/team1.png",
      coordinator: false,
    },
  ];
  return (
    <div className="team-container">
      {team.map((member) => (
        <div
          class="card"
          style={toggleTheme ? { backgroundColor: "#f3e3e1" } : {}}
        >
          <img src={member.imageURL} alt="Avatar" />
          <div class="container">
            <h5>
              <b style={toggleTheme ? { color: "black" } : {}}>{member.name}</b>
            </h5>
            <p className="rol" style={toggleTheme ? { color: "black" } : {}}>
              {member.rol}
            </p>
            <p style={toggleTheme ? { color: "black" } : {}}>{member.email}</p>
            {member.coordinator && (
              <p style={toggleTheme ? { color: "black" } : {}}>(Coordinator)</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Team;