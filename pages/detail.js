export default function Detail() {
  return (
    <div className="container mx-auto py-8 px-5">
      <div className="grid grid-cols-8">
        <div className="lg:col-span-5 col-span-8">
          <div class="w-full">
            <img
              alt="gallery"
              class="block object-cover object-center w-full h-full"
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
            />
          </div>
        </div>
        <div className="lg:col-span-3 col-span-8 detail_bg">
          <div className="md:p-10 p-5">
            <h1 className="md:text-2xl text-xl mb-2 text-black font-bold">
              Dream in pastels this spring
            </h1>
            <p className="text-sm text-black font-semibold">
              Create cooler spring vibes with pastels and patterns
            </p>
            <button className="text-xs text-white bg-black font-bold px-6 py-3 rounded-full whitespace-nowrap my-10">
              Shop bedding
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
