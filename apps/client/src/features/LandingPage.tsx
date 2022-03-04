import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

const Page = tw.div`w-screen h-screen flex flex-col items-center justify-start bg-gray-200`;
const Header = tw.header`h-10 w-full flex justify-end items-center`;
const StyledLink = tw(Link)`text-base font-semibold mx-4`;
const Frame = tw.div`flex flex-col justify-center items-center h-full`;
const Title = tw.span`font-black text-6xl text-center mb-3`;
const Description = tw.span`font-extrabold text-xl`;

const LandingPage = () => {
    return (
        <Page>
            <Header>
                <StyledLink to="/login">로그인</StyledLink>
                <StyledLink to="/register">회원가입</StyledLink>
            </Header>
            <Frame>
                <Title>북컵</Title>
                <Description>북카페를 위한 편리한 도서 관리 서비스</Description>
            </Frame>
        </Page>
    );
};

export default LandingPage;
