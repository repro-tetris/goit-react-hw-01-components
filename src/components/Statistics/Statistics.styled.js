import styled from "@emotion/styled";

export const StatisticsSection = styled.section`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 400px;
  background-color: white;
`;

export const StatisticTitle = styled.h2`
  display: ${(props) => (props.title ? "block" : "none")};
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  color: #888;
`;
export const StatisticList = styled.ul`
  display: flex;
`;
export const StatisticItem = styled.li`
  display: flex;
  width: 100px;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  background-color: #${(props) => props.bgColor};
`;
export const ItemLabel = styled.span`
  font-size: 14px;
`;
export const ItemPercentage = styled.span`
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: 700;
`;
