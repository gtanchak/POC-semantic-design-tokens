import {useState} from "react";

export default function UserPage() {


    const defaultValuesByTopic = {
        training: 'I would like some training',
        consulting: 'I have consulting needs',
        question: 'I have some questions',
    }

    const [topic, setTopic] = useState('training')



    return (
        <main>
            <form>
                <div>
                <label htmlFor="topic">Topic</label>
                <select
                    id="topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                >
                    <option value="training">Training</option>
                    <option value="consulting">Consulting</option>
                    <option value="question">Question</option>
                </select>
                </div>
                <div>
                <label htmlFor="subject" className="block">Email Subject</label>
                <input
                    className="border "
                    id="subject"
                    defaultValue={defaultValuesByTopic[topic]}
                />
                </div>
                <div>
                <label htmlFor="body">Email body</label>
                <textarea id="body"/>
                </div>
            </form>
        </main>
    )
}