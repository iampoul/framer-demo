'use client'
import DemoInput from "@/app/components/DemoInput";
import DemoOutput from "@/app/components/DemoOutput";
import {useState} from "react";

const Demo = () => {
    const [prompt, setPrompt] = useState<string>('')
    const handleSubmit = (prompt: string) => {
        // Handle the submitted data here
        setPrompt(prompt);
    };

    return (
        <div>
            <DemoInput submit={handleSubmit} />
            <DemoOutput prompt={prompt ?? ''} />
        </div>
    )
}

export default Demo