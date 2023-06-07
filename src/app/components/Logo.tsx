import "server-only"
import {Monoton} from 'next/font/google'

const mainFont = Monoton({ subsets: ['latin'], weight: '400' })

const Logo = () => {
    return (
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
            <button className="-top-1 -right-2 absolute py-2 px-3 bg-pink-500 text-white text-xs font-semibold rounded-md shadow-lg shadow-pink-500/50 focus:outline-none">DEMO</button>
            <div className={`${mainFont.className}`}>
                <span className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r to-pink-500 from-blue-500">POUL</span>
                <span className="text-base self-end bg-clip-text text-transparent bg-gradient-to-b to-blue-400 from-pink-500">.DEV</span>
            </div>
        </div>
    )
}

export default Logo