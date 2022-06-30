import styled from 'styled-components';

export const Table = styled.table`
  width: 50%;
  border: ${p => p.theme.borders.normal};
  border-radius: 4px;
  border-color: #947c7c;
  text-align: center;
  margin-bottom: 30px;
  box-shadow: ${p => p.theme.shadows.default};
  padding: 20px;

`;

export const Th = styled.th`
  text-align: center;
  color: #fff;
  background-color: #892df2;
  padding: 20px;
  border-color: #947c7c;
`;
