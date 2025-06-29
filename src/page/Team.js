import React from "react";
import "./Team.css";
import { Mail, Linkedin, Github, Globe } from "lucide-react";
import Bill from "../assets/E20036.jpg";
import isc from "../assets/E20212.jpg";
import kochi from "../assets/E20350.jpg";
import magu from "../assets/E20377.jpg";
import Isuru from "../assets/isuru-nawinne.png";

export default function Team() {
  // Team member data with your images
  const teamMembers = [
    {
      id: 1,
      name: "Bandara K.G.R.I.",
      role: "E/20/036",
      image: Bill,
      bio: "",
      portfolio: "https://www.thecn.com/EB1155",
      github: "https://github.com/induwara23630",
      linkedin: "https://linkedin.com/in/bill",
      email: "e20036@eng.pdn.ac.lk",
    },
    {
      id: 2,
      name: "Kumarasinghe R.M.S.H.",
      role: "E/20/212",
      image: isc,
      bio: "",
      portfolio: "https://www.thecn.com/RK950",
      github: "https://github.com/sameera-87",
      linkedin: "https://linkedin.com/in/iscool",
      email: "e20212@eng.pdn.ac.lk",
    },
    {
      id: 3,
      name: "Sandamali J.P.D.N.",
      role: "E/20/350",
      image: kochi,
      bio: "",
      portfolio: "https://kochi.dev",
      github: "https://github.com/kochi",
      linkedin: "https://linkedin.com/in/kochi",
      email: "e20350@eng.pdn.ac.lk",
    },
    {
      id: 4,
      name: "Sidantha V.P.H.",
      role: "E/20/377",
      image: magu,
      bio: "",
      portfolio: "thecn.com/VS755",
      github: "https://github.com/sidantha0377",
      linkedin: "https://linkedin.com/in/magu",
      email: "e20377@eng.pdn.ac.lk",
    },
    {
      id: 5,
      name: "Dr. Isuru Nawinne",
      role: "Project Supervisor",
      image: Isuru,
    },
  ];

  return (
    <div className="team">
      <div className="team-container">
        {/* Header */}
        <div className="team-header">
          <div className="iname">Team</div>
          <p className="team-subtitle">Meet Our Team Members</p>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              {/* Profile Image */}
              <div className="team-image-container">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                />
                <div className="team-image-overlay" />
              </div>

              {/* Content */}
              <div className="team-content">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>

                {/* Social Links */}
                <div className="team-social-links">
                  {member.portfolio && (
                    <a
                      href={member.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link portfolio"
                      title="Portfolio"
                    >
                      <Globe />
                    </a>
                  )}

                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link github"
                      title="GitHub"
                    >
                      <Github />
                    </a>
                  )}

                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link linkedin"
                      title="LinkedIn"
                    >
                      <Linkedin />
                    </a>
                  )}

                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="social-link email"
                      title="Email"
                    >
                      <Mail />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
