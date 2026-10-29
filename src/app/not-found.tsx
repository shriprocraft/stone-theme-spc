import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="section">
      <Container>
        <div className="mx-auto max-w-[560px] text-center">
          <p className="label mb-5">404</p>
          <h1 className="display-2">This page doesn't exist.</h1>
          <p className="body-lg mt-5 text-grey">
            The link may be outdated, or the page may have moved. Try the
            Growth Engine or get in touch directly.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/" variant="primary">
              Back to Homepage
            </Button>
            <Button href="/growth-engine" variant="secondary">
              Explore Growth Engine
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
