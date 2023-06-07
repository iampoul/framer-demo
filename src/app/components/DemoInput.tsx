'use client'
import {FormEventHandler, useEffect, useState} from "react";
import {RocketLaunchIcon} from "@heroicons/react/24/outline";

interface PromptInputProps {
    submit: (prompt: string) => void;
}

const DemoInput = ({ submit }: PromptInputProps)=> {
    const [prompt, setPrompt] = useState<string>('')

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        submit(prompt);
    };

    // submit form 2 seconds after user stops typing
    useEffect(() => {
        const timeout = setTimeout(() => {
            submit(prompt);
        }, 250);
        return () => clearTimeout(timeout);
    }, [prompt])

    return (
        <div className="relative text-gray-600">
            <form onSubmit={handleSubmit} className="flex flex-row">
            <input type="search" name="serch" placeholder="Search for someone to love..." className="bg-white w-full h-12 px-5 pr-12 rounded-full text-sm focus:outline-none" aria-autocomplete="none" value={prompt} onChange={(event) => setPrompt(event.target.value)} />
                <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                    <RocketLaunchIcon className="h-6 w-6 text-pink-500 animate-pulse hover:text-blue-400" />
                </button>
            </form>
        </div>
    )
}

export default DemoInput