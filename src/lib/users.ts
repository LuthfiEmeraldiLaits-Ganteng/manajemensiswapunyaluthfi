export interface UserData {
  name: string;
  email: string;
  password: string;
}

export const users: UserData[] = [
  {
    name: "Guest",
    email: "guest@example.com",
    password: "guest123",
  },
];
