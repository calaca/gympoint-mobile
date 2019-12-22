import styled from 'styled-components/native';

export const Container = styled.View.attrs({})`
  flex: 1;
  background: ${props =>
    props.loggedout ? props.theme.white : props.theme.background};
`;
