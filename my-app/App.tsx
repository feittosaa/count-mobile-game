import TopBox from './components/TopBox';
import { AuthProvider } from './contexts/Auth';
import Routes from './routes/Routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
