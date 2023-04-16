import { StatusBar } from 'expo-status-bar';
import RootNavigationWrapper from './navigation/RootNavigationWrapper';
import AuthContextProvider from './store/auth-context';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <RootNavigationWrapper />
      </AuthContextProvider>
    </>
  );
}