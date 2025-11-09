import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ to, children, variant }){
  const className = variant === 'primary' ? 'btn btn--primary' : 'btn';
  if(to){
    return <Link to={to} className={className}>{children}</Link>
  }
  return <button className={className}>{children}</button>
}
