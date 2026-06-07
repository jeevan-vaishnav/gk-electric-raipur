export interface FormField {
  name: string;
  label: string;
  type?: "text" | "number" | "textarea";
  placeholder?: string;
}