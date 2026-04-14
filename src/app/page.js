import Banner from "@/Components/Homepage/Banner";
import FriendsCard from "@/Components/Homepage/FriendsCard";
import { Suspense } from "react";
import { ThreeCircles } from "react-loader-spinner";


export default function Home() {
  return (
    <div>
      <Banner />
      <Suspense fallback={<div className="flex items-center justify-center my-15">
        <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      </div>}>
        <FriendsCard />
      </Suspense>
    </div>
  );
}
