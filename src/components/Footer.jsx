export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-zinc-200 dark:border-zinc-800/60 text-center">
      <p className="text-xs text-zinc-400 font-mono">
        Amr Moujbani · Luxembourg · {new Date().getFullYear()}
      </p>
    </footer>
  )
}
