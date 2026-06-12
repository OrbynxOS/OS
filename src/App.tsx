import { useState } from "react";
import { LoginPage } from "@/pages/LoginPage";
import { WelcomePage } from "@/pages/WelcomePage";

function App() {
  const [username, setUsername] = useState<string | null>(null);

  if (username) {
    return <WelcomePage username={username} />;
  }

  return <LoginPage onLoginSuccess={setUsername} />;
}

export default App;
