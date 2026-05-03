import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Invoice Late Payment Predictor",
  description: "Predict which invoices will be paid late. Analyze client payment history and get risk scores before it's too late."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="41906be0-3279-4596-841f-60ac10f2ceb9"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
