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