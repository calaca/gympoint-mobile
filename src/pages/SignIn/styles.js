import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${props => props.theme.white};
  padding: 0 25px;
  justify-content: center;
  align-items: center;
`;
