import { faker } from '@faker-js/faker'

const PromptOutput = ({ prompt }: { prompt: string }) => {
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
        <div className="mt-10">
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
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row items-center">
                                <img
                                    src={person.image}
                                    className="w-10 h-10 rounded-full"
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
export default PromptOutput