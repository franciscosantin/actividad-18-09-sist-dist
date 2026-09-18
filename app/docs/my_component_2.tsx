import React from 'react';

const MyComponent2 = ({ children, titulo, loading }): {
  children: React.ReactNode;
  titulo: string
  loading?: boolean
} => {
  if (loading) {
    return (
      <>
        <h1>Cargando....</h1>
      </>
    );
  }
  return (
    <>
      <h1>{titulo}</h1>
      <div className="bg-red">
        {children}
      </div>
    </>
  );
}

export default MyComponent2;
