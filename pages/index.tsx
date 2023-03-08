import { MainLayout } from "@/components/layouts";
import { NextPageWithLayout } from "@/models/common";
import useFetch from "@/components/hooks/useFetch";

const Home: NextPageWithLayout = () => {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/reviews"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-6xl font-semibold">Alex Smith</h2>
      <h4 className="text-xl text-[#aaa]">Frontend - Developer</h4>
      {data.data.map((review) => (
        <div key={review.id} className="review-card">
          <div className="rating">{review.attributes.rating}</div>
          <h2>{review.attributes.title}</h2>
          <small>Console list</small>
          <p>{review.attributes.body}</p>
        </div>
      ))}
    </div>
  );
};
Home.Layout = MainLayout;

export default Home;
