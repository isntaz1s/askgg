import * as React from 'react'

/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface PageContainerProps extends React.HTMLAttributes<HTMLElement> { }

export function PageSection(props: PageContainerProps) {
  return (
    <section {...props}>
      {props.children}
    </section>
  )
}
