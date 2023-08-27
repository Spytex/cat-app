import SideBar from "@/components/SideBar";
import "./globals.css";
import { CatProvider } from "@/context/CatContext";

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
    <CatProvider>
      <html lang="en">
        <body className="bg-gray-100 max-w-[1440px] m-auto flex justify-between">
          <SideBar />
          {children}
        </body>
      </html>
    </CatProvider>
  );
}
