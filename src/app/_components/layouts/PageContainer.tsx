import * as React from 'react';

export interface PageContainerProps{
  className?: string;
  children: React.ReactNode;
}

export const PageContainer = (props: PageContainerProps) => {
  return (
    <main className={`min-h-screen max-w-sm md:w-full ${props.className}`}>
      {props.children}
    </main>
  )
}
