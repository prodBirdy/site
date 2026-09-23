import { Link, useParams } from "react-router"
import { Layout } from "@/components/layout"
import { formatDate, getPost } from "@/lib/posts"

export function PostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPost(slug) : undefined

  if (!post) {
    return (
      <Layout>
        <div className="flex flex-col gap-4 pt-8">
          <p className="text-[14px] leading-5 text-quiet">Post not found.</p>
          <Link
            to="/"
            viewTransition
            className="text-[12px] underline underline-offset-4"
          >
            back
          </Link>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="flex flex-col gap-6 pt-6 md:flex-row md:gap-10 md:pt-10">
        <div className="flex flex-col gap-3 md:w-40 md:shrink-0">
          <Link
            to="/"
            viewTransition
            className="label underline underline-offset-4"
          >
            back
          </Link>
          <time
            dateTime={post.date}
            className="text-[12px] leading-5 text-quiet tabular-nums"
          >
            {formatDate(post.date)}
          </time>
        </div>
        <article className="min-w-0 flex-1">
          <h1 className="text-[32px] leading-none tracking-tight text-ink md:text-[40px]">
            {post.title}
          </h1>
          <div className="prose-mdx mt-8">
            <post.Component />
          </div>
        </article>
      </div>
    </Layout>
  )
}
