import * as React from 'react';


export interface PageContainerProps extends React.HTMLAttributes<HTMLElement> { }

export const PageContainer = (props: PageContainerProps) => {
  return (
    <main className={`min-h-screen max-w-sm md:w-full ${props.className}`}>
      {props.children}
    </main>
  )
}
