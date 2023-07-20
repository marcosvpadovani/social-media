import "@/styles/globals.css";

import OverallContext from "@/context";

export default function App({ Component, pageProps }) {
  return (
    <OverallContext>
      <Component {...pageProps} />
    </OverallContext>
  );
}
