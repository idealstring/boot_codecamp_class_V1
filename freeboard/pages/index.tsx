import IndexMainCarousel from "../src/component/commons/carousel/indexMain01/indexMainCarousel";
import IndexMainCarouselSwipe from "../src/component/commons/carousel/indexMain02";
import IndexContainer from "../src/component/unit/index/index.container";

export default function Home() {
  return (
    <main>
      {/* <IndexMainCarousel /> */}
      <IndexMainCarouselSwipe />
      <IndexContainer />
    </main>
  );
}
