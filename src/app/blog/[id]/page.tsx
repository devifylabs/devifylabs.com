import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

type BlogPost = {
  title: string;
  date: string;
  excerpt: string;
};

const posts: Record<string, BlogPost> = {
  "1": {
    title: "How Brand Strategy Impacts Business Growth",
    date: "July 2025",
    excerpt:
      "A strong brand strategy builds trust, sharpens positioning, and improves conversion outcomes across channels.",
  },
  "2": {
    title: "The Rise of Micro-Influencers in Digital Campaigns",
    date: "June 2025",
    excerpt:
      "Micro-influencers deliver niche audience trust and often outperform broad campaigns on engagement efficiency.",
  },
  "3": {
    title: "Why Your Brand Needs a Visual Identity",
    date: "May 2025",
    excerpt:
      "A cohesive visual identity improves recognition, message clarity, and long-term customer recall.",
  },
};

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = posts[id];

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="pt-24 bg-white">
          <section className="max-w-[900px] mx-auto px-6 py-24">
            <h1 className="text-4xl font-medium text-[#0A0A0A] mb-4">
              Post not found
            </h1>
            <Link
              href="/blog"
              className="text-[#fe5537] font-medium hover:underline"
            >
              Back to Blog
            </Link>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">
        <article className="max-w-[900px] mx-auto px-6 py-24">
          <p className="text-sm font-medium text-[#6B6B6B] mb-4">{post.date}</p>
          <h1 className="text-[36px] md:text-[52px] font-medium leading-[1.1] tracking-[-0.03em] text-[#0A0A0A] mb-6">
            {post.title}
          </h1>
          <p className="text-[17px] leading-[1.8] text-[#4A4A4A] max-w-[760px] mb-10">
            {post.excerpt}
          </p>
          <p className="text-[16px] leading-[1.8] text-[#4A4A4A] max-w-[760px]">
            This is a route-backed detail page so navigation now uses browser
            paths instead of hash fragments. You can replace this placeholder
            with your full article content anytime.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
