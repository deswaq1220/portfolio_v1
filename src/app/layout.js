import localFont from 'next/font/local';
import "./globals.css";

const pretendard = localFont({
  src: "/_fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-PretendardVariable"
});


export const metadata = {
  title: "변경원 포트폴리오",
  description: "변경원의 포트폴리오",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={pretendard.className}>
      <body
        className="antialiased relative cursor-none "
      >
        {children}
      </body>
    </html>
  );
}
