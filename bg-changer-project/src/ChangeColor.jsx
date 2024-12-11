import { useState } from "react";

const ChangeColor = () => {
    const [color, setColor] = useState('grey');
    let styles = { backgroundColor: color };
    function changeToRed() {
        setColor('red')
    }
    function changeToGreen() {
        setColor('green');
    }
    function changeToBlue() {
        setColor('blue');
    }
    return (
        <>
            <div className='w-full h-screen flex justify-center items-center duration-200' style={styles}>
                <h3 className="text-center text-2xl font-bold " >Backgorund-Color-Changer</h3>
                <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
                    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
                        <button style={{backgroundColor: 'red'}} onClick={changeToRed} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>Red</button>
                        <button style={{backgroundColor: 'green'}} onClick={changeToGreen} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>Green</button>
                        <button style={{backgroundColor: 'blue'}} onClick={changeToBlue} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>Blue</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangeColor