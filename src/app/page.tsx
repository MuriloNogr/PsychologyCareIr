import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ConditionsAssessed from "@/components/ConditionsAssessed";
import AssessmentProcess from "@/components/AssessmentProcess";
import Approach from "@/components/Approach";
import KeyPrinciples from "@/components/KeyPrinciples";
import Assessments from "@/components/Assessments";
import EthicalFramework from "@/components/EthicalFramework";
import Team from "@/components/Team";
import Faqs from "@/components/Faqs";
import Notes from "@/components/Notes";
import Contact from "@/components/ContactSection";
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
                <ConditionsAssessed />
                <KeyPrinciples/>
                <AssessmentProcess/>
                <Approach/>
                <EthicalFramework />
                <Team />
                <Faqs/>
                <Notes/>
                <Contact />
            </Content>
            <Footer />
        </div>
    );
}
