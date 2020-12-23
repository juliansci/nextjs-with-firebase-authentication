import type { AppProps } from 'next/app'
import { AuthProvider } from '../auth/authContext';
import 'tailwindcss/tailwind.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider >
  );
}

export default App;
