import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered to you!</h2>
      <p>
        Choose your favorite meal fgrom our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-int-time
        and of course by experienced chefs
      </p>
    </section>
  );
};

export default MealsSummary;
