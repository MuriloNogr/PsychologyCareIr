import Image from "next/image";
import "@/styles/hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-container">

                {/* Texto */}
                <div className="hero-text">
                    <h1>Psychology Care Ireland</h1>
                    <p>
                        We provide specialized assessment services in clinical psychology, focusing on emotional, behavioral,
                        and psychological well-being; clinical neuropsychology, evaluating cognitive functions such as memory,
                        attention, and executive skills; and educational psychology, addressing core academic skills like reading,
                        writing, comprehension, and mathematical reasoning to identify unique learning needs and challenges.
                    </p>
                    <div className="hero-btn-container">
                        <a href="#contact" className="hero-btn">Contact us</a>
                    </div>
                </div>

                {/* Imagem */}
                <div className="hero-image">
                    <Image src="/ImagePlaceholder.png" alt="Consultório de Psicologia" width={512} height={0} />
                </div>

            </div>
        </section>
    );
};

export default Hero;
