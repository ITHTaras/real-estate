import Image from "next/image";
import { reviews } from "../data";

function Reviews() {
  return (
    <section className="px-8 md:px-28 mt-28">
      <h2 className="text-3xl md:text-5xl font-medium">Our Testimonials</h2>
      {/* <Link href="/reviews" className="flex items-center">
          <h6 className="text-customgray mr-[10px]">See all</h6>
          <Image src={arrowRight} alt="" width={24} height={24} />
        </Link> */}
      <div className="grid lg:grid-cols-2 gap-x-[34px] gap-y-[50px] mt-8">
        {reviews.map((review) => {
          return (
            <div
              key={review.id}
              className="bg-white p-5 rounded-lg shadow-[0_24px_34px_0_rgba(80,79,89,0.14)]"
            >
              <div className="flex items-center">
                <Image src={review.img} width={80} height={80} alt="" />
                <div className="ml-4">
                  <h4 className="text-xl font-medium">{review.name}</h4>
                  <h4 className="text-sm text-customgray mt-3">
                    {review.work}
                  </h4>
                </div>
              </div>
              <p className="text-sm text-customgray mt-8">{review.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Reviews;
