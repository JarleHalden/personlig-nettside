import Link from "next/link";

export const metadata = {
  title: "Hjem",
};

export default function HomePage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight">Jarle Halden</h1>
      <p className="mt-3 text-neutral-600">Student • Utvikler • Håndball. Bygger ting med Node og TypeScript.</p>
      <div className="mt-6 flex gap-3">
        <a href="/cv.pdf" className="rounded-lg bg-black px-4 py-2 text-white">
          Last ned CV
        </a>
        <Link href="/projects" className="rounded-lg border px-4 py-2">
          Prosjekter
        </Link>
      </div>
    </section>
  );
}
