import Header from "./components/header.tsx";
import Subheader from "./components/subheader.tsx";
import Clients from "./components/clients.tsx";
import Community from "./components/community.tsx";
import Unlock from "./components/unlock.tsx";
import Achievements from "./components/achievements.tsx";
import MobileLogin from "./components/mobile-login.tsx";
import Tesla from "./components/tesla.tsx";
import CommunityUpdates from "./components/community-updates.tsx";
import Demo from "./components/demo.tsx";
import Footer from "./components/footer.tsx";

function App() {
    return (
        <div>
            <Header/>
            <Subheader/>
            <Clients/>
            <Community/>
            <Unlock/>
            <Achievements/>
            <MobileLogin/>
            <Tesla/>
            <CommunityUpdates/>
            <Demo/>
            <Footer/>
        </div>
    )
}

export default App
