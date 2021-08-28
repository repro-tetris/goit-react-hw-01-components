import styled from "@emotion/styled";

export const Friends = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Friend = styled.li`
  display: flex;
  background-color: white;
  width: 250px;
  margin: 5px;
  padding: 5px;
  align-items: center;
  box-shadow: 0 2px 5px gray;
  border-radius: 5px;
`;

export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => (props.isOnline ? "green" : "red")};
  margin-right: 10px;
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
`;
