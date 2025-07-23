import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: '포켓몬 도감',
  description: 'Next.js 14 포켓몬 프로젝트',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="flex flex-col items-center min-h-screen bg-gray-50 text-gray-900">
        {/* 상단 네비게이션 바 */}
        <nav className="w-full max-w-screen-lg px-6 py-4 bg-white shadow-md">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            🏠 Home
          </Link>
        </nav>

        {/* 페이지 콘텐츠 */}
        <main className="w-full max-w-screen-lg flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}