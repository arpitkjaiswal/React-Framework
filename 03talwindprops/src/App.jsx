import Card from "./components/card.jsx";

function App() {
 let myObj= {
  channelName: "Codevolution",
  channelDesc: "Codevolution is a YouTube channel that provides high-quality tutorials on web development, programming, and software engineering. The channel covers a wide range of topics, including React, JavaScript, Node.js, and more. With clear explanations and practical examples, Codevolution helps developers of all skill levels enhance their coding skills and stay up-to-date with the latest technologies."
 }
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-6">
      <h1 className="bg-green-400 text-black px-6 py-3 rounded-xl text-3xl font-bold">
        Tailwind is Working 🚀
      </h1>

      <Card 
        channelName={myObj.channelName}
        channelDesc={myObj.channelDesc}
        someMyObj={myObj}
      />

    </div>
  );
}

export default App;