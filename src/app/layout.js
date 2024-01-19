import { Rubik_Dirt } from "next/font/google";
import "./globals.css";

const rubikDirt = Rubik_Dirt({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Binti Bhatt | Portfolio",
  description: "Portfolio website of Binti Bhatt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
