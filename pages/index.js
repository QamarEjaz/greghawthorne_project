export default function Home() {
  const tags = [
    "All",
    "Bedroom",
    "Livingroom",
    "Kitchen",
    "Bathroom",
    "Outdoor",
    "Dining room",
  ];

  return (
    <div className="container mx-auto pt-3 pb-8 lg:px-16 md:px-10 px-5">
      <h1 className="text-lg mb-5 text-black font-bold">
        Design inspiration and modern home ideas
      </h1>
      <div className="flex space-x-3 flex-wrap mb-5">
        {tags.map((e) => {
          return (
            <span className="text-sm text-black px-4 py-2 rounded-full font-bold whitespace-nowrap my-1 tag_bg">
              {e}
            </span>
          );
        })}
      </div>
      <section class="overflow-hidden text-gray-700">
        <div class="flex flex-wrap -m-1 md:-m-2">
          <div class="flex flex-wrap md:w-1/2">
            <div class="md:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
              />
            </div>
            <div class="md:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
              />
            </div>
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              />
            </div>
          </div>
          <div class="flex flex-wrap md:w-1/2">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
              />
            </div>
            <div class="md:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
              />
            </div>
            <div class="md:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
