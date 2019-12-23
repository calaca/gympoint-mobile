import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background: ${props => props.theme.white};
  padding: 20px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.border};
  justify-content: center;
  align-items: center;
  align-self: stretch;
  margin-bottom: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  margin-bottom: 16px;
`;

export const Left = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Status = styled.Text`
  color: ${props =>
    props.answered ? props.theme.success : props.theme.textLight};
  font-weight: bold;
  font-size: 14px;
  margin-left: 8px;
`;

export const Time = styled.Text`
  color: ${props => props.theme.text};
  font-size: 14px;
  text-align: right;
`;

export const Preview = styled.Text.attrs({
  numberOfLines: 3,
})`
  color: ${props => props.theme.text};
  font-size: 14px;
  align-self: stretch;
`;
