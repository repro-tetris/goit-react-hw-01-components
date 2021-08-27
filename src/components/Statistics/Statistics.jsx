import css from "./Statistics.module.css";
import { RandomColor } from "./../../utils";
export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title} style={{ display: title ? "block" : "none" }}>
        {title}
      </h2>

      <ul className={css.statList}>
        {stats.map((stat) => {
          return (
            <li
              key={stat.id}
              className={css.item}
              style={{ backgroundColor: "#" + RandomColor() }}
            >
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
