export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-4xl flex-col gap-10 px-6 py-16">
      <header className="flex flex-col gap-3">
        <p className="text-sm text-zinc-400">
          Étudiant en informatique — DevOps / Dev Web / Admin Sys
        </p>
        <h1 className="text-4xl font-semibold tracking-tight">
          Salut, moi c&apos;est Jonas.
        </h1>
        <p className="max-w-2xl text-zinc-300">
          Je construis des projets orientés infra (Docker, CI/CD) et web
          (Next.js). Je cherche un stage/une alternance.
        </p>

        <div className="mt-2 flex flex-wrap gap-3">
          <a
            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200"
            href="#projects"
          >
            Voir mes projets
          </a>
          <a
            className="rounded-md border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-zinc-900"
            href="https://github.com/miradojonas"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="rounded-md border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-zinc-900"
            href="miradojonas11@gmail.com"
          >
            Me contacter
          </a>
        </div>
      </header>

      <section id="projects" className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Projets</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
            <h3 className="font-medium">CI/CD GitHub Actions + Docker</h3>
            <p className="mt-2 text-sm text-zinc-300">
              Build & push d&apos;images, lint/tests, déploiement.
            </p>
            <p className="mt-3 text-xs text-zinc-400">
              Stack: Docker, GitHub Actions
            </p>
          </article>

          <article className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
            <h3 className="font-medium">Portfolio Next.js</h3>
            <p className="mt-2 text-sm text-zinc-300">
              Site statique moderne, performant et maintenable.
            </p>
            <p className="mt-3 text-xs text-zinc-400">
              Stack: Next.js, TypeScript, Tailwind
            </p>
          </article>
        </div>
      </section>

      <footer className="pt-6 text-sm text-zinc-500">
        © {new Date().getFullYear()} Jonas — Fait avec Next.js.
      </footer>
    </main>
  );
}