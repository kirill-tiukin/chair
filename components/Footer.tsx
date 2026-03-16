export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border px-5 sm:px-8 py-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-faint text-center sm:text-left">
          © 2026 Kirill Tiukin — Vice Chair Candidate, Bath Finance Society
        </p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:tiukinwork@gmail.com"
            className="text-xs text-muted hover:text-accent transition-colors duration-200"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/kirill-tiukin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted hover:text-accent transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
