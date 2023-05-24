'use client'
import {FormEventHandler, useState} from "react";
import {RocketLaunchIcon} from "@heroicons/react/24/outline";

interface PromptInputProps {
    submit: (prompt: string) => void;
}

const PromptInput = ({ submit }: PromptInputProps)=> {
    const [prompt, setPrompt] = useState<string>('')

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        submit(prompt);
        setPrompt('');
    };

    return (
        <div className="relative text-gray-600">
            <form onSubmit={handleSubmit} className="flex flex-row">
            <input type="search" name="serch" placeholder="Write your prompt..." className="bg-white w-full h-12 px-5 pr-12 rounded-full text-sm focus:outline-none" aria-autocomplete="none" value={prompt} onChange={(event) => setPrompt(event.target.value)} />
                <button type="submit" className="absolute right-0 top-0 mt-3 mr-4"><RocketLaunchIcon className="h-6 w-6 text-gray-600 animate-pulse hover:text-amber-400" />
                </button>
            </form>
        </div>
    )
}

export default PromptInput