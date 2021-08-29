import styled from "@emotion/styled";

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: black;
  }
`;

export const Title = styled.h2`
  text-align: center;
`;
