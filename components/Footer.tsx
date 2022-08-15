import Image from 'next/image'
import { FC } from 'react'
import { motion } from 'framer-motion'

const Footer: FC = () => {
  return (
    <footer className='w-full flex justify-center my-24'>
      <p className='text-sm text-gray-600 flex items-center'>
        Built by
        <motion.a
          href='https://hxrsh.in'
          target='_blank'
          rel='noreferrer'
          className='text-white flex items-center mx-[0px] bg-transparent hover:bg-gray-800 p-[6px] rounded-full transition-colors'
          whileTap={{ scale: 0.9 }}
        >
          <Image
            src='https://avatars.githubusercontent.com/u/69592270?v=4'
            alt='Picture of Harsh'
            className='rounded-full'
            height={20}
            width={20}
          />
          <span className='ml-1 font-medium'>Harsh</span>
        </motion.a>
        and
        <motion.a
          href='https://ibra.github.io'
          target='_blank'
          rel='noreferrer'
          className='text-white flex items-center mx-[0px] bg-transparent hover:bg-gray-800 p-[6px] rounded-full transition-colors'
          whileTap={{ scale: 0.9 }}
        >
          <Image
            src='https://avatars.githubusercontent.com/u/61324615?v=4'
            alt='Picture of Ibra'
            className='rounded-full'
            height={20}
            width={20}
          />
          <span className='ml-1 font-medium'>Ibra</span>
        </motion.a>
      </p>
    </footer>
  )
}

export default Footer
