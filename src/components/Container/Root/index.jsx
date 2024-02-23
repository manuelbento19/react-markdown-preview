import React from 'react';
import "./style.scss";

export function Root({children}) {
  return (
    <div id='container'>
      {children}    
    </div>
  )
}
