import {generateGradient, getMatchingBlogs} from "../shared/blogs-post.ts";
import {useState} from "react";


export default function BlogsPage() {
    const [query, setQuery] = useState("")
    const blogs = getMatchingBlogs(query)
    console.log(blogs);
    return (
        <section className="my-5 ">

            <div className="max-w-screen-lg mx-auto">
            <form className="my-5">

            <label htmlFor="query" className="block">Query</label>
            <input id="queyr" className="border border-black" onChange={(e) => setQuery(e.target.value)} value={query} />

            </form>
                <ul className="gap-5 flex justify-center flex-wrap">
                    {blogs.map(post => <li className="border border-gray-300 rounded w-80">
                        <div className="block w-full h-52" style={{background: generateGradient(post.id)}} />
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