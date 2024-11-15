import * as React from "react";

/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface PageSectionProps extends React.HTMLAttributes<HTMLElement> {}

export const PageSection = (props: PageSectionProps) => {
  return <section className={`${props.className}`}>{props.children}</section>;
};
