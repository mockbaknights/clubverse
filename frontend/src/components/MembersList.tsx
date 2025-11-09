import { useEffect, useState } from "react";
import "../styles/layout.css";
import "../styles/components.css";

type Member = {
  name: string;
};


export default function MembersList() {
  const [members, setMembers] = useState<Member[]>([]);

  console.log("✅ Live folder confirmed");

  useEffect(() => {
    setMembers([
      { name: "Fred Flintstoneeeew" },
      { name: "Betty Flintstone" },
      { name: "Charlie Wildberry" },
      { name: "Wilma Stone" },
      { name: "Pebbles Rockwell" },
      { name: "Barney Rubble" },
      { name: "Dino Dino" },
      { name: "Bamm-Bamm" },
      { name: "Slate Quarry" },
      { name: "Rocky Topspin" }
    ]);
  }, []);

  return (
    <div className="page">
      <div className="container">
        <h2 className="welcome-title text-center">Members</h2>

        <div className="members-table-header">
          <div className="members-count">1–10 of 10,872</div>
          <input
            type="text"
            className="members-search"
            placeholder="Search members..."
            disabled
          />
        </div>

        <div className="card">
          <table className="members-table">
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={index}>
                  <td>
                    <a href="#">{member.name}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

