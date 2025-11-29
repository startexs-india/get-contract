export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Explore & Analyze Contracts Effortlessly
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Contract Explorer helps you search, review, and manage contracts with powerful tools and modern UI.
          </p>
          <a
            href="/explore"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg font-medium shadow-md transition"
          >
            Start Exploring
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Contract Explorer?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow rounded-2xl text-center">
              <h3 className="text-xl font-semibold mb-3">Advanced Search</h3>
              <p className="text-gray-600">Find contracts instantly using powerful filters and metadata search.</p>
            </div>

            <div className="bg-white p-8 shadow rounded-2xl text-center">
              <h3 className="text-xl font-semibold mb-3">Smart Insights</h3>
              <p className="text-gray-600">Analyze clauses, terms, and risks with AI-powered insights.</p>
            </div>

            <div className="bg-white p-8 shadow rounded-2xl text-center">
              <h3 className="text-xl font-semibold mb-3">Secure Storage</h3>
              <p className="text-gray-600">Store, version, and manage all your contracts safely in one place.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}