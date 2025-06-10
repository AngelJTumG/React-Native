import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './navigation/MainNavigate';

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}

