import { ReactNode } from "react";
import "@/styles/content.css"; // CSS externo

interface ContentProps {
    children: ReactNode;
}

const Content = ({ children }: ContentProps) => {
    return <main className="content-container">{children}</main>;
};

export default Content;

