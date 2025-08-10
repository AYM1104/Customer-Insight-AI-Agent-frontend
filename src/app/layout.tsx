import type { Metadata } from 'next';
import { Noto_Sans_JP } from "next/font/google";
import './globals.css';
import Providers from './Providers';

export const metadata: Metadata = {
  title: 'MUI + Next.js',
  description: '…',
};

// フォント読み込み
const notoSans = Noto_Sans_JP({
  weight: ["400", "700"], // 必要なウェイト
  subsets: ["latin"],
  variable: "--font-noto-sans", // CSS変数名
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${notoSans.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}