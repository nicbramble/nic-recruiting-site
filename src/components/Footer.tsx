export function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-gray-500 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Nic Bramble</p>
          <div className="flex gap-4">
            <a href="mailto:you@email.com" className="hover:text-black">Email</a>
            <a href="https://www.instagram.com/SVUSummerJobs" className="hover:text-black">Instagram</a>
            <a href="https://SVUSummerJobs.com" className="hover:text-black">Website</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
