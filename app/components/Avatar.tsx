'use client';
import Image from 'next/image'
import React from 'react'

const Avatar = () => {
  return (
    <Image
    alt='Avatar'
    className='hidden md:block cursor-pointer rounded-full'
    height='30'
    width='30'
    src='/images/placeholder.png'
    />
  )
}

export default Avatar