import styles from "./Card.module.scss";

const Card = ({ title, skill, link }) => {
  return (
    <div className={styles.card}>
      <div className="mx-4 my-12">
        <div className="">
          <h4>{title}</h4>
        </div>
        <div className="mt-4">
          <h6>{skill}</h6>
          <button>
            <a href={link}>Click Me</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
