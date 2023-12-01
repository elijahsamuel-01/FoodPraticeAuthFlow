import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"
import {Link} from "react-router-dom"
import { useState } from "react"

const Header = () => {
    const [drop, setDrop] = useState(false)
    const [drop2, setDrop2] = useState(false)
    const [drop3, setDrop3] = useState(false)

    const dropDown = () => {
        setDrop(!drop)
    }
    const dropDown2 = () => {
        setDrop2(!drop2)
    }
    const dropDown3 = () => {
        setDrop3(!drop3)
    }
  return (
    <header className="h-[60px] w-full flex justify-center items-center border-b top-0 fixed  bg-white z-10 ">
        <div className="h-[50px] w-[97%] flex justify-between items-center gap-2">

            <div className="h-[100%] w-[70%] flex justify-start items-center">

                <div className="h-[100%] w-[8%] flex justify-center items-center">
                    <Link to="/">
                        <div className="py-[20px] px-[20px] rounded-[50%] bg-orange-400 flex justify-center items-center"> </div>
                    </Link>  
                </div>

                <div className="h-[100%] w-[85%] flex justify-start items-center gap-5 text-[14px] text-gray-600 font-semibold">
                    <nav className="flex gap-1"> 
                        <div>Product</div>
                        
                        {drop ? <MdKeyboardArrowUp onClick={dropDown}  className="mt-[5px] text-gray-800 font-semibold cursor-pointer"/> : <MdKeyboardArrowDown onClick={dropDown}  className="mt-[5px] text-gray-800 font-semibold cursor-pointer"/>}

                        {/* DropDown Styling For Product */}
                            {drop? (
                                <div className=" w-[780px] h-[300px] bg-white boxx flex justify-center items-center rounded-xl absolute top-[50px] left-[90px]">
                                <div className="h-[80%] w-[94%]  flex justify-center items-start gap-10">
                    
                                    <div className="h-[100%] w-[30%]">
                                        <div className="h-[20%] w-[100%] font-semibold">Getting Started</div>
                                        <div className="h-[80%] w-[100%] flex justify-start items-start flex-col gap-3">
                                            <nav className=" hover:bg-gray-100 cursor-pointer">What is Postman?</nav>
                                            <nav className=" hover:bg-gray-100 cursor-pointer">Customer Stories</nav>
                                            <nav className=" text-blue-700 hover:bg-gray-100 cursor-pointer">Download Postman →</nav>
                                        </div>
                                    </div>
                    
                                    <div className="h-[100%] w-[36%]">
                                        <div className="h-[20%] w-[100%] font-semibold">API Platform</div>
                                        <div className="h-[80%] w-[100%] flex justify-start items-start flex-col gap-3 ">
                                            <nav className=" hover:bg-gray-100 cursor-pointer">Collaborate in Workspaces</nav>
                                            <nav className=" hover:bg-gray-100 cursor-pointer">Organize with Collections</nav>
                                            <nav className=" hover:bg-gray-100 cursor-pointer">Explore the API Client</nav>
                                            <nav className=" hover:bg-gray-100 cursor-pointer">Work smarter with Postbot</nav>
                                            <nav className=" hover:bg-gray-100 cursor-pointer">Browse API Tools</nav>
                                        </div>
                                    </div>
                    
                                    <div className="h-[100%] w-[31%]">
                                        <div className="h-[20%] w-[100%] font-semibold">Enterprise Solutions</div>
                                        <div className="h-[80%] w-[100%] flex justify-start items-start flex-col gap-3">
                                            <nav className=" hover:bg-gray-100 cursor-pointer">Enterprise Essentials</nav>
                                            <nav className=" hover:bg-gray-100 cursor-pointer">API Test Automation</nav>
                                            <nav className=" hover:bg-gray-100 cursor-pointer">Internal API Management</nav>
                                        </div>
                                    </div>
                    
                                </div>
                            </div>
                            ): null}


                        {/* DropDown Styling For Product Ends Here */}
                    </nav>
                    <Link to="/pricing">
                        <nav> Pricing </nav>
                    </Link>
                    <nav> Enterprise </nav>
                    <div className="flex">
                        <nav>Resources and Support</nav> 
                    </div>
                    <div>
                        <nav> Public API Network </nav>
                    </div>
                </div>
            </div>

            <div className="h-[100%] w-[30%] flex justify-end items-center gap-2 ">
                <button onClick={dropDown3}  className="py-2 px-4 border border-gray-400 rounded-[8px] text-black font-[600] text-[14px]"> Log In
                </button>

                {drop3?(
                    <div className="h-[300px] w-[220px] bg-white boxx flex justify-center items-center rounded-xl absolute top-[50px] right-[10px]">
                        <div className="h-[85%] w-[80%]  flex justify-center items-center flex-col gap-10">
                            <Link to="/adminsignin">
                            <div className="w-full h-[15%] flex justify-start items-center font-bold  hover:bg-gray-100 cursor-pointer">
                                Login As Admin →
                            </div>
                            </Link>

                            <Link to="/vendorsignin">
                            <div className="w-full h-[15%] flex justify-start items-center font-bold  hover:bg-gray-100 cursor-pointer">
                            Login As Vendor →
                            </div>
                            </Link>

                            <Link to="usersignin">
                            <div className="w-full h-[15%] flex justify-start items-center font-bold  hover:bg-gray-100 cursor-pointer">
                            Login Up As User →
                            </div>
                            </Link>

                            <Link to="dispatchsignin">
                            <div className="w-full h-[15%] flex justify-start items-center font-bold  hover:bg-gray-100 cursor-pointer">
                            Login As Dispatch →
                            </div>
                            </Link>
                        </div>
                </div>
                ): null}



                <button onClick={dropDown2}  className="py-2 px-4 rounded-[8px] bg-[rgb(255,87,51)] text-white font-[600] text-[14px] border border-[rgb(255,87,51)]">Sign Up
                </button>

                {drop2?(
                    <div className="h-[300px] w-[220px] bg-white boxx flex justify-center items-center rounded-xl absolute top-[50px] right-[10px]">
                        <div className="h-[85%] w-[80%]  flex justify-center items-center flex-col gap-10">
                            <Link to="/adminregister">
                                <div className="w-full h-[15%] flex justify-start items-center font-bold  hover:bg-gray-100 cursor-pointer">
                                    Sign Up As Admin →
                                </div>
                            </Link>

                            <Link to="/vendorregister">
                            <div className="w-full h-[15%] flex justify-start items-center font-bold  hover:bg-gray-100 cursor-pointer">
                            Sign Up As Vendor →
                            </div>
                            </Link>

                            <Link to="/userregister">
                            <div className="w-full h-[15%] flex justify-start items-center font-bold  hover:bg-gray-100 cursor-pointer">
                            Sign Up As User →
                            </div>
                            </Link>

                            <Link to="/dispatchregister">
                            <div className="w-full h-[15%] flex justify-start items-center font-bold  hover:bg-gray-100 cursor-pointer">
                            Sign Up As Dispatch →
                            </div>
                            </Link>
                        </div>
                </div>
                ): null}
            </div>
        </div>  
    </header>
  )
}

export default Header