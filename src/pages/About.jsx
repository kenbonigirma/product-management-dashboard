function About() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">
        About Nexus Store
      </h1>

      <p className="text-gray-700 text-lg mb-6">
        Nexus Store is a modern online shopping platform that provides
        customers with a simple and convenient way to explore products.
        Our goal is to create a smooth and enjoyable shopping experience
        by connecting users with quality products through an easy-to-use
        digital marketplace.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3">
            Our Mission
          </h2>

          <p className="text-gray-700">
            Our mission is to provide customers with a reliable and
            user-friendly platform where they can discover products
            easily and enjoy a simple online shopping experience.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3">
            Our Vision
          </h2>

          <p className="text-gray-700">
            Our vision is to build a modern digital marketplace that
            focuses on accessibility, convenience, and customer
            satisfaction.
          </p>
        </div>
      </div>

      <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-3">
          Our Team
        </h2>

        <p className="text-gray-700">
          Nexus Store is developed by a team of React developers
          working together to build a responsive and maintainable
          product management dashboard using modern frontend
          technologies.
        </p>
      </div>
    </div>
  );
}

export default About;