import Image from "next/image";
import Link from "next/link";
import "@/styles/team.css"; // Arquivo de estilos separado
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
    subsets: ["latin"],
    weight: "800",
    display: "swap",
});

const teamMembers = [
    {
        name: "Mervyn Clyne",
        description: "Body text for whatever you'd like to add more to the subheading.",
        image: "/ImagePlaceholder.png",
        link: "/team/mervyn-clyne",
    },
    {
        name: "Vanessa Clyne",
        description: "Body text for whatever you'd like to expand on the main point.",
        image: "/ImagePlaceholder.png",
        link: "/team/vanessa-clyne",
    },
];

const Team = () => {
    return (
        <section className="team-section">
            <h2 className={`team-title ${notoSans.className}`}>OUR TEAM</h2>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <Link key={index} href={member.link} className="team-card">
                        <div className="team-image">
                            <Image src={member.image} alt={member.name} width={150} height={150} className="team-img"/>
                        </div>
                        <div className="team-info">
                            <h3 className="team-name">{member.name}</h3>
                            <p className="team-description">{member.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Team;
