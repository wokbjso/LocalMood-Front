import Script from "next/script";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-[100%] h-[100%]">{children}</div>;
}
