import React, { useState } from 'react';
import { firebaseClient } from '../auth/firebaseClient';
import { withAuthToHomeServerSideProps } from '../auth/withAuthToHomeServerSideProps';

const messagesByFirebaseCodeError = {
  'auth/invalid-email': 'Ingrese un email válido',
  'auth/wrong-password': 'Usuario o contraseña incorrectos',
  'auth/too-many-requests': 'Su cuenta ha sido deshabilitada debido a los intentos de ingreso fallidos.',
  'auth/weak-password': 'Su password debe tener al menos 6 caracteres.'
};

function Register(_props: any) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState<string>('');
  const handleRegister = async () => {
    try {
      const response: firebaseClient.auth.UserCredential = await firebaseClient.auth().createUserWithEmailAndPassword(email, pass);
      console.log('response: ', response);
      window.location.href = '/';
    } catch (error) {
      console.log(error);
      setError(messagesByFirebaseCodeError[error.code] || 'Ha ocurrido un error. Intente luego.');
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-3">
        <div className="mb-5">
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
            Crea tu cuenta
          </h2>
        </div>
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="email-address" className="sr-only">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="relative block w-full px-3 py-2 mb-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Contraseña</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"
            />
          </div>
        </div>
        {error && <div className="flex items-center justify-between mb-4 text-sm text-red-700">
          <div className="flex items-center">
            {error}
          </div>
        </div>
        }
        <div>
          <button
            className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleRegister}
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </span>
          Crear cuenta
        </button>
        </div>
      </div>
    </div>

  );
};

export default Register;
export const getServerSideProps = withAuthToHomeServerSideProps();