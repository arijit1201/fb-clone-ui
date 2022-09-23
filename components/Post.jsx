import Image from 'next/image'
import {FiThumbsUp} from 'react-icons/fi'
import {FaRegCommentAlt} from 'react-icons/fa'
import { RiShareForward2Line } from 'react-icons/ri'
const Post = ({post}) => {
  // console.log(post.image?.data);
  return (
    <div className='flex flex-col' key={post.id}>
        <div className='bg-white mt-6 rounded-md p-4'>
            <div className='flex items-center  space-x-2'>
                <img src={post.profilePic} alt="" className='rounded-full w-10 h-10'/>
                <div>
                    <p className='font-medium'>{post.name}</p>
                    <p className='text-xs text-gray-500'>{post.timeStamp}</p>
                </div>
            </div>
            <p className='py-4'>{post?.post}</p>
            {/* If there is any image https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg */}
            {post.image != null && (<div className='relative h-60 md:h-96 bg-white'>
                <Image src={`data:image/png;base64,${post.image.data}`} layout="fill" objectFit='scale-down' />
            </div>)}
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