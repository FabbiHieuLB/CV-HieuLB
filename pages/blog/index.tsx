import useFetch from "@/components/hooks/useFetch";
import { MainLayout } from "@/components/layouts";
import Link from "next/link";
import { useRouter } from "next/router";

export interface BlogPostProps {}

export default function BlogPost(props: BlogPostProps) {
  const router = useRouter();
  const { loading, error, data } = useFetch(`http://localhost:1337/api/blogs`);
  console.log("Blogggg", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <div className="blog">
      <div className="blog-title">
        <h2 className="text-4xl font-semibold text-[#eee] mb-10">Blog</h2>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {data.data.map((blog) => (
          <div
            key={blog.attributes.id}
            onClick={() => {
              router.push({
                pathname: `/blog/${blog.id}`,
              });
            }}
            className="bg-[#444] overflow-hidden"
          >
            <img
              src="./images/blog_post_1.jpg"
              alt=""
              className="hover:scale-110 hover:ease-in-out hover:duration-300 cursor-pointer"
            />
            <div className="px-4 py-4">
              <span className="text-xs font-light text-[#aaa]">
                {blog.attributes.createdAt}
              </span>
              <h3 className="text-lg font-semibold text-[#eee]">
                {blog.attributes.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

BlogPost.Layout = MainLayout;
