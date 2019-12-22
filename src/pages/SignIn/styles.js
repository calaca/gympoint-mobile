import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView.attrs({
  enabled: Platform === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  margin: 0 25px;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  height: 80px;
  width: 123px;
  margin-bottom: 20px;
`;

export const TInput = styled.TextInput`
  height: 45px;
  background: ${props => props.theme.white};
  border-radius: 4px;
  color: ${props => props.theme.textLight};
  border: 1px solid ${props => props.theme.border};
  padding: 0 20px;
  font-size: 16px;
  align-self: stretch;
  margin-bottom: 15px;
`;
