"use client";

import { AppProgressBar } from "next-nprogress-bar";

export default function ProgressBar({
  children,
}: {
  children: React.ReactNode;
}) {
  const color = "#FF9900";

  return (
    <>
      {children}
      <AppProgressBar
        height="6px"
        color={color}
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}
