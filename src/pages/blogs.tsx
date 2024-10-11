import {getMatchingBlogs} from "../shared/blogs-post.ts";
import {useState} from "react";


export default function BlogsPage() {
    const [query, setQuery] = useState("")
    const blogs = getMatchingBlogs(query)
    console.log(blogs);
    return (
        <section className="my-5 ">
            <label className="block">Query</label>
            <input className="border border-black" onChange={(e) => setQuery(e.target.value)} value={query} />
        </section>
    )
}