import { useState } from 'react';

const useLogin = () => {
  const [user, setUser] = useState<{ fullName: string; ticketNumber: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (username: string, password: string) => {
    setLoading(true);
    setError(null); 
    try {
      const response = await fetch('http://localhost:5000/User', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Usuario o contraseña no válidos');
      }

      const data = await response.json();
      setUser({ fullName: data.fullName, ticketNumber: data.ticketNumber });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, user, loading, error };
};

export default useLogin;
