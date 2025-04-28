import React, { useState } from 'react';
import useLogin from './hooks/useLogin'; 
import Link from 'next/link'; 

export default function Login() {

  const { login, user, loading, error } = useLogin(); 
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password); 
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <h1 className="text-2xl text-black font-bold mb-4">Iniciar Sesión en GreenPark</h1>
      <form onSubmit={handleLogin} className="flex flex-col text-black gap-4 w-80">
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Contraseña especial"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="bg-green-500 text-white py-2 rounded hover:bg-green-600"
          disabled={loading} 
        >
          {loading ? "Cargando..." : "Entrar"}
        </button>
      </form>

      {user && (
        <div className="mt-4 p-4 border border-green-500 rounded">
          <Link href="/success" className="text-blue-500 hover:underline">
            Ir a la página de éxito
          </Link>
        </div>
      )}
    </div>
  );
};


