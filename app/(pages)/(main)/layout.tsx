import Footer from "@common/components/layout/Footer/Footer";
import { BeatLoader } from "react-spinners";
import { Suspense } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-[100vh]">
            <BeatLoader color="#36d7b7" />
          </div>
        }
      >
        {children}
      </Suspense>
      <Footer />
    </div>
  );
}
