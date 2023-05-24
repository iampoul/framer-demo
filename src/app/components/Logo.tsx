import {Monoton, Delicious_Handrawn, Gochi_Hand} from 'next/font/google'

const mainFont = Monoton({ subsets: ['latin'], weight: '400' })
const handFont = Gochi_Hand({ subsets: ['latin'], weight: '400' })

const Logo = () => {
    return (
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
                <span
                    className={`absolute top-0 -left-2 text-red-400 text-xl font-black ${handFont.className}`}
                >
                    DEMO
                </span>
            <div className={`${mainFont.className}`}>
                <span className="text-6xl font-bold">POUL</span>
                <span className="text-base self-end">.DEV</span>
            </div>
        </div>
    )
}

export default Logo