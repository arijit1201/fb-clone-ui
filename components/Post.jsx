import Image from 'next/image'
import {FiThumbsUp} from 'react-icons/fi'
import {FaRegCommentAlt} from 'react-icons/fa'
import { RiShareForward2Line } from 'react-icons/ri'
const Post = () => {
  return (
    <div className='flex flex-col'>
        <div className='bg-white mt-6 rounded-md p-4'>
            <div className='flex items-center  space-x-2'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="" className='rounded-full w-10 h-10'/>
                <div>
                    <p className='font-medium'>Arijit</p>
                    {/* <p className='text-xs text-gray-500'>{new Date().toLocaleString()}</p> */}
                </div>
            </div>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis temporibus incidunt impedit eligendi neque blanditiis quasi est, dolore, accusamus quae reiciendis obcaecati a corrupti eum beatae cumque. Eligendi dolores repudiandae iste dolor blanditiis at, suscipit voluptas aspernatur. Dolor et veniam ad possimus. Aut fugit repellendus numquam dolorem ratione! Molestiae dolore veritatis deleniti tenetur aperiam cum eaque necessitatibus eligendi debitis minus, mollitia aspernatur cupiditate ullam!</p>
            {/* If there is any image https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg */}
            <div className='relative h-60 md:h-96 bg-white'>
                <Image src="https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg" layout="fill" objectFit='cover' />
            </div>
            {/*Footer */}
            <div className='flex items-center justify-center bg-white p-2'>
              <div className='flex items-center space-x-1 hover:bg-gray-200 hover:cursor-pointer p-2 flex-grow justify-center rounded-xl'>
                <FiThumbsUp className='h-4'/>
                <p className='text-xs sm:text-base'>Like</p>
              </div>
              <div className='flex items-center space-x-1 hover:bg-gray-200 hover:cursor-pointer p-2 flex-grow justify-center rounded-xl'>
                <FaRegCommentAlt className='h-4'/>
                <p className='text-xs sm:text-base'>Comment</p>
              </div>
              <div className='flex items-center space-x-1 hover:bg-gray-200 hover:cursor-pointer p-2 flex-grow justify-center rounded-xl'>
                <RiShareForward2Line className='h-4'/>
                <p className='text-xs sm:text-base'>Share</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Post