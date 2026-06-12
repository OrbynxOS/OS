import { SignInPage } from "@/components/ui/sign-in";

export function LoginPage() {
  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Sign In submitted:", data);
  };

  return (
    <div className="bg-background text-foreground">
      <SignInPage
        brandName="OrbynexOS"
        title={
          <>
            <span className="font-light tracking-tighter">Welcome to </span>
            <span className="font-semibold text-violet-500">OrbynexOS</span>
          </>
        }
        description="Sign in to access classes, assignments, grades, and school announcements — for students, teachers, and families."
        onSignIn={handleSignIn}
        onGoogleSignIn={() => console.log("Google sign-in")}
        onResetPassword={() => console.log("Reset password")}
        onCreateAccount={() => console.log("Create account")}
      />
    </div>
  );
}
