import styled from 'styled-components';

export const Friends = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  :not(:last-child) {
    margin-bottom: 10px;
  }
  padding: 10px;
  background-color: white;
  border-radius: 4px;
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const IsOnline = styled.span`
  margin-right: 10px;
  display: block;
  width: 24px;
  height: 24px;
  background-color: green;
  border-radius: 50%;
`;

export const IsOfline = styled.span`
  margin-right: 10px;
  display: block;
  width: 24px;
  height: 24px;
  background-color: red;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.secondary};
`;