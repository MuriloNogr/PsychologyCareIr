import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Assessments from "@/components/Assessments";
import EthicalCommitment from "@/components/EthicalCommitment";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Content from "@/components/Content";
import "@/styles/globals.css";

export default function Home() {
  return (
      <div>
        <Header />
        <Content>
            <Hero />
            <Assessments />
            <EthicalCommitment />
            <Team />
            <Contact />
        </Content>
          <Footer />
</div>
  );
}
