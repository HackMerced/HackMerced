export type FormProps = {
  formTitle: string;
  askCompany: boolean;
  formRequest: string;
}

export type FormState = {
  name: string;
  company?: string;
  email: string;
  message: string;
}
