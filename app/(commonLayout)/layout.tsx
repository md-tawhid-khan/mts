import Footer from "@/components/footer/footer";
import Navbar from "@/components/navebar/navbar";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
    return (
        <div >
             <Navbar/>
             <div className="min-h-screen max-w-full mt-14 mx-auto">
                {children}
             </div>
             <Footer/>
        </div>
    );
};

export default layout;