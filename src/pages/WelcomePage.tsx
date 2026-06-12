interface WelcomePageProps {
  username: string;
}

export function WelcomePage({ username }: WelcomePageProps) {
  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-background p-8 font-geist text-foreground">
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
        Welcome, {username}
      </h1>
    </main>
  );
}
