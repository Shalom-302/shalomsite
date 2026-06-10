import Link from "next/link";
import { Container } from "@/components/ui/blocks";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="mono-label">404</span>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">Page not found</h1>
      <div className="mt-6 flex gap-4 text-sm">
        <Link href="/fr" className="underline underline-offset-4">
          Accueil
        </Link>
        <Link href="/en" className="underline underline-offset-4">
          Home
        </Link>
      </div>
    </Container>
  );
}
