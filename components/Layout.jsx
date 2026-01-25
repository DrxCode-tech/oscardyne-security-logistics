/*import "./globals.css";

export const metadata = {
  title: "Oscardyne Security",
  description: "Professional security services you can trust",
};
*/
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        {/* NAVBAR */}
        <header className="w-full bg-black/60 backdrop-blur-xl border-b border-white/10 fixed top-0 left-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* SITE NAME */}
            <h1 className="text-xl font-bold tracking-wide">
              Oscardyne <span className="text-blue-400">Security</span>
            </h1>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="pt-28">{children}</main>
      </body>
    </html>
  );
}
