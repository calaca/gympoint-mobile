import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  align-self: stretch;
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.border};
`;

export const Logo = styled.Image`
  width: 116px;
  height: 18px;
  margin-bottom: 13px;
`;
