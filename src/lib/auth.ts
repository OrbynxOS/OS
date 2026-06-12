const VALID_USERNAME = "msaqib";
const VALID_PASSWORD = "thankstoraoof";

export function validateCredentials(username: string, password: string): boolean {
  return username === VALID_USERNAME && password === VALID_PASSWORD;
}
