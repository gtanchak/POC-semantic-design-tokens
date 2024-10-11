import {generateGradient, getMatchingBlogs} from "../shared/blogs-post.ts";
import {useState} from "react";


export default function BlogsPage() {
    const [query, setQuery] = useState("")
    const words = query.split(" ")
    const blogs = getMatchingBlogs(query)

    const dogChecked = words.includes("dog")
    const catChecked = words.includes("cat")
    const caterpillarChecked = words.includes("caterpillar")

    function handleCheck(tag: string, checked: boolean) {
        const newWords = checked ? [...words, tag] : words.filter(w => w !== tag)
        setQuery(newWords.filter(Boolean).join(' ').trim())
    }

    console.log(blogs);
    return (
        <section className="my-5 ">

            <div className="max-w-screen-lg mx-auto">
                <form>
                    <div>
                        <label htmlFor="searchInput">Search:</label>
                        <input
                            id="searchInput"
                            name="query"
                            type="search"
                            value={query}
                            onChange={e => setQuery(e.currentTarget.value)}
                        />
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={dogChecked}
                                // 🐨 control the checked state of this checkbox by setting the checked prop
                                onChange={e => handleCheck('dog', e.currentTarget.checked)}
                            />{' '}
                            🐶 dog
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={catChecked}
                                // 🐨 control the checked state of this checkbox by setting the checked prop
                                onChange={e => handleCheck('cat', e.currentTarget.checked)}
                            />{' '}
                            🐱 cat
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={caterpillarChecked}
                                // 🐨 control the checked state of this checkbox by setting the checked prop
                                onChange={e =>
                                    handleCheck('caterpillar', e.currentTarget.checked)
                                }
                            />{' '}
                            🐛 caterpillar
                        </label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <ul className="gap-5 flex justify-center flex-wrap">
                    {blogs.map(post => <li className="border border-gray-300 rounded w-80">
                        <div className="block w-full h-52" style={{background: generateGradient(post.id)}}/>
                        <a className="p-2 flex  flex-col gap-2">
                            <h2>{post.title}</h2>
                            <p>{post.description}</p>
                        </a>
                    </li>)}
                </ul>
            </div>
        </section>
    )
}