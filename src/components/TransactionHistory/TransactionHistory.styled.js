import styled from "@emotion/styled";
export const Table = styled.table`
  border-radius: 5px;
  font-size: 12px;
  font-weight: normal;
  border: none;
  border-collapse: collapse;

  white-space: nowrap;
  background-color: white;

  td,
  th {
    text-align: center;
    padding: 8px;
  }
  td {
    border-right: 1px solid #f8f8f8;
    font-size: 12px;
  }
  thead th {
    color: #ffffff;
    background: #4fc3a1;
    text-transform: uppercase;
  }
  tr:nth-child(even) {
    background: #f8f8f8;
  }
`;
