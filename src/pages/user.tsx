import {getMatchingBlogs} from "../shared/blogs-post.ts";
import {useState} from "react";


export default function BlogsPage() {
    const [query, setQuery] = useState("")
    const blogs = getMatchingBlogs(query)
    console.log(blogs);
    return (
        <main>
            <input onChange={(e) => setQuery(e.target.value)} value={query} />
        </main>
    )
}