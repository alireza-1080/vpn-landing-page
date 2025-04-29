import React from 'react'
import features from '@/public/pngs/features.png'
import Image from 'next/image'

const FeaturesImage = () => {
  return (
    <div className="w-full flex justify-center items-center">
        <Image
          src={features}
          width={1000}
          height={1000}
          priority
          quality={100}
          alt="digitalWorld"
          className="max-w-96 w-full"
        />
      </div>
  )
}

export default FeaturesImage