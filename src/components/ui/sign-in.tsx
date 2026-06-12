import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { AnimatedCharactersHero } from "./animated-characters-hero";

const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 48 48"
    aria-hidden="true"
  >
    <path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s12-5.373 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-2.641-.21-5.236-.611-7.743z"
    />
    <path
      fill="#FF3D00"
      d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.022 35.026 44 30.038 44 24c0-2.641-.21-5.236-.611-7.743z"
    />
  </svg>
);

interface SignInPageProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  brandName?: string;
  showAnimatedHero?: boolean;
  onSignIn?: (event: React.FormEvent<HTMLFormElement>) => void;
  onGoogleSignIn?: () => void;
  onResetPassword?: () => void;
  onCreateAccount?: () => void;
}

const GlassInputWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-2xl border border-border bg-foreground/5 backdrop-blur-sm transition-colors focus-within:border-violet-400/70 focus-within:bg-violet-500/10">
    {children}
  </div>
);

export const SignInPage: React.FC<SignInPageProps> = ({
  title = (
    <span className="font-light tracking-tighter text-foreground">Welcome</span>
  ),
  description = "Access your account and continue your journey with us",
  brandName = "OrbynexOS",
  showAnimatedHero = true,
  onSignIn,
  onGoogleSignIn,
  onResetPassword,
  onCreateAccount,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  return (
    <div className="flex h-[100dvh] w-[100dvw] flex-col font-geist md:flex-row">
      <section className="flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="flex flex-col gap-6">
            <h1 className="animate-element animate-delay-100 text-4xl leading-tight font-semibold md:text-5xl">
              {title}
            </h1>
            <p className="animate-element animate-delay-200 text-muted-foreground">
              {description}
            </p>

            <form className="space-y-5" onSubmit={onSignIn} noValidate>
              <div className="animate-element animate-delay-300">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-muted-foreground"
                >
                  Email Address
                </label>
                <GlassInputWrapper>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsTyping(true)}
                    onBlur={() => setIsTyping(false)}
                    placeholder="Enter your school email"
                    className="w-full rounded-2xl bg-transparent p-4 text-sm focus:outline-none"
                  />
                </GlassInputWrapper>
              </div>

              <div className="animate-element animate-delay-400">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-muted-foreground"
                >
                  Password
                </label>
                <GlassInputWrapper>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full rounded-2xl bg-transparent p-4 pr-12 text-sm focus:outline-none"
                    />
                    <button
                      type="button"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                      ) : (
                        <Eye className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                      )}
                    </button>
                  </div>
                </GlassInputWrapper>
              </div>

              <div className="animate-element animate-delay-500 flex items-center justify-between text-sm">
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    className="custom-checkbox"
                  />
                  <span className="text-foreground/90">Keep me signed in</span>
                </label>
                <button
                  type="button"
                  onClick={onResetPassword}
                  className="text-violet-400 transition-colors hover:underline"
                >
                  Reset password
                </button>
              </div>

              <button
                type="submit"
                className="animate-element animate-delay-600 w-full rounded-2xl bg-primary py-4 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Sign In
              </button>
            </form>

            <div className="animate-element animate-delay-700 relative flex items-center justify-center">
              <span className="w-full border-t border-border"></span>
              <span className="absolute bg-background px-4 text-sm text-muted-foreground">
                Or continue with
              </span>
            </div>

            <button
              type="button"
              onClick={onGoogleSignIn}
              className="animate-element animate-delay-800 flex w-full items-center justify-center gap-3 rounded-2xl border border-border py-4 transition-colors hover:bg-secondary"
            >
              <GoogleIcon />
              Continue with Google
            </button>

            <p className="animate-element animate-delay-900 text-center text-sm text-muted-foreground">
              New to our platform?{" "}
              <button
                type="button"
                onClick={onCreateAccount}
                className="text-violet-400 transition-colors hover:underline"
              >
                Create Account
              </button>
            </p>
          </div>
        </div>
      </section>

      {showAnimatedHero && (
        <AnimatedCharactersHero
          password={password}
          showPassword={showPassword}
          isTyping={isTyping}
          brandName={brandName}
        />
      )}
    </div>
  );
};
