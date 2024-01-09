import { Providers } from "@/context/Provider";
import "./globals.css";

export const metadata = {
  title: "PetsPaw",
  description: "The PetsPaw - Cats as a Service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-100 dark:bg-black max-w-[1440px] m-auto">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
