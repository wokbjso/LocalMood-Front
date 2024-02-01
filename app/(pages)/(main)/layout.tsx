import Footer from "@common/components/layout/Footer/Footer";
import { Suspense } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Suspense fallback={null}>{children}</Suspense>
      <Footer />
    </div>
  );
}
