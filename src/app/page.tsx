import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ConditionsAssessed from "@/components/ConditionsAssessed";
import AssessmentProcess from "@/components/AssessmentProcess";
import KeyPrinciples from "@/components/KeyPrinciples";
import Assessments from "@/components/Assessments";
import EthicalFramework from "@/components/EthicalFramework";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Content from "@/components/Content";
import "@/styles/globals.css";

export default function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <Content>
                <Assessments />
                <KeyPrinciples/>
                <ConditionsAssessed />
                <AssessmentProcess/>
                <EthicalFramework />
                <Team />
                <Contact />
            </Content>
            <Footer />
        </div>
    );
}
