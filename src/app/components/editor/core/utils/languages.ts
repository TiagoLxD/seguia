export const languages = [
  { name: "Javascript", value: "javascript" },
  { name: "Python", value: "python" },
] satisfies Languages[]


type Languages = {
  name: string;
  value: string;
}
