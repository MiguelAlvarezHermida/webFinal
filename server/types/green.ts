export type GreenLogin = {
    username: string;
    password: string;
    fullName: string;
    ticketNumber : string 
};  

export type GreenLoginRequest = {
    username: string;
    password: string;
};

export type GreenLoginResponse = {
    fullName: string;
    ticketNumber : string
};