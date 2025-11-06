import { useEffect, useState } from "react";
import axios from "axios";

interface Member {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  club_number: string;
  join_date: string;
  phone: string | null;
  is_active: boolean;
}

export default function MemberList() {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8000/members")
      .then(res => setMembers(res.data))
      .catch(err => console.error("Failed to fetch members:", err));
  }, []);

  return (
    <div>
      <h2>Wildberry Members</h2>
      <ul>
        {members.map(member => (
          <li key={member.id}>
            <strong>{member.first_name} {member.last_name}</strong> — {member.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
