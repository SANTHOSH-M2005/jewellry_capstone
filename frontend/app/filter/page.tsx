"use client" 
import React from 'react'

import {ImageInputStore} from '@/store/ImageInputStore';

export default function page() {

    const recommended = ImageInputStore((state) => state.recommended);

  return (
    <div>
        {recommended.map((item) => (
            <div key={item.id}>
                <h2>{item.name}</h2>
            </div>  
        ))}
    </div>
  )
}
