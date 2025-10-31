export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t px-6 py-8 text-sm text-neutral-500">
      © {year} Jarle Halden
    </footer>
  );
}
