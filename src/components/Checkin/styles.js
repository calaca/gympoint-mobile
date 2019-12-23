import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  padding: 15px 20px;
  background: ${props => props.theme.white};
  border-radius: 4px;
  border: 1px solid ${props => props.theme.border};
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  color: ${props => props.theme.textDark};
  font-weight: bold;
  font-size: 14px;
`;

export const Time = styled.Text`
  color: ${props => props.theme.text};
  font-size: 14px;
  text-align: right;
`;
