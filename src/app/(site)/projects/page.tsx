export const metadata = {
  title: "Prosjekter",
};

const projects = [
  {
    name: "Alva",
    href: "https://app.getalva.ai/",
    description: "Bygget med Next.js, TypeScript, Tailwind CSS, Drizzle ORM og OpenAI-integrasjon",
  },
];

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <h2 className="text-2xl font-semibold">Prosjekter</h2>
      <ul className="mt-4 grid gap-4">
        {projects.map((project) => (
          <li key={project.name} className="rounded-2xl border p-4">
            <a className="font-medium underline" href={project.href} target="_blank" rel="noreferrer">
              {project.name}
            </a>
            <p className="text-sm text-neutral-500">{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
