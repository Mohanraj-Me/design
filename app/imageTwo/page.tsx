import styles from "./page.module.css";

const imageTwo = () => {
  return (
    <div className={`${styles.sliderContainer} d-flex justify-content-between`}>
      <div className={`${styles.carde} mx-2`}></div>
      <div className={`${styles.cardf} mx-2`}></div>
      <div className={`${styles.cardg} mx-2`}></div>
      <div className={`${styles.cardh} mx-2`}></div>
    </div>
  );
};

export default imageTwo;
