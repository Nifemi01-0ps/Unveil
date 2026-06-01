import { Outlet, useLocation } from "react-router-dom";
import MobileContainer from "../Layout/MobileContainer.jsx";
import MainContent from "../Layout/MainContent.jsx";
import Header from "../Common/Header.jsx";

export default function AppLayout() {
    const location = useLocation();
    // Custom tracking logic
    const isStoryView = location.pathname.startsWith('/story');
    return (
        <MobileContainer breakpoint={isStoryView ? 'tabletAdapt' : 'default'}>
            {location.pathname !== '/' && location.pathname !== '/onboarding' && (
                <Header currentView={location.pathname}/>
            )}
            <MainContent id="main-content-anchor">
                <Outlet />
            </MainContent>
        </MobileContainer>
    );
}