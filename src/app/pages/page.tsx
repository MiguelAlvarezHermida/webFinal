import React from 'react';
import { useUser } from '../UserContext/UserContext'; 

const SuccessPage: React.FC = () => {
  const { user } = useUser(); 

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-green-200">
        <p className="text-xl">No se pudo encontrar la información del usuario.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-200">
      <h1 className="text-3xl font-bold">Bienvenido, {user.fullName}!</h1>
      <p className="text-lg">Tu número de ticket es: {user.ticketNumber}</p>
    </div>
  );
};

export default SuccessPage;

  