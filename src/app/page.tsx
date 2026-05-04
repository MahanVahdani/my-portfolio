import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <Container>
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Hi, My name is Mahan 👋</h1>
          <p className="text-gray-500 mt-4">
            Frontend Developer (React / Next.js)
          </p>
        </div>
      </section>
    </Container>
  );
}
