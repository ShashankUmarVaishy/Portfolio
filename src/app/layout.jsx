import "../index.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050816",
};

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://shashankumarvaishy.dev"
  ),
  title: {
    default: "Shashank Umar Vaishy | Full Stack Developer & AI Engineer",
    template: "%s | Shashank Umar Vaishy",
  },
  description:
    "Explore the portfolio of Shashank Umar Vaishy — Full Stack Developer & AI/ML Engineer specializing in Next.js, React Native, Agentic AI, and scalable full stack applications.",
  keywords: [
    "Shashank Umar Vaishy",
    "Full Stack Developer",
    "AI Engineer",
    "Agentic AI",
    "Generative AI",
    "Next.js",
    "React",
    "React Native",
    "Node.js",
    "TypeScript",
    "Software Engineer Portfolio",
  ],
  authors: [
    {
      name: "Shashank Umar Vaishy",
      url: "https://github.com/ShashankUmarVaishy",
    },
  ],
  creator: "Shashank Umar Vaishy",
  publisher: "Shashank Umar Vaishy",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/ShashankUmarVaishy",
    title: "Shashank Umar Vaishy | Full Stack Developer & AI Engineer",
    description:
      "Explore the portfolio of Shashank Umar Vaishy — Full Stack Developer & AI/ML Engineer specializing in Next.js, React Native, and Agentic AI systems.",
    siteName: "Shashank Umar Vaishy Portfolio",
    images: [
      {
        url: "/herobg.png",
        width: 1200,
        height: 630,
        alt: "Shashank Umar Vaishy Portfolio Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shashank Umar Vaishy | Full Stack Developer & AI Engineer",
    description:
      "Explore the portfolio of Shashank Umar Vaishy — Full Stack Developer & AI/ML Engineer specializing in Next.js, React Native, and Agentic AI systems.",
    images: ["/herobg.png"],
    creator: "@ShashankUmarVaishy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://shashankumarvaishy.dev/#person",
      name: "Shashank Umar Vaishy",
      jobTitle: "Full Stack Developer & AI Engineer",
      description:
        "Full Stack Developer and AI/ML Engineer specializing in Next.js, React Native, Agentic AI, and scalable full stack web applications.",
      url: "https://shashankumarvaishy.dev",
      sameAs: [
        "https://github.com/ShashankUmarVaishy",
        "https://linkedin.com/in/ShashankUmarVaishy",
      ],
      knowsAbout: [
        "Full Stack Development",
        "Agentic AI",
        "Generative AI",
        "Next.js",
        "React",
        "React Native",
        "Node.js",
        "TypeScript",
        "Java",
        "Python",
        "REST APIs",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://shashankumarvaishy.dev/#website",
      url: "https://shashankumarvaishy.dev",
      name: "Shashank Umar Vaishy Portfolio",
      description:
        "Portfolio of Shashank Umar Vaishy showcasing engineering work, projects, and skills",
      publisher: {
        "@id": "https://shashankumarvaishy.dev/#person",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-slate-900 antialiased selection:bg-purple-100 selection:text-purple-900">
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
