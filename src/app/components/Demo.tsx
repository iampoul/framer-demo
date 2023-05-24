'use client'
import PromptInput from "@/app/components/PromptInput";
import PromptOutput from "@/app/components/PromptOutput";
import {useState} from "react";

const Prompt = () => {
    const [prompt, setPrompt] = useState<string>('')
    const handleSubmit = (prompt: string) => {
        // Handle the submitted data here
        setPrompt(prompt);
    };

    return (
        <div>
            <PromptInput submit={handleSubmit} />
            <PromptOutput prompt={prompt ?? ''} />
        </div>
    )
}

export default Prompt