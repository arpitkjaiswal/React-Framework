import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  // Generate Password
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+-=[]{}|;:',.<>?/";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  // Copy Password
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    alert("Password copied!");
  }, [password]);

  // Generate password whenever options change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  return (
    <div className="w-full h-screen bg-gray-900 flex justify-center items-center">
      <div className="w-full max-w-md mx-auto shadow-lg rounded-xl px-6 py-5 bg-gray-800 text-orange-100">
        <h1 className="text-3xl font-bold text-center mb-5">
          Password Generator
        </h1>

        {/* Password Display */}
        <div className="flex shadow rounded-lg overflow-hidden mb-5">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 text-black"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4"
          >
            Copy
          </button>
        </div>

        {/* Controls */}
        <div className="flex flex-col gap-4">

          {/* Length */}
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer w-full"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <span>{length}</span>
          </div>

          {/* Numbers */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="numberInput"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Include Numbers</label>
          </div>

          {/* Characters */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="characterInput"
              checked={characterAllowed}
              onChange={() => setCharacterAllowed((prev) => !prev)}
            />
            <label htmlFor="characterInput">
              Include Special Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;