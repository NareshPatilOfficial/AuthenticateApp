import { StatusBar } from 'expo-status-bar';
import RootNavigationWrapper from './navigation/RootNavigationWrapper';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <RootNavigationWrapper />
    </>
  );
}