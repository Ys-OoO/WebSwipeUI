import React from 'react';

export default function VideoCard({ src, desc, createUser, time, ...props }) {
  return (
    <div>
      <img src={src} alt={desc} />
      <div>{desc}</div>
    </div>
  );
}
