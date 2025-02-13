import Image from "next/image";
import Link from "next/link";
import "@/styles/ethical.css"; // Arquivo de estilos atualizado

const ethicalTopics = [
    {
        title: "Integrity and Trust",
        description:
            "Psychologists uphold honesty, transparency, and professional boundaries in every interaction, ensuring trust and confidence in the therapeutic process.",
        link: "/ethics/integrity",
    },
    {
        title: "Respect for Rights and Dignity",
        description:
            "We prioritize respect for individual autonomy, privacy, and diversity, creating an inclusive, judgment-free environment for everyone we serve.",
        link: "/ethics/respect",
    },
    {
        title: "Beneficence and Nonmaleficence",
        description:
            "Our work is guided by a commitment to promote well-being while minimizing harm. Each assessment, intervention, and recommendation is carried out with the highest care and responsibility.",
        link: "/ethics/beneficence",
    },
];

const EthicalCommitment = () => {
    return (
        <section className="ethical-section">
            <div className="ethical-container">
                {/* Texto */}
                <div className="ethical-text">
                    <h2 className="ethical-title">Ethical Commitment</h2>

                    {ethicalTopics.map((item, index) => (
                        <Link key={index} href={item.link} className="ethical-item">
                            <h3 className="ethical-subtitle">{item.title}</h3>
                            <p>{item.description}</p>
                        </Link>
                    ))}
                </div>

                {/* Imagem */}
                <div className="ethical-image">
                    <Image
                        src="/ImagePlaceholder.png" // Nome do arquivo no public/
                        alt="Psychologist nurturing a brain with plants"
                        width={500}
                        height={400}
                    />
                </div>
            </div>
        </section>
    );
};

export default EthicalCommitment;
