import css from "./LessonContainer.module.css";
import PropTypes from "prop-types";
export const LessonContainer = ({ title, paddings, children }) => {
  return (
    <div style={{ paddingTop: paddings, paddingBottom: paddings }}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </div>
  );
};

LessonContainer.propTypes = {
  title: PropTypes.string,
  paddings: PropTypes.number,
  children: PropTypes.node,
};
