"use client";

import { AppProgressBar } from "next-nprogress-bar";

export default function ProgressBar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <AppProgressBar
        height="6px"
        color="#FF9900"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}
