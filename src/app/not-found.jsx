import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid">
      <h2>My 404-page</h2>
      <p>
        Something went wrong. Go back to the <Link href="/">homepage</Link>
      </p>
    </main>
  );
}
