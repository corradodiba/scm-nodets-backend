export interface LoginData {
  email: string;
  password: string;
}

export interface SignupData {
  name: string;
  surname: string;
  dateOfBirth: Date;
  fiscalCode: string;
  type: "Admin" | "Teacher" | "Student";
  email: string;
  password: string;
}
