import { Link, useParams } from "react-router"
import { Layout } from "@/components/layout"
import { formatDate, getPost } from "@/lib/posts"

export function PostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPost(slug) : undefined

  if (!post) {
    return (
      <Layout>
        <p className="col-span-full pt-8 text-[14px] leading-5 text-zinc-500">
          Post not found.
        </p>
        <Link
          to="/"
          viewTransition
          className="col-span-full text-[12px] underline underline-offset-4"
        >
          back
        </Link>
      </Layout>
    )
  }

  return (
    <Layout>
      <p className="col-span-full pt-6 md:col-span-2 md:pt-10">
        <Link to="/" viewTransition className="label underline underline-offset-4">
          back
        </Link>
      </p>
      <time
        dateTime={post.date}
        className="col-span-4 pt-6 text-[12px] leading-5 tabular-nums text-zinc-500 md:col-span-2 md:pt-10"
      >
        {formatDate(post.date)}
      </time>
      <article className="col-span-4 pt-2 md:col-span-8 md:pt-10">
        <h1 className="text-[32px] leading-none tracking-tight md:text-[40px]">
          {post.title}
        </h1>
        <div className="prose-mdx mt-8">
          <post.Component />
        </div>
      </article>
    </Layout>
  )
}
