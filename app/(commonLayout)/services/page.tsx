import Services from "@/components/services/services";
import { Metadata } from "next";

 export const metadata: Metadata = {
  title: 'MTS/services',
  description: 'Explore MTS Tech’s professional services, including web development, software solutions, UI/UX design, and digital support for growing businesses',
}

const ServicePage = () => {
    return (
        <div>
            <Services/>
        </div>
    );
};

export default ServicePage;