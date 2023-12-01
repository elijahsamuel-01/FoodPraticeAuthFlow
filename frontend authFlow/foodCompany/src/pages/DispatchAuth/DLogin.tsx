
import styled from "styled-components"
import {Link} from "react-router-dom"


const DLogin = () => {
  return (
    <div>
        <All>
            <LogoFloat>
                    <img src="" alt="" />
            </LogoFloat>
            <LoginCard>
                <Holder>
                    <TextHold>
                        <MainText>
                        Dispatch Login
                        </MainText>
                        <Link to="/dispatchregister">
                            <SideText>       
                                <span>Create Account</span> instead
                            </SideText>
                        </Link>
                        
                    </TextHold>
                    <form action="">
                        <div className="mb-5">
                            <div>
                                <label htmlFor="" >Email or Username</label>
                            </div>
                            <input type="text" className="w-[100%] h-[30px] bg-white border pl-2"/>
                        </div>
                        <div className="mb-5">
                            <div>
                                <label htmlFor="" className="w-[100%]">Password</label>
                            </div>
                            <input type="password"  className="w-[100%] h-[30px]  bg-white border pl-2" />
                        </div>
                        <div className="flex justify-between w-[100%] mb-4">
                            <div className="flex">
                                 <div className="h-5 w-5 borderall flex justify-center items-center bg-[rgb(255,108,55)] cursor-pointer">✔️</div> 
                                 <div className="ml-2">Stay signed in</div>
                            </div>
                            <div className="text-[#7695f2]">Forgot Password?</div>
                        </div>
                        <div className="mb-[10px]">
                            <Link to="/dashboard">
                                <button className="w-[100%] h-[40px] rounded-[5px] bg-[rgb(255,108,55)] text-white cursor-pointer">Sign in</button>
                            </Link>
                        </div>
                        <div className="flex justify-center items-center mb-[10px]">
                            <div className= "flex justify-center items-center text-gray-200">_____________</div>
                            <div className="mt-4 mx-3">or</div>
                            <div className="flex justify-center items-center text-gray-200">_________________</div>
                        </div>
                        <div className="mb-[20px]">
                            <div className="w-[100%] h-350px] flex justify-center items-center border border-[#4285f4] cursor-pointer">
                                <div className="w-[10%] h-[100%] bg-white">G</div>
                                <div className="w-[90%] h-[40px] bg-[#4285f4] flex justify-center items-center text-white">Sign in with Google</div>
                            </div>
                        </div>
                        <div>
                            <button className="w-[100%] h-[40px] rounded-[5px] bg-gray-200 text-black cursor-pointer">Sign in with SSO</button>
                        </div>
                    </form>
                </Holder>
            </LoginCard>
        </All>
    </div>
  )
}

export default DLogin

// const LoginCard = styled.div`

// `;
const LogoFloat = styled.div`
position: absolute;
top: 55px;
left: 730px;

    img {
        height: 40%;
        width: 40%;
    }
`;
const SideText = styled.div`

span {
    color: #7695f2;
    cursor: pointer;
}
`;
const MainText = styled.div`
font-size: 20px;
font-weight: 600;
`;
const TextHold = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 30px;
`;
const Holder = styled.div`
height: 85%;
width: 90%;
`;
const LoginCard = styled.div`
height: 70%;
width: 25%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const All = styled.div`
height: calc(100vh - 80px);
width: 100%;
background-color: #f2f2f2;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`;