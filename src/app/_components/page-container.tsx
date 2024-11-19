import * as React from 'react'

/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface PageContainerProps extends React.HTMLAttributes<HTMLElement> { }

export function PageContainer(props: PageContainerProps) {
  return (
    <main {...props}>
      {props.children}
    </main>
  )
}
