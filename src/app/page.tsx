import WelcomeSection from "@/components/WelcomeSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <main className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Context7 MCP</h1>
          <h2 className="text-xl text-slate-600">Next.js Integration Demo</h2>
        </div>
        <WelcomeSection />
      </main>
    </div>
  );
}
