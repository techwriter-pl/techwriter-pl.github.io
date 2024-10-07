import React from 'react';
import { contentBytesUrl } from '../Partners/Partners';

export default function ContentBytesAd() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        right: 0,
        transform: 'translateY(-50%) rotate(15deg)',
        backgroundColor: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      }}
    >
      <a
        href={contentBytesUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 8,
          fontFamily: 'Oswald, sans-serif',
        }}
      >
        <span>Sprawdź nową serię meetupów</span>
        <img
          src={require('../Partners/img/content-bytes.png').default}
          alt="Content Bytes - link do strony"
          style={{ maxWidth: 140 }}
        />
      </a>
    </div>
  );
}
