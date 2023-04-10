import Image from 'next/image';
const Banner = () => {
  return (
    <div className="carousel w-full ">
      <div id="slide1" className="carousel-item relative w-full ">
        <Image
          src="/bannerImage1.jpg"
          className="w-full"
          fill
          size="(max-width:768)50vw,
          (max-width:1200)50vw, 33vw"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="/bannerImage2.jpg"
          className="w-full"
         fill
         size="(max-width:768)50vw,
         (max-width:1200)50vw, 33vw"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="/bannerImage3.jpg"
          className="w-full"
          fill
          size="(max-width:768)50vw,
          (max-width:1200)50vw, 33vw"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://www.carbocleaner.com/wp-content/uploads/2019/03/carpet-cleaning-service-Denver-1000x600.jpg"
          className="w-full"
          width={500}
          height={280}
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
