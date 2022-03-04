import { Outlet } from "react-router-dom";
import tw from "tailwind-styled-components";

const Page = tw.div`w-screen h-screen flex flex-col items-center justify-center bg-gray-200`;

const AuthPage = (): JSX.Element => {
    return (
        <Page>
            <Outlet/>
        </Page>
    );
};

export default AuthPage;
