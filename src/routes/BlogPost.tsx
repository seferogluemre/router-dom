import { load } from "cheerio";
import { useLoaderData } from "react-router-dom";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface LoaderParams {
    blogId: string
}

export async function loader({ params }: { params: { blogId: LoaderParams } }) {
    const { blogId } = params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
    const json = (await response.json()) as Post;
    const postNotFound = !json.id;

    if (postNotFound) {
        throw new Response("", {
            status: 404,
            statusText: "Blog Post Not Found "
        })
    }

    return { post: json }
}

// loader'dan bir promise dönüyor
type Loader = typeof loader
// Burda Deger döndürüyoruz fonksiyondan
type LoaderReturn = ReturnType<Loader>
// Burda ise fonksiyondan gelen datayı Awaitle bekledik
type AwaitedLoader = Awaited<LoaderReturn>


type LoaderData = Awaited<ReturnType<typeof loader>>

export default function BlogPage() {
    const { post } = useLoaderData() as LoaderData;


    return (
        <div>
            <h1>Blog  gönderilerimiz</h1>
            <div>{JSON.stringify(post)}</div>
        </div>
    )
}