import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 20px 25px 0;
`;

export const Box = styled.View`
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.border};
  border-radius: 4px;
  padding: 20px;
  align-self: stretch;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.theme.textDark};
`;

export const Time = styled.Text`
  text-align: right;
  font-size: 14px;
  color: ${props => props.theme.text};
`;

export const Content = styled.Text`
  color: ${props => props.theme.text};
  font-size: 14px;
  margin-top: 16px;
`;

export const Answer = styled.View`
  margin-top: 20px;
`;
