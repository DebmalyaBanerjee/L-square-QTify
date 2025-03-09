import styles from "../Button/Button.module.css";

const Button = ({ text, eventHandler }) => {
  return (
    <div>
      <button
        className={styles.button}
        onClick={(e) =>
          eventHandler.event === "onClick" && eventHandler.handler(e)
        }
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
