import SideBar from "@/components/SideBar";
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
    <html lang="en">
      <body className="bg-gray-100 max-w-[1440px] m-auto">
        <SideBar />
        {children}
        </body>
    </html>
  );
}
