

import styled from "styled-components"
import {Link} from "react-router-dom"


const DRegister = () => {
  return (
    <div>
        <All>
            <LoginCard>
                <Holder>
                    <TextHold>
                        <MainText>
                            Create Dispatch FoodFLex Account
                        </MainText>
                        <Link to="/dispatchsignin">
                            <SideText>       
                                <span>Sign in</span> instead?
                            </SideText>
                        </Link>
                        
                    </TextHold>
                    <form action="">
                        <div className="mb-5">
                            <div>
                                <label htmlFor="" >Email</label>
                            </div>
                            <input type="text" className="w-[100%] h-[35px] bg-white border pl-2"/>
                        </div>
                        <div className="mb-5">
                            <div>
                                <label htmlFor="" >Username</label>
                            </div>
                            <input type="text" className="w-[100%] h-[35px] bg-white border pl-2"/>
                        </div>
                        <div className="mb-5">
                            <div>
                            <label htmlFor="" >ComapanyToken</label>
                            </div>
                            <input type="text" className="w-[100%] h-[35px] bg-white border pl-2"/>
                        </div>
                        <div className="mb-5">
                            <div>
                                <label htmlFor="" className="w-[100%]">Password</label>
                            </div>
                            <input type="password"  className="w-[100%] h-[35px]  bg-white border pl-2" />
                        </div>
                        <div className="flex justify-between w-[100%] mb-7">
                            <div className="flex">
                                 <div className="h-5 w-5 borderall flex justify-center items-center bg-[rgb(255,108,55)] cursor-pointer">✔️</div> 
                                 <div className="ml-2">Stay signed in</div>
                            </div>
                            <div className="text-[#7695f2]">Forgot Password?</div>
                        </div>
                        <div className="mb-[10px]">
                            <Link to="/dispatchverifyscreen">
                                <button className="w-[100%] h-[35px] rounded-[5px] bg-[rgb(255,108,55)] text-white cursor-pointer">Sign Up</button>
                            </Link>
                            
                        </div>
                        <div className="flex justify-center items-center mb-[20px]">
                            <div className= "flex justify-center items-center text-gray-200">_____________</div>
                            <div className="mt-4 mx-3">or</div>
                            <div className="flex justify-center items-center text-gray-200">_________________</div>
                        </div>
                        <div className="mb-[20px]">
                            <div className="w-[100%] h-[35px] flex justify-center items-center border border-[#4285f4] cursor-pointer">
                                <div className="w-[10%] h-[100%] bg-white">G</div>
                                <div className="w-[90%] h-[100%] bg-[#4285f4] flex justify-center items-center text-white">Sign in with Google</div>
                            </div>
                        </div>
                        <div>
                            <button className="w-[100%] h-[35px] rounded-[5px] bg-gray-200 text-black cursor-pointer">Sign in with SSO</button>
                        </div>
                    </form>
                </Holder>
            </LoginCard>
        </All>
    </div>
  )
}

export default DRegister

// const LoginCard = styled.div`

// `;

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
height: 90%;
width: 35%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const All = styled.div`
height: 100vh;
width: 100%;
background-color: #f2f2f2;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`;