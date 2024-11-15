import * as React from "react";

/* eslint-disable @typescript-eslint/no-empty-object-type*/
export interface PageContainerProps extends React.HTMLAttributes<HTMLElement> {}

export const PageContainer = (props: PageContainerProps) => {
  return (
    <main className={`min-h-screen max-w-sm md:w-full ${props.className}`}>
      {props.children}
    </main>
  );
};
