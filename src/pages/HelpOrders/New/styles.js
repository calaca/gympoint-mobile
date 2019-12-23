import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 20px 25px 0;
`;

export const TextArea = styled.TextInput`
  height: 300px;
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.border};
  border-radius: 4px;
  padding: 20px;
  align-self: stretch;
  color: ${props => props.theme.text};
  font-size: 16px;
  margin-bottom: 20px;
  justify-content: flex-start;
  align-items: flex-start;
`;
