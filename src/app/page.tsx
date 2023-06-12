import Logo from "@/app/components/Logo";
import Products from "@/app/components/Products";

const Home = () => {


    return (
        <main className="flex flex-col items-center p-24 place-items-start">
            <Logo />
            <Products />
        </main>
    )
}

export default Home
