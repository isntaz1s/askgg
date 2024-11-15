import * as React from 'react';


export interface PageSectionProps {
  className?: string;
  children: React.ReactNode;
}

export const PageSection = (props: PageSectionProps) => {
  return (
    <section className={`${props.className}`}>
      {props.children}
    </section>
  )
}
