import Link from "next/link";
import { Lily_Script_One } from "next/font/google";
import "@/styles/header.css";

// Importa a fonte otimizada do Google Fonts
const lilyScript = Lily_Script_One({
    weight: "400", // Único peso disponível para essa fonte
    subsets: ["latin"], // Conjunto de caracteres
    display: "swap", // Melhora o carregamento da fonte
});

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                {/* Logo */}
                <Link href="/" className="logo">
                    <h1 className={`header-title ${lilyScript.className}`}>
                        Psychology Care
                    </h1>
                </Link>

                {/* Navbar */}
                <nav>
                    <ul className="nav-links">
                        <li><Link href="#home">HOME</Link></li>
                        <li><Link href="#services">ASSESSMENTS</Link></li>
                        <li><Link href="#about">OUR TEAM</Link></li>
                        <li><Link href="#contact">CONTACT</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
