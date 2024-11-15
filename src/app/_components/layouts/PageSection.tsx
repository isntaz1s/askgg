import * as React from 'react';


export interface PageSectionProps extends React.HTMLAttributes<HTMLElement> { }

export const PageSection = (props: PageSectionProps) => {
  return (
    <section className={`${props.className}`}>
      {props.children}
    </section>
  )
}
