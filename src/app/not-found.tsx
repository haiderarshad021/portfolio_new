export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
        <p className="text-muted text-xl mb-8">Page not found</p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
