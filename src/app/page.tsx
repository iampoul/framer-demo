import Logo from "@/app/components/Logo";
import Demo from "@/app/components/Demo";

const Home = () => {


    return (
        <main className="flex flex-col items-center p-24 place-items-start">
            <Logo />
            <div className="mt-20 border border-pink-400 p-10 w-1/2 rounded-md shadow-2xl shadow-pink-500/50">
                <Demo />
            </div>
        </main>
    )
}

export default Home
