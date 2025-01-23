export function AnimatedHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h2 className={`text-3xl font-bold mb-6 animate-rainbow-text ${className}`}>{children}</h2>
}

