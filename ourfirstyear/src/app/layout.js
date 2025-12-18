import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-0">
        {children}
      </body>
    </html>
  );
}
