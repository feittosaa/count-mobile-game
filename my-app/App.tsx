import { AuthProvider } from './contexts/Auth';
import Routes from './routes/Routes';

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
