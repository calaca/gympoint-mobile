import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.border};
  position: relative;
`;

export const BackButton = styled(RectButton)`
  background: transparent;
  justify-content: center;
  align-items: center;
  margin: 13px 0;
  position: absolute;
  bottom: 0;
  left: 20px;
  z-index: 5;
`;

export const Logo = styled.Image`
  width: 116px;
  height: 18px;
  margin: 13px 0;
`;
