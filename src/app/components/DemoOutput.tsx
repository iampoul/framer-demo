import { faker } from '@faker-js/faker'
import Image from "next/image";

const DemoOutput = ({ prompt }: { prompt: string }) => {
    const getPeopleFromFakeApi = () => {
        faker.seed(123)

        return [...Array(10)].map(() => ({
            name: faker.person.fullName(),
            email: faker.internet.email(),
            phone: faker.phone.number(),
            image: faker.image.avatar(),
        }))
    }

    return (
        <div className="mt-10 flex gap-4 flex-col">
            {
                getPeopleFromFakeApi()
                    .filter((person) => {
                        if (prompt === '') {
                            return person
                        } else if (
                            person.name.toLowerCase().includes(prompt.toLowerCase())
                        ) {
                            return person
                        }
                    })
                    .map((person) => (
                        <div className="flex flex-row items-center justify-between" key={person.phone}>
                            <div className="flex flex-row items-center gap-2">
                                <Image
                                    src={person.image}
                                    className="rounded-full"
                                    width={36}
                                    height={36}
                                    alt="face"
                                />
                                <div className="flex flex-col ml-2">
                                    <span className="text-sm font-bold">{person.name}</span>
                                    <span className="text-sm text-gray-400">
                            {person.email}
                        </span>
                                </div>
                            </div>
                            <div className="flex flex-row items-center">
                            <span className="text-sm text-gray-400">
                                {person.phone}
                            </span>
                            </div>
                        </div>
                    ))
            }
        </div>
    )
}
export default DemoOutput