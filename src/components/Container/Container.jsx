import PropTypes from "prop-types";
import { ContainerStyled, Title } from "./Container.styled";

export const Container = ({ title, children }) => {
  return (
    <ContainerStyled>
      <Title>{title}</Title>
      {children}
    </ContainerStyled>
  );
};

Container.propTypes = {
  title: PropTypes.string,
  paddings: PropTypes.number,
  children: PropTypes.node,
};
