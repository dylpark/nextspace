// Incremental static regeneration example.
// export const revalidate = 300;

interface Post {
    title: string;
    slug: string;
    content: string;
}

interface Props {
    params: { slug: string };
}

// Incremental static regeneration example.
// export async function generateStaticParams() {
//     const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
//         (res) => res.json()
//     );

//     return posts.map((post) => ({
//         slug: post.slug,
//     }));
// }

export default async function BlogPostPage({ params }: Props) {
    // Regular server side rendering example.
    const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
        (res) => res.json()
    );

    const post = posts.find((post) => post.slug === params.slug)!;

    return (
        <>
            <h1 className='text-2xl'>{post.title}</h1>
            <p className='my-2'>{post.content}</p>
        </>
    );
}
