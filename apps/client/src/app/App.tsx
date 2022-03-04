import { Route, Routes } from 'react-router-dom';
import LandingPage from '../features/LandingPage';
import AuthPage from '../features/auth/AuthPage';

const App = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route element={<AuthPage/>}>
                <Route path="login" element={<div>로그인</div>}/>
                <Route path="register" element={<div>회원가입</div>}/>
            </Route>
        </Routes>
    );
};

export default App;