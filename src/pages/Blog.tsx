export default function Blog() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-5xl font-sans font-medium mb-6">Student Blog</h1>
      <p className="text-xl text-gray-400 max-w-3xl">Stories, experiences, and advice from Ethiopian students who have successfully navigated the international application process.</p>
      
      <div className="mt-12 glass-dark rounded-3xl p-12 text-center">
        <span className="material-symbols-outlined text-4xl mb-4 text-gray-500" style={{ fontFamily: 'Google Symbols' }}>construction</span>
        <h2 className="text-2xl font-medium mb-2">Coming Soon</h2>
        <p className="text-gray-400">First blog posts will be published shortly.</p>
      </div>
    </main>
  );
}
