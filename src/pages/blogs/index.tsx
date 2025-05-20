// import Blog from "./Blog";
import Header from "../../components/Header";
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import { useState } from "react";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination";
import Footer from "../../components/Footer";

const generateBlogPosts = () => {
  const posts = [];

  for (let i = 0; i < blogPosts.length; i++) {
    const post = blogPosts[i];
    posts.push({
      id: post.id,
      author: post.author,
      date: post.date,
      title: post.title,
      description: post.description,
      tags: post.tags,
      image: post.image ?? "/default-image.png", // fallback if image is null
      featured: post.featured ?? false, // default featured to false if missing
    });
  }

  return posts;
};

const blogPosts = [
  {
    id: 1,
    author: "Emily Clark",
    date: "15 Jan 2025",
    title: "How to Maximize Your Small Space",
    description:
      "Explore fresh, innovative ways to make the most of small spaces with trending furniture and design solutions",
    tags: [
      { name: "Sustainability", color: "bg-[#f9f5ff] text-[#fe37a3]" },
      { name: "Design", color: "bg-[#eef3ff] text-[#686868]" },
      { name: "Interior", color: "bg-[#fdf1f9] text-[#fe37a3]" },
    ],
    image: "/image.png",
    featured: true,
  },
  {
    id: 2,
    author: "Emily Clark",
    date: "15 Jan 2025",
    title: "Top 2025 Furniture Trends",
    description:
      "A deep dive into what's shaping furniture design this year, from sustainable materials to modular styles.",
    tags: [
      { name: "Design", color: "bg-sky-50 text-[#016aa2]" },
      { name: "Interior", color: "bg-[#fdf1f9] text-[#fe37a3]" },
    ],
    image: "/image-2.png",
    featured: true,
  },
  {
    id: 3,
    author: "Emily Clark",
    date: "15 Jan 2025",
    title: "Smart Furniture Innovations",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    tags: [
      { name: "Design", color: "bg-[#ebfdf2] text-[#027947]" },
      { name: "Interior", color: "bg-[#fdf1f9] text-[#fe37a3]" },
    ],
    image: "/image-1.png",
    featured: true,
  },
  {
    id: 4,
    author: "Emily Clark",
    date: "15 Jan 2025",
    title: "What to Expect in 2025",
    description:
      "Explore fresh, innovative ways to make the most of small spaces with trending furniture and design solutions. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    tags: [
      { name: "Sustainability", color: "bg-[#f9f5ff] text-[#fe37a3]" },
      { name: "Design", color: "bg-[#eef3ff] text-[#686868]" },
      { name: "Interior", color: "bg-[#fdf1f9] text-[#fe37a3]" },
    ],
    image: "/living-room.png",
    featured: true,
  },
  {
    id: 5,
    author: "Emily Clark",
    date: "15 Jan 2025",
    title: "Bill Walsh leadership lessons",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    tags: [
      { name: "Interior", color: "bg-[#f9f5ff] text-[#fe37a3]" },
      { name: "Furniture", color: "bg-[#f8f8fb] text-[#353e72]" },
    ],
    image: "/image-1.png",
    featured: true,
  },
  {
    id: 6,
    author: "Emily Clark",
    date: "15 Jan 2025",
    title: "5 Sofa for Modern Homes",
    description:
      "A curated list of the most popular and functional sofas for this year.",
    tags: [
      { name: "Furniture", color: "bg-[#eef3ff] text-[#686868]" },
      { name: "Budget", color: "bg-[#fff5ed] text-[#c3320a]" },
    ],
    image: "/image-2.png",
  },
  {
    id: 7,
    author: "Emily Clark",
    date: "15 Jan 2025",
    title: "Mixing Furniture Styles",
    description:
      "Combine different furniture styles to achieve a unique, cohesive look that's on-trend this year.",
    tags: [
      { name: "Interior", color: "bg-[#f9f5ff] text-[#fe37a3]" },
      { name: "Furniture", color: "bg-[#eef3ff] text-[#686868]" },
    ],
    image: null,
  },
  {
    id: 8,
    author: "Emily Clark",
    date: "15 Jan 2025",
    title: "The Future of Custom Furniture",
    description:
      "Explore the growing demand for bespoke furniture and what's trending in customization.",
    tags: [{ name: "Furniture", color: "bg-[#eef3ff] text-[#686868]" }],
    image: "/image-6.png",
  },
  {
    id: 9,
    author: "Emily Clark",
    date: "15 Jan 2025",
    title: "When to Replace Your Furniture",
    description:
      "Tips for recognizing when it's time to upgrade your home furniture.",
    tags: [
      { name: "Software Development", color: "bg-[#ebfdf2] text-[#027947]" },
      { name: "Interior", color: "bg-[#fdf1f9] text-[#fe37a3]" },
      { name: "Budget", color: "bg-[#fef1f2] text-[#c00f47]" },
    ],
    image: null,
  },
  {
    id: 10,
    author: "Emily Clark",
    date: "15 Jan 2025",
    title: "Podcast: Creating a better CX Community",
    description:
      "Starting a community doesn't need to be complicated, but how do you get started?",
    tags: [
      { name: "Minimalism", color: "bg-[#f9f5ff] text-[#fe37a3]" },
      { name: "Furniture", color: "bg-[#f8f8fb] text-[#353e72]" },
    ],
    image: null,
  },
];

const ITEMS_PER_PAGE = 6;
const TOTAL_POSTS = 30;
const allBlogPosts = generateBlogPosts();
const recentBlogPosts = allBlogPosts.slice(0, 10);

const BlogPage = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(TOTAL_POSTS / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPosts = allBlogPosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <div className="flex flex-col w-full bg-[#1e1e1e]">
      <Header />
      <header className="flex flex-col justify-center py-[30px] w-full bg-[#1e1e1e] items-center gap-[50px]">
        <div className="w-full max-w-[90%] px-4 md:px-1 flex items-start">
          <div className="w-full flex justify-center font-['Inter',Helvetica] font-bold text-[60px] text-white text-nowrap md:text-[210.8px] border-t border-b border-[#ffffff57] py-4">
            THE BLOG
          </div>
        </div>
      </header>
      <section className="flex flex-col w-full items-center bg-white">
        {/* Recent blog posts section */}
        <div className="flex flex-col items-center gap-16 py-[30px] w-full bg-[#1e1e1e]">
          <div className="flex flex-col w-full max-w-[90%] gap-8 px-4 md:px-8">
            <h2 className="text-[length:var(--display-xs-semibold-font-size)] leading-[var(--display-xs-semibold-line-height)] font-display-xs-semibold font-[number:var(--display-xs-semibold-font-weight)] text-white tracking-[var(--display-xs-semibold-letter-spacing)] [font-style:var(--display-xs-semibold-font-style)]">
              Recent blog posts
            </h2>

            <div className="flex flex-col md:flex-row items-start gap-8 w-full">
              {/* Featured post */}
              <Card className="flex flex-col flex-1 bg-transparent border-0">
                <div
                  className="relative w-full h-[200px] md:h-[240px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${recentBlogPosts[0].image})`,
                  }}
                />
                <CardContent className="flex flex-col items-start gap-6 p-0 pt-8">
                  <div className="flex flex-col gap-3 w-full">
                    <p className="font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-[#fe37a3] text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] [font-style:var(--text-sm-semibold-font-style)]">
                      {recentBlogPosts[0].author} – {recentBlogPosts[0].date}
                    </p>

                    <div className="flex items-start justify-between gap-4 w-full">
                      <h3 className="flex-1 text-[length:var(--display-xs-semibold-font-size)] leading-[var(--display-xs-semibold-line-height)] font-display-xs-semibold font-[number:var(--display-xs-semibold-font-weight)] text-white tracking-[var(--display-xs-semibold-letter-spacing)] [font-style:var(--display-xs-semibold-font-style)]">
                        {recentBlogPosts[0].title}
                      </h3>
                      <ArrowUpRightIcon className="w-6 h-6 text-white mt-1" />
                    </div>

                    <p className="font-text-md-normal font-[number:var(--text-md-normal-font-weight)] text-[#b7b7b7] text-[length:var(--text-md-normal-font-size)] tracking-[var(--text-md-normal-letter-spacing)] leading-[var(--text-md-normal-line-height)] [font-style:var(--text-md-normal-font-style)]">
                      {recentBlogPosts[0].description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-start gap-2 w-full">
                    {recentBlogPosts[0].tags.map((tag, index) => (
                      <Badge key={index} className={`${tag.color} rounded-2xl`}>
                        {tag.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Right column with two smaller posts */}
              <div className="flex flex-col justify-between flex-1 h-full gap-y-1">
                {[1, 2].map((index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row items-start gap-3"
                  >
                    <div
                      className={`relative w-full md:w-80 h-[200px] ${
                        recentBlogPosts[index].image ? "bg-cover bg-center" : ""
                      }`}
                      style={
                        recentBlogPosts[index].image
                          ? {
                              backgroundImage: `url(${recentBlogPosts[index].image})`,
                            }
                          : {}
                      }
                    />

                    <div className="flex flex-col flex-1 gap-6 h-full">
                      <div className="flex flex-col gap-3 w-full">
                        <p className="font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-[#fe37a3] text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] [font-style:var(--text-sm-semibold-font-style)]">
                          {recentBlogPosts[index].author} –{" "}
                          {recentBlogPosts[index].date}
                        </p>

                        <div className="flex flex-col gap-2">
                          <h3 className="text-[length:var(--text-lg-semibold-font-size)] leading-[var(--text-lg-semibold-line-height)] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-white tracking-[var(--text-lg-semibold-letter-spacing)] [font-style:var(--text-lg-semibold-font-style)]">
                            {recentBlogPosts[index].title}
                          </h3>
                          <p className="font-text-md-normal font-[number:var(--text-md-normal-font-weight)] text-[#b7b7b7] text-[length:var(--text-md-normal-font-size)] tracking-[var(--text-md-normal-letter-spacing)] leading-[var(--text-md-normal-line-height)] [font-style:var(--text-md-normal-font-style)]">
                            {recentBlogPosts[index].description}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-start gap-2">
                        {recentBlogPosts[index].tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            className={`${tag.color} rounded-2xl`}
                          >
                            {tag.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center gap-16 py-[30px] w-full bg-[#1e1e1e]">
              <div className="flex flex-col w-full gap-8">
                <div className="flex flex-col md:flex-row items-start justify-between gap-8 w-full">
                  <div className="flex flex-1 flex-col md:flex-row gap-8">
                    {/* <div className="flex-1 h-[246px] [background-image:url('../../public/image-1.png')] bg-cover bg-center" />  THIRD SECTION IMAGE */}
                    <img
                      src="../../public/image.png"
                      alt="furniture"
                      className="flex-1 w-screen h-[246px] object-cover"
                    />
                    <div className="flex flex-col flex-1 gap-6">
                      <div className="flex flex-col gap-3 w-full">
                        <p className="font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-[#fe37a3] text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] [font-style:var(--text-sm-semibold-font-style)]">
                          {blogPosts[3].author} – {blogPosts[3].date}
                        </p>

                        <div className="flex items-start justify-between gap-4 w-full">
                          <h3 className="flex-1 text-[length:var(--display-xs-semibold-font-size)] leading-[var(--display-xs-semibold-line-height)] font-display-xs-semibold font-[number:var(--display-xs-semibold-font-weight)] text-white tracking-[var(--display-xs-semibold-letter-spacing)] [font-style:var(--display-xs-semibold-font-style)]">
                            {blogPosts[3].title}
                          </h3>
                          <ArrowUpRightIcon className="w-6 h-6 text-white mt-1" />
                        </div>

                        <p className="font-text-md-normal font-[number:var(--text-md-normal-font-weight)] text-[#b7b7b7] text-[length:var(--text-md-normal-font-size)] tracking-[var(--text-md-normal-letter-spacing)] leading-[var(--text-md-normal-line-height)] [font-style:var(--text-md-normal-font-style)]">
                          {blogPosts[3].description}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-start gap-2 w-full">
                        {blogPosts[3].tags.map((tag, index) => (
                          <Badge
                            key={index}
                            className={`${tag.color} rounded-2xl`}
                          >
                            {tag.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All blog posts section */}
        <div className="flex flex-col items-center gap-16 py-[30px] w-full bg-[#1e1e1e]">
          <div className="flex flex-col w-full max-w-[90%] gap-[30px] px-4 md:px-8">
            <div className="flex flex-col w-full gap-8">
              <h2 className="text-[length:var(--display-xs-semibold-font-size)] leading-[var(--display-xs-semibold-line-height)] font-display-xs-semibold font-[number:var(--display-xs-semibold-font-weight)] text-white tracking-[var(--display-xs-semibold-letter-spacing)] [font-style:var(--display-xs-semibold-font-style)]">
                All blog posts
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {currentPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="flex flex-col bg-transparent border-0"
                  >
                    <div className="relative w-full h-60">
                      {post.image && (
                        <img
                          className="absolute w-full h-full object-cover"
                          alt="Blog post image"
                          src={post.image}
                        />
                      )}
                    </div>
                    <CardContent className="flex flex-col gap-6 p-0 pt-8">
                      <div className="flex flex-col gap-3 w-full">
                        <p className="font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-[#fe37a3] text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] [font-style:var(--text-sm-semibold-font-style)]">
                          {post.author} – {post.date}
                        </p>

                        <div className="flex items-start justify-between gap-4 w-full">
                          <h3 className="flex-1 text-[length:var(--display-xs-semibold-font-size)] leading-[var(--display-xs-semibold-line-height)] font-display-xs-semibold font-[number:var(--display-xs-semibold-font-weight)] text-white tracking-[var(--display-xs-semibold-letter-spacing)] [font-style:var(--display-xs-semibold-font-style)]">
                            {post.title}
                          </h3>
                          <ArrowUpRightIcon className="w-6 h-6 text-white mt-1" />
                        </div>

                        <p className="font-text-md-normal font-[number:var(--text-md-normal-font-weight)] text-[#b7b7b7] text-[length:var(--text-md-normal-font-size)] tracking-[var(--text-md-normal-letter-spacing)] leading-[var(--text-md-normal-line-height)] [font-style:var(--text-md-normal-font-style)]">
                          {post.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-start gap-2">
                        {post.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            className={`${tag.color} rounded-2xl`}
                          >
                            {tag.name}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 pt-5 border-t border-[#eaecf0] w-full">
              <PaginationPrevious
                onClick={() =>
                  currentPage > 1 && handlePageChange(currentPage - 1)
                }
                className={`flex items-center gap-2 text-white order-2 md:order-1 ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <ArrowLeftIcon className="h-5 w-5" />
                Previous
              </PaginationPrevious>

              <Pagination className="order-1 md:order-2 overflow-x-auto">
                <PaginationContent className="flex-nowrap">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => handlePageChange(page)}
                          className={`w-10 h-10 rounded-lg ${
                            currentPage === page
                              ? "bg-[#fc460030] text-[#fe37a3]"
                              : "text-white"
                          }`}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    )
                  )}
                </PaginationContent>
              </Pagination>

              <PaginationNext
                onClick={() =>
                  currentPage < totalPages && handlePageChange(currentPage + 1)
                }
                className={`flex items-center gap-2 text-white order-3 ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                Next
                <ArrowRightIcon className="h-5 w-5" />
              </PaginationNext>
            </div>
          </div>
        </div>
        <Footer />
      </section>{" "}
    </div>
  );
};

export default BlogPage;
