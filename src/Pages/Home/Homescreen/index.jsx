import HeroSection from '../HeroSection';
import AboutMe from '../AboutMe';
import MySkills from '../MySkills';
import RecentProjects from '../RecentProjects';
import Footer from '../../../Components/Footer';

export default function Home () {
    return (
        <>
            <HeroSection />
            <AboutMe />
            <MySkills />
            <RecentProjects />
            <Footer />
        </>
    )
}