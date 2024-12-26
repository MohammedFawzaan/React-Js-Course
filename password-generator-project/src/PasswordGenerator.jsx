import { useCallback, useRef, useState } from "react";

const PasswordGenerator = () => {
    let [length, setLength] = useState(6);
    let [password, setPassword] = useState("");
    let [numbers, allowNumbers] = useState(false);
    let [characters, allowCharacters] = useState(false);

    // just to show a reference to an input field so that we could grab it anywhere in app even if they are multiple inputs ahead
    const passwordRef = useRef(null)

    // we are using useCallback() to prevent the fun to be recreated for every render unless its dependencies like len, char, nums changes
    let GeneratePassword = useCallback(() => {
        let password = '';
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        // allowing nums, chars when checkbox is ticked
        if (numbers) str += "0123456789";
        if (characters) str += "!@#$%^&*()_+-=[]{}|;:'.<>?/";
        // generating a password of __ length
        for (let i = 0; i < length; i++) {
            // generates a randomIndex from str which is appended in str later 
            const randomIndex = Math.floor(Math.random() * str.length);
            password += str.charAt(randomIndex);
        }
        setPassword(password);
    }, [characters, length, numbers]);

    // we are using useEffect() to handle side-effects such as calling the function when its dependencies like length, allownnums, allowchars changes 
    // useEffect(() => {
    //     GeneratePassword();
    // }, [length, allowNumbers, allowCharacters, GeneratePassword]);

    // copying the password to clipboard
    function copyToClipboard() {
        window.navigator.clipboard.writeText(password);
        passwordRef.current?.select()
        alert("Password Copied");
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-300 flex items-center justify-center">
            <div className="w-[36rem] max-w-full p-10 rounded-lg text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Password Generator</h1>
                <div> <input
                    type="text"
                    readOnly
                    value={password}
                    className="w-full p-2 mb-4 border-2 border-black-400 rounded focus:outline-none focus:border-blue-950 text-2xl"
                />
                    <button
                        onClick={copyToClipboard}
                        className="w-full mb-4 bg-blue-700 hover:bg-blue-950 text-white font-semibold py-2 rounded transition duration-300">
                        Copy Password
                    </button>
                </div>
                <div className="mb-4">
                    <input
                        id="range"
                        type="range"
                        min={6}
                        max={16}
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        className="w-full"
                        ref={passwordRef}
                    />
                    <label htmlFor="range" className="block mt-2">
                        Length: <span className="font-bold">{length}</span>
                    </label>
                </div>
                <div className="flex justify-between mb-4">
                    <div className="flex items-center">
                        <input
                            id="numcb"
                            type="checkbox"
                            onClick={() => allowNumbers((prevState) => !prevState)}
                            className="mr-2"
                        />
                        <label htmlFor="numcb" className="text-2xl">
                            Numbers
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            id="charcb"
                            type="checkbox"
                            onClick={() => allowCharacters((prevState) => !prevState)}
                            className="mr-2"
                        />
                        <label htmlFor="charcb" className="text-2xl">
                            Characters
                        </label>
                    </div>
                </div>
                <button onClick={GeneratePassword} className="w-full mb-4 bg-blue-700 hover:bg-blue-950 text-white font-semibold py-2 rounded transition duration-300">Generate-Password</button>
            </div>
        </div>
    );
};

export default PasswordGenerator;