"use client";

import { Monitor } from "lucide-react";
import React, { ReactElement } from "react";

interface props {
  icon: ReactElement;
  title: string;
  bgImg: string;
}

export default function ItSolutionCard({ icon, title, bgImg }: props) {
  const iconWithClass = icon
    ? React.cloneElement(icon, {
        className: `${icon.props.className} h-full w-full text-primary`,
      })
    : "";

  return (
    <>
      <div className="solution-div relative mb-4 flex h-[150px] w-[250px] items-center justify-center lg:h-[250px] lg:w-[350px]">
        <div className="flex h-full w-1/3 items-center justify-center border-r-4 border-r-foreground/40 bg-background p-8">
          {iconWithClass ? (
            iconWithClass
          ) : (
            <Monitor className="h-full w-full text-primary" />
          )}
        </div>
        <div
          className="h-full w-2/3"
          style={{
            backgroundImage: `url(${bgImg ? bgImg : "/achievements/s-booster_small.jpg"})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="absolute left-[5%] top-[5%] h-[90%] w-[90%] border border-foreground/40 p-4"></div>
      </div>
      <div className="flex w-fit flex-col gap-4">
        <h2 className="text-xl font-semibold">
          {title ? title : "ITソリューション"}
        </h2>
        <div className="w-[100px] border-b border-foreground"></div>
      </div>
    </>
  );
}
