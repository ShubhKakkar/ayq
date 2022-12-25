import Head from "next/head";
import React from "react";

// Components
import VideoBox from "../components/VideoBox";
import NewsLetter from "../components/NewsLetter";

// React-Icons
import { BsFillCheckCircleFill } from "react-icons/bs";

const Process = () => {
  const url =
    "https://videos.ctfassets.net/8roil6amnkw9/6cNiuzHfmR8Un66ZysPI29/1fa433bdb9dce12ca7eea7fb9a0ad003/process-sizzle.minv2.mp4";
  const urlEnd =
    "https://player.vimeo.com/external/465332121.sd.mp4?s=f2bac128a75c37e0d5809f72983152e0e52e1dcc&profile_id=164&oauth2_token_id=57447761";
  const videoData = {
    url: url,
    text1: "How it's made",
    // text2: "it's made",
    // shopNow: "true",
    // shopUrl: "/",
  };
  const videoDataEnd = {
    url: urlEnd,
    shopNow: true,
    subText: "Sell AYQ",
    subDescription:
      "Own a business? Want to carry AyQ? Join the AyQ Business partner program.",
    subButtonText1: "Hell Yes",
    subButton1Url: "/",
    subButton2Url: "/",
    overlay: true,
  };
  return (
    <div>
      <Head>
        <title>AyQ-Process</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="AyQ Beverages-Process" />
      </Head>
      <section className="h-screen">
        <VideoBox data={videoData} />
      </section>
      <section className="max-w-7xl mx-auto py-24">
        <p className="text-xl font-Roboto font-medium leading-loose mt-4 max-w-5xl mx-auto text-center pb-24">
          We believe it's possible to drink the highest quality of coffee (that
          actually tastes good) while paying our farmers fairly, using
          sustainable farming methods and protecting our wildlife.
        </p>
        <div className="flex gap-16">
          <div className="flex-1 py-12">
            <h2 className="uppercase text-4xl font-bold leading-snug mb-4">
              The Healthiest, Tastiest Coffee Possible
            </h2>
            <p className="text-lg font-Roboto font-medium leading-loose mt-8">
              Hi, I'm Dr. Charles Livingston, CEO and Co-founder of Lifeboost
              Coffee.
            </p>
            <p className="text-lg font-Roboto font-medium leading-loose mt-4">
              As a Chiropractic Physician with thousands of hours in nutritional
              research, I would always tell my patients... "Garbage in equals
              garbage out" which is an easy way to say, that the nutritional
              building blocks that you feed to your body, is what your body will
              assimilate into healthy cells. And lots of healthy cells become a
              healthier YOU.
            </p>
            <p className="text-lg font-Roboto font-medium leading-loose mt-4">
              Coffee is no different. Since it is something that 50% of the U.S.
              puts in their body on a daily basis and it's the #1 source of
              antioxidants in the U.S., it's Lifeboost's belief that you should
              put the cleanest source that you can find into your body. For that
              reason, we use a process called TrustPure which is our roadmap for
              finding you the healthiest, tastiest, stomach-friendly beans on
              the planet!
            </p>
            <p className="text-lg font-Roboto font-semibold leading-loose mt-4">
              Lifeboost beans are:
            </p>
            <div className="flex items-center my-4 font-Roboto">
              <BsFillCheckCircleFill className="text-orange-400 text-5xl basis-1/12 relative top-1" />
              <p className="text-lg font-Roboto font-md leading-loose mt-4 basis-11/12 ml-8">
                Single Origin to avoid cross contamination of molds, hand
                selected, high elevation and shade grown.
              </p>
            </div>
            <div className="flex items-center my-4 font-Roboto">
              <BsFillCheckCircleFill className="text-orange-400 text-5xl basis-1/12 relative top-1" />
              <p className="text-lg font-Roboto font-md leading-loose mt-4 basis-11/12 ml-8">
                Single Origin to avoid cross contamination of molds, hand
                selected, high elevation and shade grown.
              </p>
            </div>
            <div className="flex items-center my-4 font-Roboto">
              <BsFillCheckCircleFill className="text-orange-400 text-5xl basis-1/12 relative top-1" />
              <p className="text-lg font-Roboto font-md leading-loose mt-4 basis-11/12 ml-8">
                Single Origin to avoid cross contamination of molds, hand
                selected, high elevation and shade grown.
              </p>
            </div>
          </div>
          <div className="flex-1 min-h-screen w-full relative">
            <img
              src="https://cdn.shopify.com/s/files/1/0838/4525/files/Life_Boost_Lifestyle_6_22_21-8_1512x1512.jpg?v=1633481444"
              alt="process-1"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto pb-24">
        <h2 className="uppercase text-4xl font-bold leading-snug mb-12 text-center">
          From the jungles to your table
        </h2>
        <div className="flex flex-wrap h-[500px] pt-12">
          <div className="basis-1/2 text-center self-start">
            <svg
              className="max-h-full w-auto mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="120.033"
              height="120.986"
              viewBox="0 0 120.033 120.986"
            >
              <g
                id="Group_4242"
                data-name="Group 4242"
                transform="translate(16581.514 18042.465)"
              >
                <path
                  id="Path_892"
                  data-name="Path 892"
                  d="M-16580.48-17957.035s9.424-18.27,23.307-22.809"
                  transform="translate(0.02 32.26)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <g
                  id="Group_4230"
                  data-name="Group 4230"
                  transform="translate(-16532.412 -17967.668)"
                >
                  <g
                    id="Ellipse_140"
                    data-name="Ellipse 140"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="2"
                  >
                    <circle
                      cx="9.158"
                      cy="9.158"
                      r="9.158"
                      stroke="none"
                    ></circle>
                    <circle
                      cx="9.158"
                      cy="9.158"
                      r="8.158"
                      fill="none"
                    ></circle>
                  </g>
                  <path
                    id="Path_893"
                    data-name="Path 893"
                    d="M-16555.475-17981.234s2.055,3.2-1.428,5.906"
                    transform="translate(16568.754 17989.672)"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="2"
                  ></path>
                </g>
                <g
                  id="Group_4231"
                  data-name="Group 4231"
                  transform="translate(-16535.465 -17979.877)"
                >
                  <g
                    id="Ellipse_140-2"
                    data-name="Ellipse 140"
                    transform="translate(0)"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="2"
                  >
                    <circle
                      cx="9.158"
                      cy="9.158"
                      r="9.158"
                      stroke="none"
                    ></circle>
                    <circle
                      cx="9.158"
                      cy="9.158"
                      r="8.158"
                      fill="none"
                    ></circle>
                  </g>
                </g>
                <g
                  id="Group_4232"
                  data-name="Group 4232"
                  transform="translate(-16547.674 -17984.457)"
                >
                  <g
                    id="Ellipse_140-3"
                    data-name="Ellipse 140"
                    transform="translate(0 0)"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="2"
                  >
                    <circle
                      cx="9.158"
                      cy="9.158"
                      r="9.158"
                      stroke="none"
                    ></circle>
                    <circle
                      cx="9.158"
                      cy="9.158"
                      r="8.158"
                      fill="none"
                    ></circle>
                  </g>
                </g>
                <g
                  id="Group_4227"
                  data-name="Group 4227"
                  transform="translate(-16544.621 -17958.51)"
                >
                  <g
                    id="Ellipse_140-4"
                    data-name="Ellipse 140"
                    transform="translate(0)"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="2"
                  >
                    <circle
                      cx="11.447"
                      cy="11.447"
                      r="11.447"
                      stroke="none"
                    ></circle>
                    <circle
                      cx="11.447"
                      cy="11.447"
                      r="10.447"
                      fill="none"
                    ></circle>
                  </g>
                  <path
                    id="Path_893-2"
                    data-name="Path 893"
                    d="M-16555.152-17981.234s2.521,3.922-1.75,7.254"
                    transform="translate(16571.453 17991.596)"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="2"
                  ></path>
                </g>
                <g
                  id="Group_4228"
                  data-name="Group 4228"
                  transform="translate(-16559.885 -17973.773)"
                >
                  <g
                    id="Ellipse_140-5"
                    data-name="Ellipse 140"
                    transform="translate(0)"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="2"
                  >
                    <circle
                      cx="9.921"
                      cy="9.921"
                      r="9.921"
                      stroke="none"
                    ></circle>
                    <circle
                      cx="9.921"
                      cy="9.921"
                      r="8.921"
                      fill="none"
                    ></circle>
                  </g>
                </g>
                <g
                  id="Group_4229"
                  data-name="Group 4229"
                  transform="translate(-16544.621 -17975.299)"
                >
                  <g
                    id="Ellipse_140-6"
                    data-name="Ellipse 140"
                    transform="translate(0)"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="2"
                  >
                    <circle
                      cx="9.921"
                      cy="9.921"
                      r="9.921"
                      stroke="none"
                    ></circle>
                    <circle
                      cx="9.921"
                      cy="9.921"
                      r="8.921"
                      fill="none"
                    ></circle>
                  </g>
                  <path
                    id="Path_893-3"
                    data-name="Path 893"
                    d="M-16555.361-17981.234s2.221,3.453-1.541,6.387"
                    transform="translate(16569.717 17990.357)"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="2"
                  ></path>
                </g>
                <g
                  id="Group_4233"
                  data-name="Group 4233"
                  transform="translate(-16575.148 -17938.666)"
                >
                  <g
                    id="Ellipse_140-7"
                    data-name="Ellipse 140"
                    transform="translate(0 0)"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="2"
                  >
                    <circle
                      cx="7.632"
                      cy="7.632"
                      r="7.632"
                      stroke="none"
                    ></circle>
                    <circle
                      cx="7.632"
                      cy="7.632"
                      r="6.632"
                      fill="none"
                    ></circle>
                  </g>
                  <path
                    id="Path_893-4"
                    data-name="Path 893"
                    d="M-16555.707-17981.234a3.681,3.681,0,0,1-1.2,4.965"
                    transform="translate(16566.859 17988.324)"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="2"
                  ></path>
                </g>
                <g
                  id="Group_4226"
                  data-name="Group 4226"
                  transform="translate(-16556.832 -17958.51)"
                >
                  <g
                    id="Ellipse_140-8"
                    data-name="Ellipse 140"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="2"
                  >
                    <circle
                      cx="9.921"
                      cy="9.921"
                      r="9.921"
                      stroke="none"
                    ></circle>
                    <circle
                      cx="9.921"
                      cy="9.921"
                      r="8.921"
                      fill="none"
                    ></circle>
                  </g>
                  <path
                    id="Path_893-5"
                    data-name="Path 893"
                    d="M-16555.416-17981.234s2.141,3.332-1.486,6.16"
                    transform="translate(16569.262 17990.035)"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="2"
                  ></path>
                </g>
                <path
                  id="Path_894"
                  data-name="Path 894"
                  d="M-16568.27-17972.18s2.836-1.58,11.715.6,14.875,3.322,14.875,3.322-6.156,8.449-14.875,9.484-13.457-1.473-13.457-1.473"
                  transform="translate(5.527 35.997)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_895"
                  data-name="Path 895"
                  d="M-16567.621-17967.941a24.946,24.946,0,0,0,11.445-.4"
                  transform="translate(6.788 38.313)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_896"
                  data-name="Path 896"
                  d="M-16573.465-17956.672s6.432-2.77,6-18.684a58.955,58.955,0,0,0-8.281-27.9s2.121,7.41-.875,14.059a42.41,42.41,0,0,0-3.854,19.879C-16580.207-17962.344-16573.465-17956.672-16573.465-17956.672Z"
                  transform="translate(0 19.936)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_897"
                  data-name="Path 897"
                  d="M-16574.867-17989s-3.982,13.977-.768,24.223"
                  transform="translate(1.91 27.438)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_898"
                  data-name="Path 898"
                  d="M-16543-17974.584s7.887-7.578,18.23-7.082"
                  transform="translate(19.747 31.286)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_899"
                  data-name="Path 899"
                  d="M-16532.871-17976.324s6.559-12.1,26.852-8.561"
                  transform="translate(25.081 29.263)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_900"
                  data-name="Path 900"
                  d="M-16517.2-17980.082s4.105-6.375,19.836-8.785c0,0,2.336,18.633-15.16,26.992"
                  transform="translate(33.322 27.508)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_901"
                  data-name="Path 901"
                  d="M-16490.883-17973.562s.141,7.506-9.7,10.908a35.491,35.491,0,0,1-18.137,1.418s-10.82,2.441-18.328-1.418a19.888,19.888,0,0,1-9.637-10.164"
                  transform="translate(17.806 35.563)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_902"
                  data-name="Path 902"
                  d="M-16544-17971.3s34.133,3.293,51.561-10.8"
                  transform="translate(19.22 31.068)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_903"
                  data-name="Path 903"
                  d="M-16518.572-17982.1a15.4,15.4,0,0,1-8.076,9.918"
                  transform="translate(28.353 31.068)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_904"
                  data-name="Path 904"
                  d="M-16533.984-17974.809s4.465,7.711,19.484,7.711"
                  transform="translate(24.495 34.911)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_905"
                  data-name="Path 905"
                  d="M-16544.332-17974.809s3.4,6.074,14.52,7.992"
                  transform="translate(19.046 34.911)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_906"
                  data-name="Path 906"
                  d="M-16542.922-17992.285s2.666-16.8-4.975-25.27"
                  transform="translate(17.17 12.409)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_907"
                  data-name="Path 907"
                  d="M-16542.531-18006.457s1.938-17.5-15.562-24.311"
                  transform="translate(11.805 5.455)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_908"
                  data-name="Path 908"
                  d="M-16545.781-18020.066s.2-4.4-6.527-9.648-25.785-11.418-25.785-11.418-2.209,22.016,7.369,31.039"
                  transform="translate(1.16 0.002)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_909"
                  data-name="Path 909"
                  d="M-16574.7-18022.8s-6.17,12.848,11.787,22.148"
                  transform="translate(2.529 9.646)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_910"
                  data-name="Path 910"
                  d="M-16570.2-18010.105s-1.936,13.813,13.814,20.445"
                  transform="translate(5.396 16.333)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_911"
                  data-name="Path 911"
                  d="M-16571.957-18032.549s28.8,25.42,29.449,44.115"
                  transform="translate(4.509 4.517)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_912"
                  data-name="Path 912"
                  d="M-16556.041-18023.375a20.669,20.669,0,0,1,1.2,16.941"
                  transform="translate(12.883 9.343)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_913"
                  data-name="Path 913"
                  d="M-16568.531-18023.375s3.227,5.613,11.883,4.879"
                  transform="translate(6.309 9.343)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_914"
                  data-name="Path 914"
                  d="M-16569.557-18015.957s9.393,5.895,20.443,3.867"
                  transform="translate(5.769 13.25)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_915"
                  data-name="Path 915"
                  d="M-16560.5-18006.844l7.082,6.445"
                  transform="translate(10.536 18.046)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_916"
                  data-name="Path 916"
                  d="M-16539.574-17975.637s2.633-3.871,13.684-10.687,31.5-42.363,31.5-42.363"
                  transform="translate(21.55 6.549)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_917"
                  data-name="Path 917"
                  d="M-16524.059-17993.506s-5.891-29.836,15.2-40.52"
                  transform="translate(29.317 3.74)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_918"
                  data-name="Path 918"
                  d="M-16516.23-18019.445s-.852-13.742,15.379-21.641c0,0,13.285,25.355-5.687,38.246"
                  transform="translate(33.829 0.024)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_919"
                  data-name="Path 919"
                  d="M-16495.363-18020.752a12.717,12.717,0,0,1-5.8,13.377c-7.918,5.248-22.656,6.355-22.656,6.355"
                  transform="translate(29.843 10.726)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_920"
                  data-name="Path 920"
                  d="M-16505.127-18025.08s-4.424,6.811-9.947,8.01"
                  transform="translate(34.445 8.448)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_921"
                  data-name="Path 921"
                  d="M-16518.164-18022.457s-3.59,7.141-1.289,13.586"
                  transform="translate(31.735 9.829)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_922"
                  data-name="Path 922"
                  d="M-16510.752-18014.289a12.9,12.9,0,0,1-10.475,4.891"
                  transform="translate(31.207 14.128)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_923"
                  data-name="Path 923"
                  d="M-16531.057-17997.895s1.467-3.684,19.791-3.592,19.613.646,21.918-3.773c0,0,.1,7.551-8.932,11.879S-16519.168-17989.605-16531.057-17997.895Z"
                  transform="translate(26.033 18.88)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_924"
                  data-name="Path 924"
                  d="M-16513.807-17999.109s-10.205-3.131-16.652-1.01"
                  transform="translate(26.347 21.198)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_925"
                  data-name="Path 925"
                  d="M-16526.41-17981.738a46.294,46.294,0,0,0,1.926-24.176c-2.578-13.262-2.926-25.551,0-31.266,0,0-15.5,13.168-15.4,28.551S-16526.41-17981.738-16526.41-17981.738Z"
                  transform="translate(21.385 2.083)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_926"
                  data-name="Path 926"
                  d="M-16535.121-18021.25s6.078,20.352,5.527,30.852"
                  transform="translate(23.894 10.464)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
              </g>
            </svg>
            <p className="my-6 text-2xl font-Roboto font-semibold">
              Step 1: Sourcing
            </p>
            <p className="my-6 w-56 mx-auto text-lg">
              We source the top 2% of coffee in the world from small farms in or
              near nationally
            </p>
          </div>
          <div className="basis-1/2 text-center self-end">
            <svg
              className="max-h-full w-auto mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="132.061"
              height="121.85"
              viewBox="0 0 132.061 121.85"
            >
              <g
                id="Group_4235"
                data-name="Group 4235"
                transform="translate(16588 17741.998)"
              >
                <g
                  id="Rectangle_586"
                  data-name="Rectangle 586"
                  transform="translate(-16551.436 -17703.994)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                >
                  <rect width="77.701" height="30.471" stroke="none"></rect>
                  <rect
                    x="1"
                    y="1"
                    width="75.701"
                    height="28.471"
                    fill="none"
                  ></rect>
                </g>
                <path
                  id="Path_927"
                  data-name="Path 927"
                  d="M-16558.846-17716.6v9.082"
                  transform="translate(15.264 13.216)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_928"
                  data-name="Path 928"
                  d="M-16558.846-17716.6v9.082"
                  transform="translate(33.547 13.216)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_929"
                  data-name="Path 929"
                  d="M-16558.846-17716.6v9.082"
                  transform="translate(33.547 26.928)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_930"
                  data-name="Path 930"
                  d="M-16558.846-17716.6v9.082"
                  transform="translate(21.358 33.171)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_931"
                  data-name="Path 931"
                  d="M-16558.846-17716.6v9.082"
                  transform="translate(45.735 33.171)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_932"
                  data-name="Path 932"
                  d="M-16558.846-17716.6v9.082"
                  transform="translate(59.447 26.928)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_933"
                  data-name="Path 933"
                  d="M-16558.846-17716.6v8"
                  transform="translate(74.683 34.248)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_934"
                  data-name="Path 934"
                  d="M-16539.863-17712.52h3.738"
                  transform="translate(25.202 15.351)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_935"
                  data-name="Path 935"
                  d="M-16539.863-17712.52h4.178"
                  transform="translate(31.297 15.351)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_936"
                  data-name="Path 936"
                  d="M-16539.867-17712.52h21.854"
                  transform="translate(37.389 15.351)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_937"
                  data-name="Path 937"
                  d="M-16545.008-17741.84s-1.051,6.57-3.918,8.6-.834,4.777,1.557,7.646,2.748,6.451.717,8.484a22.865,22.865,0,0,0-3.705,6.1"
                  transform="translate(19.708)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_938"
                  data-name="Path 938"
                  d="M-16545.008-17741.84s-1.051,6.57-3.918,8.6-.834,4.777,1.557,7.646,2.748,6.451.717,8.484a22.865,22.865,0,0,0-3.705,6.1"
                  transform="translate(34.572)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_939"
                  data-name="Path 939"
                  d="M-16545.008-17741.84s-1.051,6.57-3.918,8.6-.834,4.777,1.557,7.646,2.748,6.451.717,8.484a22.865,22.865,0,0,0-3.705,6.1"
                  transform="translate(49.435)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_940"
                  data-name="Path 940"
                  d="M-16502.7-17642.7v-69.555h-6.93v69.555"
                  transform="translate(41.03 15.49)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_945"
                  data-name="Path 945"
                  d="M-16509.635-17642.7v-69.555h6.93v69.555"
                  transform="translate(-54.464 15.49)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_941"
                  data-name="Path 941"
                  d="M-16513.395-17707h5.258"
                  transform="translate(39.057 18.241)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_944"
                  data-name="Path 944"
                  d="M-16508.141-17707h-5.258"
                  transform="translate(-43.294 18.241)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_942"
                  data-name="Path 942"
                  d="M-16513.395-17707h5.258"
                  transform="translate(52.198 18.241)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_943"
                  data-name="Path 943"
                  d="M-16504.738-17707h-7.1v18.824h-4.541"
                  transform="translate(-59.837 18.241)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <g
                  id="Rectangle_587"
                  data-name="Rectangle 587"
                  transform="translate(-16588 -17675.047)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                >
                  <rect width="12.188" height="9.141" stroke="none"></rect>
                  <rect
                    x="1"
                    y="1"
                    width="10.188"
                    height="7.141"
                    fill="none"
                  ></rect>
                </g>
                <path
                  id="Path_946"
                  data-name="Path 946"
                  d="M-16549.086-17684.705v21.031s-.355,16.373,15.418,16.492,15.059-17.09,15.059-17.09v-13.619l-3.348,5.734-11.711-19.959-10.039,15.656Z"
                  transform="translate(20.374 26.034)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <g
                  id="Path_947"
                  data-name="Path 947"
                  transform="translate(-16519.826 -17644.193)"
                  fill="none"
                >
                  <path
                    d="M7.243-7.879S14.486,5.739,14.486,9.74A7.243,7.243,0,1,1,0,9.74C0,5.739,7.243-7.879,7.243-7.879Z"
                    stroke="none"
                  ></path>
                  <path
                    d="M 7.242853164672852 -3.484155654907227 C 6.688745498657227 -2.369012832641602 6.056976318359375 -1.068215370178223 5.428763389587402 0.2869138717651367 C 2.247262954711914 7.149783611297607 2.000002861022949 9.257133483886719 2.000002861022949 9.739543914794922 C 2.000002861022949 12.63046360015869 4.351933479309082 14.98239326477051 7.242853164672852 14.98239326477051 C 10.13377380371094 14.98239326477051 12.48570346832275 12.63046360015869 12.48570346832275 9.739543914794922 C 12.48570346832275 9.257133483886719 12.23844337463379 7.149783611297607 9.056942939758301 0.2869138717651367 C 8.428730010986328 -1.068215370178223 7.796960830688477 -2.369012832641602 7.242853164672852 -3.484155654907227 M 7.242853164672852 -7.87890625 C 7.242853164672852 -7.87890625 14.48570346832275 5.739423751831055 14.48570346832275 9.739543914794922 C 14.48570346832275 13.73965358734131 11.24297332763672 16.98239326477051 7.242853164672852 16.98239326477051 C 3.242733001708984 16.98239326477051 2.86102294921875e-06 13.73965358734131 2.86102294921875e-06 9.739543914794922 C 2.86102294921875e-06 5.739423751831055 7.242853164672852 -7.87890625 7.242853164672852 -7.87890625 Z"
                    stroke="none"
                    fill="#000"
                  ></path>
                </g>
                <path
                  id="Path_948"
                  data-name="Path 948"
                  d="M-16576.445-17662.623h40.246"
                  transform="translate(6.05 41.475)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_949"
                  data-name="Path 949"
                  d="M-16576.445-17662.623h40.246"
                  transform="translate(79.651 41.475)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
              </g>
            </svg>
            <p className="my-6 text-2xl font-Roboto font-semibold">
              Step 2: Roasting
            </p>
            <p className="my-6 w-56 mx-auto text-lg">
              Lifeboost coffee is roasted fresh in small batches when you order.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap h-[500px] pb-12">
          <div className="basis-1/2 text-center self-start">
            <svg
              className="max-h-full w-auto mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="115.748"
              height="112.994"
              viewBox="0 0 115.748 112.994"
            >
              <g
                id="Group_4243"
                data-name="Group 4243"
                transform="translate(-11.793 -29.768)"
              >
                <path
                  id="Path_950"
                  data-name="Path 950"
                  d="M-16497.2-17487.324a46.754,46.754,0,0,0-3.367-17.83c18.809-6.092,10-13.807,10-13.807-11.633-3.477-16.742,8.371-16.742,8.371a186.757,186.757,0,0,0-48.488,0s-10.6-16.039-18.859-7.012,12.172,13.262,12.172,13.262-7.133,30.422,0,77.715c0,0-16.855,4.416-11.344,14.172s17.379-7.35,17.379-7.35,19.02,2.686,46.781,0"
                  transform="translate(16589.424 17551.209)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_951"
                  data-name="Path 951"
                  d="M-16500.611-17485.17c-5.092,4.664-5.65,13.146-5.65,13.146s.426,24.027,0,31.377,7.35,12.434,7.35,12.434c5.938-4.244,6.711-9.467,6.711-9.467s-.141-26.148,0-34.344-5.937-13.854-5.937-13.854v-15.971h-34.479v14.561s-7.848,5.367-7.422,13.85v34.2s.988,7.77,6.217,11.025h32.365"
                  transform="translate(16618.738 17566.055)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <path
                  id="Path_952"
                  data-name="Path 952"
                  d="M-16505.631-17493.924h-30.1"
                  transform="translate(16622.205 17572.404)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
                <g
                  id="Group_4237"
                  data-name="Group 4237"
                  transform="translate(48.315 68.21)"
                >
                  <path
                    id="Path_433"
                    data-name="Path 433"
                    d="M244.749,4505.683s-.262-3.147,3.6-7.57c3.415-3.994,6.391-11.159,4.452-16.659a23.817,23.817,0,0,0-9.836-12.246s-6.286,10.216,6.968,20.483c0,0,3.3-6.181-5.134-13.882"
                    transform="translate(-241.472 -4469.208)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                  ></path>
                  <path
                    id="Path_434"
                    data-name="Path 434"
                    d="M266.24,4481.787s4.086-3.876,6.653,1.1l5.815,1.309-6.6.733a3.886,3.886,0,0,1-2.606.793,1.507,1.507,0,0,1-1.264-1.692,1.19,1.19,0,0,1,2.313-.334"
                    transform="translate(-255.111 -4475.344)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                  ></path>
                  <path
                    id="Path_435"
                    data-name="Path 435"
                    d="M268.888,4495.392s1.692,6.277-.239,10.044-7.034,4.386-7.034,4.386"
                    transform="translate(-252.564 -4483.627)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                  ></path>
                </g>
                <g
                  id="Group_4238"
                  data-name="Group 4238"
                  transform="translate(89.104 95.699)"
                >
                  <path
                    id="Path_433-2"
                    data-name="Path 433"
                    d="M244.018,4497.543s-.2-2.444,2.793-5.88c2.653-3.1,4.964-8.668,3.459-12.941a18.506,18.506,0,0,0-7.641-9.513s-4.883,7.935,5.413,15.912c0,0,2.564-4.8-3.988-10.785"
                    transform="translate(-241.472 -4469.208)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                  ></path>
                  <path
                    id="Path_434-2"
                    data-name="Path 434"
                    d="M266.24,4481.468s3.174-3.013,5.168.854l4.517,1.017-5.127.571a3.025,3.025,0,0,1-2.025.616,1.172,1.172,0,0,1-.982-1.315.924.924,0,0,1,1.8-.26"
                    transform="translate(-257.595 -4476.461)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                  ></path>
                  <path
                    id="Path_435-2"
                    data-name="Path 435"
                    d="M267.265,4495.392s1.315,4.878-.186,7.8-5.464,3.408-5.464,3.408"
                    transform="translate(-254.584 -4486.252)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                  ></path>
                </g>
              </g>
            </svg>
            <p className="my-6 text-2xl font-Roboto font-semibold">
              Step 3: Testing
            </p>
            <p className="my-6 w-56 mx-auto text-lg">
              We 3rd party test our beans for mycotoxins, molds, bacteria,
              pesticides, heavy metals plus 400 other toxins.
            </p>
          </div>
          <div className="basis-1/2 text-center self-end">
            <path
              id="Path_433"
              data-name="Path 433"
              d="M243.823,4495.383s-.188-2.258,2.58-5.433c2.45-2.866,4.586-8.007,3.195-11.953a17.1,17.1,0,0,0-7.058-8.788s-4.511,7.329,5,14.7c0,0,2.368-4.435-3.684-9.962"
              transform="translate(-241.472 -4469.209)"
              fill="none"
              stroke="#000"
              strokeWidth="2"
            ></path>
            <p className="my-6 text-2xl font-Roboto font-semibold">
              <svg
                className="max-h-full w-auto mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="136.395"
                height="68.182"
                viewBox="0 0 136.395 68.182"
              >
                <g
                  id="Group_4240"
                  data-name="Group 4240"
                  transform="translate(16588.895 17317.365)"
                >
                  <path
                    id="Path_953"
                    data-name="Path 953"
                    d="M-16572.641-17305.793v-10.574h66.059v58.617"
                    transform="translate(10.801 0.002)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                  ></path>
                  <path
                    id="Path_954"
                    data-name="Path 954"
                    d="M-16573.734-17286.166h67.355"
                    transform="translate(10.068 20.063)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                  ></path>
                  <g
                    id="Ellipse_141"
                    data-name="Ellipse 141"
                    transform="translate(-16549.818 -17265.783)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                  >
                    <circle cx="8.3" cy="8.3" r="8.3" stroke="none"></circle>
                    <circle cx="8.3" cy="8.3" r="7.3" fill="none"></circle>
                  </g>
                  <g
                    id="Ellipse_142"
                    data-name="Ellipse 142"
                    transform="translate(-16477.385 -17265.783)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                  >
                    <circle cx="8.3" cy="8.3" r="8.3" stroke="none"></circle>
                    <circle cx="8.3" cy="8.3" r="7.3" fill="none"></circle>
                  </g>
                  <path
                    id="Path_955"
                    data-name="Path 955"
                    d="M-16532.949-17302.635h10.936a11.835,11.835,0,0,1,10.049,4.959s7.049,9.135,13.576,11.619a12.07,12.07,0,0,1,7.705,11.1c-.133,2.086.648,6.527-2.744,7.313s-4.961,0-4.961,0"
                    transform="translate(37.167 9.114)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                  ></path>
                  <path
                    id="Path_956"
                    data-name="Path 956"
                    d="M-16500.018-17281.408h-55.074"
                    transform="translate(22.46 23.224)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                  ></path>
                  <path
                    id="Path_957"
                    data-name="Path 957"
                    d="M-16558.355-17281.146h-15.4"
                    transform="translate(10.059 23.397)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                  ></path>
                  <path
                    id="Path_958"
                    data-name="Path 958"
                    d="M-16583.719-17305.541h35.379"
                    transform="translate(3.439 7.191)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                  ></path>
                  <path
                    id="Path_959"
                    data-name="Path 959"
                    d="M-16588.895-17298.756h55.48"
                    transform="translate(0 11.699)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                  ></path>
                  <path
                    id="Path_960"
                    data-name="Path 960"
                    d="M-16581.758-17292.059h22.586"
                    transform="translate(4.741 16.148)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                  ></path>
                  <path
                    id="Path_961"
                    data-name="Path 961"
                    d="M-16525.2-17293.932h16.316"
                    transform="translate(42.313 14.904)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                  ></path>
                  <path
                    id="Path_962"
                    data-name="Path 962"
                    d="M-16510.379-17286.166h4.832"
                    transform="translate(52.162 20.063)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                  ></path>
                  <g
                    id="Group_4244"
                    data-name="Group 4244"
                    transform="translate(-16526.277 -17304.711)"
                  >
                    <path
                      id="Path_433"
                      data-name="Path 433"
                      d="M243.823,4495.383s-.188-2.258,2.58-5.433c2.45-2.866,4.586-8.007,3.195-11.953a17.1,17.1,0,0,0-7.058-8.788s-4.511,7.329,5,14.7c0,0,2.368-4.435-3.684-9.962"
                      transform="translate(-241.472 -4469.209)"
                      fill="none"
                      stroke="#000"
                      strokeWidth="2"
                    ></path>
                    <path
                      id="Path_434"
                      data-name="Path 434"
                      d="M266.24,4481.383s2.932-2.783,4.774.788l4.172.939-4.736.527a2.791,2.791,0,0,1-1.87.569,1.082,1.082,0,0,1-.907-1.215.854.854,0,0,1,1.66-.24"
                      transform="translate(-258.254 -4476.758)"
                      fill="none"
                      stroke="#000"
                      strokeWidth="2"
                    ></path>
                    <path
                      id="Path_435"
                      data-name="Path 435"
                      d="M266.834,4495.393s1.214,4.5-.171,7.206-5.047,3.148-5.047,3.148"
                      transform="translate(-255.121 -4486.951)"
                      fill="none"
                      stroke="#000"
                      strokeWidth="2"
                    ></path>
                  </g>
                </g>
              </svg>
              Step 4: Delivered
            </p>
            <p className="my-6 w-56 mx-auto text-lg">
              Delivered directly to your door to be enjoyed one delicious cup at
              a time!
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto pb-24">
        <p className="text-xl font-Roboto font-medium leading-loose mt-4 max-w-5xl mx-auto text-center pb-24">
          Your cup of Lifeboost Premium Coffee comes from coffee beans that have
          been individually hand selected as the premium bean(s) of a harvest.
          Your coffee beans are lovingly cultivated by local farmers, after
          being grown slowly to full maturity in mountain shade.
        </p>
        <div className="flex gap-16">
          <div className="flex-1 min-h-screen w-full relative">
            <img
              src="https://cdn.shopify.com/s/files/1/0838/4525/files/freshly-picked-coffee-beans_80e85b3a-a10c-48e0-9b52-fc6647314792_1728x1152.jpg?v=1633481971"
              alt="process-2"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex-1 py-12">
            <h2 className="uppercase text-4xl font-bold leading-snug mb-4">
              What Makes Lifeboost Great
            </h2>
            <p className="text-lg font-Roboto font-medium leading-loose mt-8">
              1. CLEAN - 80% of the time, put clean foods AND clean beverages in
              your body such as Lifeboost coffee. The other 20% of the time,
              enjoy life and treat yourself!
            </p>
            <p className="text-lg font-Roboto font-medium leading-loose mt-8">
              2. CAUSE - Support something you believe in. We support the
              farmers, their families and communities. We also definitely
              support sustainable farming methods, wildlife protection, and our
              first responders.
            </p>
            <p className="text-lg font-Roboto font-medium leading-loose mt-8">
              3. CONNECTION - Coffee connects us. Whether it's conversations
              with friends or family, business meetings or simply just spending
              time with yourself. Life is about connection.
            </p>
            <p className="text-lg font-Roboto font-medium leading-loose mt-8">
              4. KINDNESS - We believe that in order to make the world a better
              place, it all comes down to treating people how you would like to
              be treated... with LOVE, HONOR, and RESPECT.
            </p>
          </div>
        </div>
      </section>
      <section>
        <VideoBox data={videoDataEnd} />
      </section>
      <section className="mx-auto">
        <NewsLetter />
      </section>
    </div>
  );
};

export default Process;
