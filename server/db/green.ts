import { GreenLogin } from "../types/green";

class greenDB {
    async getUsers(): Promise<GreenLogin[]> {
      return [
        {
          username: "alejandra.m",
          password: "verde123",
          fullName: "Alejandra Morales",
          ticketNumber: "00123"
        },
        {
          username: "david.p",
          password: "bosque456",
          fullName: "David Pérez",
          ticketNumber: "00124"
        },
        {
          username: "lucia.r",
          password: "eco789",
          fullName: "Lucía Ramírez",
          ticketNumber: "00125"
        }
      ];
    }
  }
  
  export default new greenDB();