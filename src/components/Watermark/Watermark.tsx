import React from 'react';
import './Watermark.css';

export default function Watermark() {
  return (
    <div className='watermark_container'>
        <h2>Made by @antoniotorres02</h2>
        <div className='watermark_links_containers'>
            <a href='https://github.com/antoniotorres02' target='_blank' rel='noreferrer'>
                <img src='src/components/Watermark/git.png' alt='github' className='watermark_link_icon' />
            </a>
            <a href='https://www.linkedin.com/in/antonio-javier-torres-bord%C3%B3n-644737252/' target='_blank' rel='noreferrer'>
                <img src='src/components/Watermark/linkedin.png' alt='linkedin' className='watermark_link_icon' />
            </a>
        </div>
    </div>
  )
}
