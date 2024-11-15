import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "ASKGG | Sign Up",
  description: "Platform buat lo yang mau ngirim pertanyaan untuk gue",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`antialiased`}>
      <body>
        {children}
      </body>
    </html>
  );
}
