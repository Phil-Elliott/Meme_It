import Avatar from "../../shared/avatar/Avatar";

const CreateMeme = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="w-full px-4 sm:px-0 sm:w-1/2 flex items-center space-x-4">
        {/* <Avatar /> */}
        <input
          className="w-full border-b-2 p-2 focus:outline-none focus:border-black dark:focus:border-white dark:bg-black dark:text-white"
          type="text"
          placeholder="Add a meme..."
        />
        <button className="text-lg cursor-pointer bg-black text-white dark:bg-white dark:text-black py-1 px-2 rounded-sm border-2 border-black dark:border-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateMeme;

/*



*/
