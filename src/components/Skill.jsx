import styles from "./Skill.module.scss";

const Skill = ({ icon, name }) => {
  return (
    <div className="flex">
      <img src={icon} alt="" />
      <p>{name}</p>
    </div>
  );
};

export default Skill;
