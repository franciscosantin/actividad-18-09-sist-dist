import React from 'react';

const DocsLayout = ({
  children
}: {
    children: React.ReactNode
  }) => {
  return (
    <div className="flex flex-col column space-between">
      <div className="bg-cyan">
        <h1> Página de docs </h1>
      </div>
      <div className="flex flex-row border-1">
        {children}
      </div>
    </div>
  )
}

export default DocsLayout;
