export type FormProps = {
  formTitle: string;
  askCompany: boolean;
}

export type FormState = {
  name: string;
  company?: string;
  email: string;
  message: string;
}
