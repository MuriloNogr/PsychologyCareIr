import Image from "next/image";
import Link from "next/link";
import "@/styles/assessments.css"; // Arquivo de estilos separado

const assessments = [
    {
        title: "Neurodevelopmental Disorders",
        description:
            "Assessments for conditions such as Intellectual Developmental Disorders (Intellectual Disability), Autism Spectrum Disorder, Attention-Deficit/Hyperactivity Disorder (ADHD), and Specific Learning Disorders, including Dyslexia and Dyscalculia.",
        image: "/ImagePlaceholder.png",
        link: "/assessments/neurodevelopmental",
    },
    {
        title: "Anxiety and Mood Disorders",
        description:
            "Evaluations addressing Depressive Disorders and a range of Anxiety Disorders, including Separation Anxiety, Specific Phobia, Social Anxiety, Panic Disorder, Agoraphobia, and Generalized Anxiety Disorder.",
        image: "/ImagePlaceholder.png",
        link: "/assessments/anxiety",
    },
    {
        title: "Behavioral and Impulse-Control Disorders",
        description:
            "Focused assessments for Disruptive and Impulse-Control conditions like Oppositional Defiant Disorder (ODD) and Intermittent Explosive Disorder (IED).",
        image: "/ImagePlaceholder.png",
        link: "/assessments/behavioral",
    },
];

const Assessments = () => {
    return (
        <section className="assessments-section">
            <h2 className="assessments-title">Assessments provided</h2>
            <div className="assessments-grid">
                {assessments.map((item, index) => (
                    <Link key={index} href={item.link} className="assessment-card">
                        <div className="assessment-image">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={400}
                                height={250}
                                className="assessment-img"
                            />
                        </div>
                        <h3 className="assessment-title">{item.title}</h3>
                        <p className="assessment-description">{item.description}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Assessments;
