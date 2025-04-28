import greenDB from '../db/green';
import { GreenLoginRequest, GreenLoginResponse } from '../types/green';

class GreenController {
  async login(credentials: GreenLoginRequest): Promise<GreenLoginResponse> {
    const { username, password } = credentials;

    const users = await greenDB.getUsers();
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      return {
        fullName: user.fullName,
        ticketNumber: user.ticketNumber
      };
    } else {
      throw new Error('No se pudo iniciar sesión. Verifique sus credenciales.');
    }
  }
}

export default GreenController;
