import Image from "next/image";
import PageStyleBackground from "./style";
import FirstView from "./components/FirstView";

export default function Home() {
  return (
    <PageStyleBackground>
      <FirstView></FirstView>
    </PageStyleBackground>
  );
}
