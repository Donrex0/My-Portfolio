import { JetBrains_Mono } from "next/font/google";
import "./globals.css"; // Ensure this import is at the top
import Header from "../components/Header";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}