import "../styles/bootstrap.min.css";
import "../styles/animate.css";
import "../styles/icofont.min.css";
import "../styles/meanmenu.css";
import "react-tabs/style/react-tabs.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Style
import "../styles/style.css";
import "../styles/responsive.css";
// Global RTL Style
import "../styles/rtl.css";

import Layout from "../components/_App/Layout";

import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const pageKey = router.asPath;

  return (
    <Layout>
        <Component key={pageKey} {...pageProps} />
    </Layout>
  );
};

export default MyApp;
