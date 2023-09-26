import React from "react";
import { useAppContext } from "../hooks/useAppContext";
import { Link } from "react-router-dom";

const HomeThirdBlock = () => {
  const { findProductByName } = useAppContext();

  return (
    <Link
      to={`/products/${findProductByName("iPhone 14").id}`}
      className="home-third-block"
    >
      <div
        className="image-block home-third-block-image"
        style={{ backgroundImage: `url("iphone14-3.jpg")` }}
      ></div>

      <div className="content">
        <h2 className="uppercase color-dark-purple font-weight-500">
          iPhone 14
        </h2>
      </div>

      <div className="home-third-btn-wrapper background-white">
        <svg
          className="arrow"
          width="67"
          height="38"
          viewBox="0 0 67 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.74852 36.7208L65.3896 4.13144M65.3896 4.13144C59.0214 8.51596 46.5821 20.2786 47.7707 32.253M65.3896 4.13144C58.1098 6.73579 41.2949 9.95362 32.2736 1.99017"
            stroke="#5C469C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <svg
          className="circle-text"
          width="143"
          height="150"
          viewBox="0 0 143 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.62299 45.8824L0.8564 40.7039L4.10304 35.2077L5.24167 35.8803L2.77635 40.0538L5.44742 41.6316L7.74333 37.7449L8.87768 38.4149L6.58177 42.3017L9.26568 43.8871L11.7613 39.6622L12.9 40.3347L9.62299 45.8824Z"
            fill="black"
          />
          <path
            d="M9.77181 27.4933L14.3572 28.369L14.4107 28.3101L13.1022 23.829L14.2993 22.5119L15.9334 28.2832L21.8475 29.3452L20.6437 30.6697L16.0921 29.8382L16.0386 29.8971L17.2999 34.3488L16.0961 35.6733L14.5122 29.8468L8.57472 28.8105L9.77181 27.4933Z"
            fill="black"
          />
          <path
            d="M26.1283 25.5322L20.1383 17.2988L23.073 15.1637C23.7136 14.6977 24.3291 14.4282 24.9195 14.3552C25.5099 14.2823 26.0569 14.3721 26.5604 14.6247C27.0619 14.8746 27.4959 15.2515 27.8625 15.7554C28.2311 16.2619 28.4567 16.7946 28.5394 17.3533C28.6228 17.9074 28.5386 18.4564 28.2867 19.0004C28.0356 19.5397 27.5911 20.0414 26.9532 20.5054L24.935 21.9737L24.1687 20.9204L26.0743 19.534C26.479 19.2396 26.7566 18.9311 26.9072 18.6084C27.0558 18.2831 27.1003 17.9556 27.0408 17.6259C26.9813 17.2962 26.8384 16.9759 26.6122 16.665C26.3861 16.3541 26.1263 16.1209 25.8328 15.9655C25.5394 15.8101 25.2157 15.7567 24.8616 15.8052C24.5103 15.8518 24.1282 16.0253 23.7154 16.3256L22.1556 17.4604L27.3706 24.6284L26.1283 25.5322Z"
            fill="black"
          />
          <path
            d="M36.8225 18.4595L32.5239 9.22966L33.9165 8.58108L37.6568 16.6122L41.8391 14.6643L42.3974 15.8631L36.8225 18.4595Z"
            fill="black"
          />
          <path
            d="M55.4228 6.80722C55.6666 7.86665 55.6824 8.8221 55.4703 9.67357C55.2574 10.5218 54.8606 11.2287 54.2799 11.7943C53.7017 12.3559 52.9847 12.7352 52.1288 12.9322C51.2696 13.1299 50.4556 13.103 49.6869 12.8513C48.9207 12.5958 48.256 12.1314 47.693 11.4584C47.13 10.7853 46.7269 9.92067 46.4839 8.86447C46.24 7.80505 46.2246 6.85121 46.4375 6.00297C46.6496 5.1515 47.0448 4.44496 47.623 3.88337C48.2036 3.3178 48.9235 2.93615 49.7827 2.73842C50.6386 2.54143 51.4497 2.57072 52.216 2.82631C52.9847 3.07792 53.6506 3.54026 54.2136 4.21333C54.7759 4.88316 55.1789 5.7478 55.4228 6.80722ZM53.9402 7.14842C53.7544 6.34093 53.4671 5.69114 53.0783 5.19902C52.6921 4.70294 52.2402 4.36482 51.7225 4.18465C51.2074 4.00051 50.6656 3.97386 50.0972 4.10469C49.5255 4.23626 49.0482 4.49745 48.6654 4.88824C48.2818 5.27581 48.0232 5.77747 47.8894 6.39323C47.7581 7.00503 47.7854 7.71467 47.9713 8.52216C48.1571 9.32964 48.4431 9.98143 48.8294 10.4775C49.2181 10.9696 49.6701 11.3078 50.1852 11.4919C50.6996 11.6728 51.2426 11.6975 51.8143 11.5659C52.3828 11.4351 52.8588 11.1759 53.2423 10.7883C53.6284 10.3968 53.887 9.8951 54.0183 9.28331C54.1521 8.66754 54.1261 7.95591 53.9402 7.14842Z"
            fill="black"
          />
          <path
            d="M62.6811 11.0917L62.5688 0.910455L66.1978 0.870409C66.9866 0.861705 67.6427 0.990364 68.166 1.25639C68.6926 1.52237 69.0878 1.89422 69.3517 2.37192C69.6154 2.84631 69.7508 3.3967 69.7577 4.02308C69.7646 4.64615 69.6397 5.19609 69.3831 5.67291C69.1298 6.14638 68.7428 6.51691 68.222 6.78451C67.7046 7.05208 67.0515 7.19021 66.2627 7.19891L63.5136 7.22925L63.499 5.90689L66.1089 5.87809C66.606 5.8726 67.0096 5.79688 67.3195 5.65094C67.6328 5.50495 67.8609 5.29527 68.0037 5.0219C68.1465 4.74853 68.2158 4.42127 68.2116 4.04014C68.2074 3.6557 68.1291 3.32344 67.9769 3.04338C67.8279 2.76328 67.5952 2.5504 67.2787 2.40474C66.9655 2.25573 66.5554 2.18402 66.0483 2.18961L64.1194 2.2109L64.2173 11.0747L62.6811 11.0917ZM67.6564 6.44272L70.2226 11.0084L68.4727 11.0277L65.9562 6.46148L67.6564 6.44272Z"
            fill="black"
          />
          <path
            d="M75.4895 11.5021L77.3882 1.49891L83.6598 2.68936L83.4132 3.9886L78.6509 3.08464L78.0724 6.13249L82.5074 6.97434L82.2617 8.2687L77.8267 7.42685L77.2453 10.4894L82.0662 11.4044L81.8196 12.7037L75.4895 11.5021Z"
            fill="black"
          />
          <path
            d="M107.403 12.5999L102.356 21.4428L101.13 20.743L100.337 11.6922L100.255 11.6454L96.5531 18.1308L95.2189 17.3693L100.266 8.52634L101.501 9.23114L102.294 18.293L102.376 18.3398L106.082 11.8458L107.403 12.5999Z"
            fill="black"
          />
          <path
            d="M117.239 27.1799C116.502 27.9791 115.722 28.5315 114.9 28.837C114.079 29.14 113.272 29.2115 112.477 29.0514C111.687 28.8912 110.969 28.5133 110.324 27.918C109.675 27.3204 109.238 26.6333 109.012 25.8567C108.791 25.0799 108.799 24.2692 109.037 23.4245C109.274 22.5799 109.761 21.7591 110.495 20.9623C111.232 20.163 112.011 19.6119 112.831 19.3088C113.654 19.0034 114.46 18.9308 115.25 19.091C116.045 19.2511 116.766 19.63 117.414 20.2276C118.06 20.8229 118.493 21.509 118.715 22.2858C118.941 23.0623 118.935 23.873 118.698 24.7176C118.462 25.5599 117.976 26.3806 117.239 27.1799ZM116.12 26.1487C116.682 25.5395 117.056 24.9356 117.243 24.3369C117.435 23.738 117.459 23.1741 117.315 22.6452C117.176 22.116 116.893 21.6537 116.464 21.2583C116.032 20.8607 115.547 20.6141 115.009 20.5187C114.472 20.4209 113.912 20.4905 113.328 20.7277C112.749 20.9646 112.179 21.3877 111.617 21.9969C111.056 22.6061 110.679 23.2101 110.488 23.8089C110.301 24.4076 110.277 24.9715 110.416 25.5007C110.557 26.0274 110.843 26.4896 111.274 26.8872C111.703 27.2826 112.186 27.5293 112.722 27.6271C113.263 27.7248 113.823 27.6551 114.402 27.4182C114.986 27.181 115.559 26.7579 116.12 26.1487Z"
            fill="black"
          />
          <path
            d="M118.999 37.1052L126.03 29.2181L126.905 30.5765L121.35 36.5136L121.401 36.593L129.148 34.0582L130.014 35.4041L124.498 41.4108L124.549 41.4902L132.254 38.8816L133.132 40.2442L123.04 43.379L122.203 42.0791L127.454 36.1482L127.411 36.0814L119.839 38.4093L118.999 37.1052Z"
            fill="black"
          />
          <path
            d="M132.054 77.8011L142.179 78.8735L141.507 85.2215L140.192 85.0822L140.702 80.2619L137.617 79.9351L137.142 84.4242L135.832 84.2855L136.307 79.7964L133.207 79.4681L132.691 84.3477L131.376 84.2084L132.054 77.8011Z"
            fill="black"
          />
          <path
            d="M139.552 94.5929L135.017 95.6996L134.992 95.7753L138.043 99.3091L137.5 101.004L133.618 96.4319L127.797 97.9204L128.342 96.2158L132.828 95.083L132.853 95.0072L129.857 91.4807L130.403 89.776L134.262 94.4194L140.094 92.8977L139.552 94.5929Z"
            fill="black"
          />
          <path
            d="M125.485 103.166L134.352 108.171L132.568 111.331C132.179 112.021 131.731 112.522 131.224 112.833C130.717 113.145 130.182 113.29 129.619 113.269C129.059 113.25 128.508 113.087 127.965 112.781C127.42 112.473 126.993 112.082 126.686 111.608C126.38 111.139 126.229 110.604 126.233 110.005C126.237 109.41 126.433 108.769 126.821 108.082L128.048 105.909L129.182 106.549L128.024 108.601C127.778 109.037 127.653 109.433 127.65 109.789C127.65 110.147 127.746 110.463 127.937 110.738C128.128 111.013 128.39 111.246 128.725 111.435C129.06 111.623 129.393 111.728 129.725 111.747C130.056 111.767 130.373 111.681 130.675 111.49C130.975 111.302 131.251 110.985 131.502 110.541L132.45 108.861L124.73 104.504L125.485 103.166Z"
            fill="black"
          />
          <path
            d="M118.691 114.04L126.433 120.653L125.436 121.821L118.699 116.067L115.703 119.575L114.697 118.716L118.691 114.04Z"
            fill="black"
          />
          <path
            d="M106.606 132.362C105.944 131.499 105.533 130.636 105.373 129.774C105.214 128.914 105.282 128.106 105.575 127.35C105.868 126.599 106.363 125.957 107.06 125.422C107.76 124.886 108.511 124.572 109.315 124.482C110.119 124.396 110.916 124.543 111.708 124.922C112.499 125.3 113.225 125.92 113.884 126.78C114.546 127.642 114.956 128.504 115.114 129.364C115.275 130.226 115.208 131.033 114.916 131.784C114.622 132.54 114.125 133.186 113.426 133.722C112.729 134.257 111.979 134.567 111.176 134.652C110.372 134.743 109.574 134.598 108.783 134.22C107.993 133.844 107.267 133.224 106.606 132.362ZM107.813 131.436C108.317 132.093 108.848 132.565 109.406 132.852C109.964 133.143 110.515 133.263 111.061 133.212C111.606 133.165 112.11 132.965 112.573 132.61C113.038 132.253 113.364 131.817 113.55 131.303C113.738 130.791 113.765 130.227 113.631 129.611C113.497 129 113.177 128.366 112.673 127.708C112.169 127.051 111.638 126.577 111.081 126.286C110.523 125.999 109.971 125.879 109.426 125.926C108.883 125.975 108.379 126.178 107.913 126.535C107.451 126.89 107.125 127.323 106.937 127.835C106.748 128.351 106.721 128.915 106.856 129.526C106.99 130.142 107.309 130.778 107.813 131.436Z"
            fill="black"
          />
          <path
            d="M98.2238 131.477L102.552 140.693L99.267 142.235C98.553 142.571 97.9028 142.726 97.3162 142.701C96.7267 142.678 96.2128 142.504 95.7745 142.179C95.3376 141.856 94.986 141.412 94.7197 140.845C94.4548 140.281 94.3402 139.729 94.3757 139.188C94.4096 138.652 94.6079 138.155 94.9706 137.695C95.3303 137.237 95.8672 136.84 96.5812 136.505L99.0697 135.336L99.6319 136.533L97.2693 137.643C96.8193 137.854 96.4836 138.09 96.2622 138.352C96.0378 138.615 95.9174 138.9 95.9009 139.208C95.8844 139.516 95.9572 139.843 96.1192 140.188C96.2827 140.536 96.4918 140.805 96.7465 140.997C96.9983 141.19 97.2984 141.287 97.6468 141.288C97.9936 141.294 98.3965 141.189 98.8555 140.973L100.602 140.153L96.8333 132.13L98.2238 131.477ZM95.6271 137.771L91.3973 134.683L92.9813 133.939L97.1661 137.049L95.6271 137.771Z"
            fill="black"
          />
          <path
            d="M86.4006 136.42L88.8253 146.309L82.6254 147.829L82.3105 146.544L87.0183 145.39L86.2796 142.377L81.8952 143.452L81.5815 142.172L85.9658 141.097L85.2235 138.07L80.4577 139.238L80.1428 137.954L86.4006 136.42Z"
            fill="black"
          />
          <path
            d="M56.9103 148.668L57.8314 138.528L59.2375 138.656L63.7162 146.56L63.8103 146.569L64.4858 139.132L66.0157 139.271L65.0947 149.411L63.6786 149.283L59.1959 141.367L59.1018 141.359L58.4254 148.805L56.9103 148.668Z"
            fill="black"
          />
          <path
            d="M41.9101 139.486C42.2487 138.453 42.7289 137.627 43.3505 137.007C43.9711 136.391 44.676 135.991 45.4654 135.807C46.2506 135.625 47.0605 135.67 47.8951 135.944C48.7328 136.219 49.4158 136.662 49.9439 137.275C50.4679 137.89 50.797 138.631 50.9313 139.498C51.0655 140.365 50.9639 141.313 50.6262 142.343C50.2876 143.376 49.808 144.201 49.1874 144.817C48.5658 145.437 47.8624 145.837 47.0772 146.019C46.2878 146.204 45.4743 146.158 44.6365 145.884C43.8019 145.61 43.1226 145.166 42.5986 144.551C42.0705 143.938 41.7393 143.199 41.605 142.331C41.4697 141.467 41.5714 140.519 41.9101 139.486ZM43.3557 139.96C43.0976 140.747 43.0078 141.452 43.0863 142.074C43.1607 142.698 43.3729 143.221 43.723 143.643C44.0689 144.067 44.5189 144.37 45.0732 144.551C45.6307 144.734 46.1743 144.757 46.7039 144.62C47.2326 144.487 47.7132 144.191 48.1459 143.733C48.5745 143.277 48.9178 142.655 49.1759 141.868C49.434 141.08 49.5259 140.375 49.4515 139.75C49.373 139.128 49.1608 138.605 48.8149 138.181C48.468 137.761 48.0158 137.459 47.4583 137.276C46.904 137.094 46.3626 137.07 45.8339 137.204C45.3011 137.34 44.8204 137.636 44.3919 138.092C43.9592 138.55 43.6138 139.172 43.3557 139.96Z"
            fill="black"
          />
          <path
            d="M36.1887 131.187L33.0658 141.281L31.706 140.408L34.2954 132.701L34.2159 132.65L28.2207 138.171L26.8734 137.306L29.3986 129.552L29.3191 129.501L23.3923 135.072L22.0283 134.197L29.9085 127.156L31.2097 127.991L28.8938 135.567L28.9608 135.61L34.8833 130.349L36.1887 131.187Z"
            fill="black"
          />
        </svg>
      </div>
    </Link>
  );
};

export default HomeThirdBlock;