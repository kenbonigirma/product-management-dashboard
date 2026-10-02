import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 px-6 py-20 text-center text-white">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-100">
          About Us
        </p>

        <h1 className="text-4xl font-bold sm:text-5xl">
          About Nexus Store
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-purple-100">
          A simple and modern way to discover products you'll love.
        </p>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Welcome to Nexus Store
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
          Nexus Store is a modern online shopping platform that provides
          customers with a simple and convenient way to explore products.
          Our goal is to create a smooth and enjoyable shopping experience
          by connecting users with quality products through an easy-to-use
          digital marketplace.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-8 md:grid-cols-2">
        <div className="rounded-2xl border border-purple-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl">
            🎯
          </div>

          <h2 className="text-2xl font-bold text-gray-900">
            Our Mission
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Our mission is to provide customers with a reliable and
            user-friendly platform where they can discover products easily
            and enjoy a simple online shopping experience.
          </p>
        </div>

        <div className="rounded-2xl border border-purple-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl">
            🚀
          </div>

          <h2 className="text-2xl font-bold text-gray-900">
            Our Vision
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Our vision is to build a modern digital marketplace that
            focuses on accessibility, convenience, and customer
            satisfaction.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-2xl border border-purple-100 bg-white p-8 shadow-sm">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl">
            👥
          </div>

          <h2 className="text-2xl font-bold text-gray-900">
            Our Team
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            Nexus Store is developed by a team of React developers
            working together to build a responsive and maintainable
            product management dashboard using modern frontend
            technologies.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 px-6 py-6 text-center text-sm text-gray-400">
        <p>© 2026 Nexus Store. All rights reserved.</p>
      </footer>
    </div>
  );
}