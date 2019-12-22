import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './pages/SignIn';
import Checkins from './pages/Checkins';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    Checkins,
  })
);
