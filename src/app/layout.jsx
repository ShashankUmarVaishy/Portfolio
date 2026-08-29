import "../index.css";

export const metadata = {
  title: "Shashank | Portfolio",
  description: "Personal portfolio showcasing engineering work, projects, and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="bg-white text-slate-900 antialiased selection:bg-purple-100 selection:text-purple-900">
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
