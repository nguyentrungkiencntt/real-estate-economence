import Header from "@/components/partials/Header";
import "../globals.css";
import Footer from "@/components/partials/Footer";

export default function LandsaleLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div className="shadow-2xl">
                <Header />
            </div>
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}
