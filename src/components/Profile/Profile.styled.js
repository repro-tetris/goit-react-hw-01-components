import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
  width: 210px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 5px #777;
  border-radius: 5px;
  overflow: hidden;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px;
`;

export const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 18px;
  margin-top: 20px;
`;
export const Tag = styled.p`
  font-size: 14px;
  color: #555;
  margin-top: 10px;
`;
export const Location = styled.p`
  font-size: 14px;
  color: #555;
  margin-top: 10px;
`;

export const Stats = styled.ul`
  display: flex;
  background-color: #eee;

  li {
    width: 70px;
    border: 1px solid #ddd;
    padding: 10px;
    padding-bottom: 15px;
    padding-top: 15px;
  }
`;

export const Label = styled.span`
  display: block;
  text-align: center;
  font-size: 12px;
  color: #555;
`;
export const Quantity = styled.span`
  display: block;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  margin-top: 5px;
`;
