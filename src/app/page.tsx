// app/page.tsx

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-pink-100 to-white dark:bg-black text-gray-900 dark:text-white flex flex-col items-center justify-center px-6 py-5">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Welcome to <span className="text-blue-600">Xtottel</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
          Ghana’s first telecom company born from the Volta Region — delivering fast, affordable, and locally built connectivity solutions for everyone.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="/get-sim"
            className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
          >
            Get a SIM
          </a>
          <a
            href="/about/company"
            className="inline-block px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </main>
  );
}
