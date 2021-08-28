import PropTypes from "prop-types";
import { Container, Title } from "./LessonContainer.styled";
export const LessonContainer = ({ title, paddings, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

LessonContainer.propTypes = {
  title: PropTypes.string,
  paddings: PropTypes.number,
  children: PropTypes.node,
};
