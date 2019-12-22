import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 45px;
  background: ${props => props.theme.primary};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

export const Text = styled.Text`
  color: ${props => props.theme.white};
  font-weight: bold;
  font-size: 16px;
`;
