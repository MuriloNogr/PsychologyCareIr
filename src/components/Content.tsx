import { ReactNode } from "react";
import "@/styles/content.css"; // Importa o CSS externo para estilização

interface ContentProps {
    children: ReactNode;
}

const Content = ({ children }: ContentProps) => {
    return <div className="content-container">{children}</div>;
};

export default Content;
