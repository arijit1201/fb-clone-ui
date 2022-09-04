import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRef, useState } from "react";
import axios from "axios";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { IoMdPhotos } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
const CreatePost = () => {
  const FACEBOOK_CLONE_ENDPOINT = "";
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const hiddenFileInput = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        setImageToPost(reader.result);
      };
    }
  };
  const removeImage = () => setImageToPost(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    const formData = new FormData();
    formData.append("file", imageToPost);
    formData.append("post", inputRef.current.value);
    formData.append("name", session?.user.name);
    formData.append("email", session?.user.email);
    formData.append("profilePic", session?.user.image);

    axios
      .post(FACEBOOK_CLONE_ENDPOINT, formDat, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        inputRef.current.value = "";
        removeImage();
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-white rounded-md shadow-md text-gray-500 p-2">
      <div className="flex p-4 space-x-2 items-center">
        <Image
          className="rounded-full cursor-pointer"
          src={session?.user?.image}
          height={40}
          width={40}
        />
        <form className="flex flex-1">
          <input
            type="text"
            className="h-12 focus:outline-none flex-grow rounded-full font-medium bg-gray-100 px-4"
            placeholder={`What's up, homie ${
              session?.user.name.split(" ")[0]
            } ?`}
            ref={inputRef}
          />
          <button hidden onClick={handleSubmit}></button>
        </form>
      </div>
      {imageToPost && (
        <div
          className="flex items-center px-4 py-2 space-x-4 filter hover:brightness-110 transition duration-150 cursor-pointer"
          onClick={removeImage}
        >
          <img src={imageToPost} className="h-10 object-contain" />
          <RiDeleteBin6Line className="h-8 hover:text-red-500" />
        </div>
      )}
      <div className="flex justify-evenly py-2">
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer">
          <HiOutlineVideoCamera size={20} className="text-red-500" />
          <p className="font-semibold text-gray-600">Live Video</p>
        </div>
        <div
          className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer"
          onClick={handleClick}
        >
          <IoMdPhotos size={20} className="text-green-500" />
          <p className="font-semibold text-gray-600">Photo</p>
          <input
            type="file"
            hidden
            accept="image/*"
            ref={hiddenFileInput}
            onChange={addImageToPost}
          />
        </div>
        {/* basically we have a hidden input field, where we are simulating a mouse click using useref whenever the parent div is getting clicked */}
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer">
          <BsEmojiSmile size={20} className="text-yellow-500" />
          <p className="font-semibold text-gray-600">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
