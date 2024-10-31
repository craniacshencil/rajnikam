import "./App.css";

function App() {
  return (
    <div className="dark h-screen w-screen flex justify-center bg-background items-center">
      <main className="h-screen w-2/5 flex justify-center items-start flex-col gap-5">
        <h1 className="text-3xl text-primary">Raj Nikam</h1>
        <div>
          I'm a programmer from Thane, Maharashtra. I like chess, computers and
          stories.
        </div>
        <div>
          This will be my place to share my weekly coding adventures and some
          cool things I encounter. Mostly documenting for future "me" to
          reminisce how I was messing around. I have an important year coming up{" "}
          <em>(graduating next year)</em>, so would like this to be a medium to
          keep track of everything that'll get overwhelming.
        </div>
        <div>
          I appreciate details yet they are often what we forget over time. My
          writings are certainly not going to be the best, but you start
          somewhere.
        </div>
      </main>
    </div>
  );
}

export default App;
