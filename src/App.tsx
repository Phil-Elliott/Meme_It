import Header from "./components/Header/Header";

function App() {
  return (
    <div className="dark:bg-black">
      <Header />
    </div>
  );
}

export default App;

/*

2) Make a basic ui
  - https://www.nytimes.com/games/wordle/index.html
  - Copy header
       - left menu button (leave out for now) - do a logo instead
          - could use to see previous memes or maybe user can scroll to see those but cant interact
          - subscribe for email of memes
       - title (The Daily Meme)
       - right buttons
          - question (displays info about site in modal)
          - dark mode bttn
  - Show image
    - show images on scroll based off of date
    - show image with top rated quotes
  - Add a meme
  - Also show ranking at bottom (add comments later)
  - User can update their meme

3) Add functionality
4) Test functionality (maybe write first)
5) Somehow connect to a database or build a simple one yourself (trpc and prism bb)

structure
- could use utils folder
- could use hooks folder


App
- I choose a dif picture for everyday
- Users can submit a meme to be added
- users can vote on best one
- users can comment on memes
- users can share memes
- users cannot vote on own meme
- users only get one vote a day
- users dont have to signin to vote (maybe i can use a jwt or something)
- users can ask to have meme sent to their email
- block out curse words


Possible names:
- TheDailyMeme


*/
