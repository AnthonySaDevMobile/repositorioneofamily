import React from 'react';

export default function LoadingArticles() {
  return (
    <div className="w-full h-fit flex items-center md:absolute md:left-1/2 gap-3 md:justify-start justify-center mt-10 ">
      <p>Buscando Posts </p>
      <div className="flex">
        <div className="animate-pulse text-3xl mr-1" style={{ animationDelay: '0s' }}>.</div>
        <div className="animate-pulse text-3xl mr-1" style={{ animationDelay: '0.5s' }}>.</div>
        <div className="animate-pulse text-3xl mr-1" style={{ animationDelay: '1s' }}>.</div>
      </div>
    </div>
  );
}
