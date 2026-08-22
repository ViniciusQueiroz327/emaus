import { members } from "../../data/members";

import MemberCard from "./MemberCard";

import "./Members.css";

function Members() {
  return (
    <section className="members" id="members">
      <div className="members__container">
        <div className="members__header">
          <span className="members__subtitle">
            NOSSA FAMÍLIA
          </span>

          <h2 className="members__title">
            Quem faz parte dessa história
          </h2>
        </div>
        <div className="members__grid">
          {members.map((member) => (
            <MemberCard
              key={member.name}
              name={member.name}
              role={member.role}
              image={member.image}
              position={member.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Members;