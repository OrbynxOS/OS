import { useState } from "react";
import { SignInPage } from "@/components/ui/sign-in";
import { validateCredentials } from "@/lib/auth";

interface LoginPageProps {
  onLoginSuccess: (username: string) => void;
}

export function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const [error, setError] = useState("");

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = String(formData.get("username") ?? "");
    const password = String(formData.get("password") ?? "");

    if (validateCredentials(username, password)) {
      setError("");
      onLoginSuccess(username);
      return;
    }

    setError("Invalid username or password. Please try again.");
  };

  return (
    <div className="bg-background text-foreground">
      <SignInPage
        brandName="OrbynexOS"
        error={error}
        title={
          <>
            <span className="font-light tracking-tighter">Welcome to </span>
            <span className="font-semibold text-violet-500">OrbynexOS</span>
          </>
        }
        description="Sign in to access classes, assignments, grades, and school announcements — for students, teachers, and families."
        onSignIn={handleSignIn}
      />
    </div>
  );
}
