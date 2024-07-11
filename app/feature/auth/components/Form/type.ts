export interface LoginFormState {
  email: string;
  password: string;
  [key: string]: string;
}

export interface RegisterFormState {
  email: string;
  password: string;
  nickname: string;
  [key: string]: string;
}
