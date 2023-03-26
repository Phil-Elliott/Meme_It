const CreateMeme = () => {
  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex items-center">
        <input
          className="w-full border-b-2 p-2 focus:outline-none focus:border-black dark:focus:border-white dark:bg-black dark:text-white"
          type="text"
          placeholder="Add a meme..."
        />
        <button className="text-lg ml-2 cursor-pointer bg-black text-white dark:bg-white dark:text-black py-1 px-2 rounded-sm border-2 border-black dark:border-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateMeme;

/*



*/
