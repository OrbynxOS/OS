import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { AnimatedCharactersHero } from "./animated-characters-hero";

interface SignInPageProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  brandName?: string;
  showAnimatedHero?: boolean;
  error?: string;
  onSignIn?: (event: React.FormEvent<HTMLFormElement>) => void;
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
  error,
  onSignIn,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
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
                  htmlFor="username"
                  className="text-sm font-medium text-muted-foreground"
                >
                  Username
                </label>
                <GlassInputWrapper>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onFocus={() => setIsTyping(true)}
                    onBlur={() => setIsTyping(false)}
                    placeholder="Enter your username"
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

              {error && (
                <p
                  role="alert"
                  className="animate-element animate-delay-500 rounded-2xl border border-red-900/30 bg-red-950/20 p-3 text-sm text-red-400"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="animate-element animate-delay-600 w-full rounded-2xl bg-primary py-4 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Sign In
              </button>
            </form>
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
