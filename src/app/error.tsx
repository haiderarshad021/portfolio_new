"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold gradient-text mb-4">Oops!</h1>
        <p className="text-muted text-xl mb-8">Something went wrong</p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
