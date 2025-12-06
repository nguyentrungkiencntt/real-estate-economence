import Header from "@/components/partials/Header";
import "../globals.css";
import Footer from "@/components/partials/Footer";

export default function RealEstateLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div className="border-b">
                <Header />
            </div>
            <div>
                {children}
            </div>
            <Footer />
        </div>
    );
}
