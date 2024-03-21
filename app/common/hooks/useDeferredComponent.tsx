"use client";

import { ReactNode, useEffect, useState } from "react";

export default function UseDeferredComponent({
  children,
}: {
  children: ReactNode;
}) {
  const [isDeferred, setIsDeferred] = useState(false);

  useEffect(() => {
    // 200ms 지난 후 children Render
    const timeoutId = setTimeout(() => {
      setIsDeferred(true);
    }, 200);
    return () => clearTimeout(timeoutId);
  }, []);

  if (!isDeferred) {
    return null;
  }

  return children;
}
