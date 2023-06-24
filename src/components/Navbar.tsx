import { FC, useState } from "react";

const Navbar: FC = (props) => {
    const [navOpen, setNavOpen] = useState(false)
    const handleOpenNavbar = () => setNavOpen(old => !old)
    return (
        <div className="w-full ">
            <div className="container mx-auto px-8 py-6 flex justify-end">
                <nav className="flex items-center justify-end gap-x-3">
                    <div className="max-lg:hidden flex items-center justify-end gap-x-3">
                        <button className="bg-primary rounded-md font-medium leading-6 px-4 py-1.5 text-sm text-white">Individual Investor</button>
                        <div>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.85116 19.2837C4.35901 19.2749 2.87844 19.0209 1.46858 18.5319C1.02773 18.3791 0.625291 18.3874 0.286307 18.7349C-0.0526769 19.0824 -0.0626974 19.4867 0.110969 19.9211C2.26009 25.3107 6.16008 28.6788 11.8635 29.7381C18.4871 30.9702 24.9829 27.7717 28.1448 21.9067C32.6017 13.6627 28.7042 3.34119 19.9198 0.106736C19.5424 -0.0327667 19.1909 -0.0603331 18.8511 0.176069C18.4654 0.44505 18.3335 0.89363 18.5071 1.40068C18.872 2.43159 19.1046 3.50468 19.1993 4.5942C19.5182 8.58882 18.341 12.0847 15.6182 15.021C13.4115 17.4 10.6529 18.7533 7.43586 19.1693C6.91319 19.2378 6.38051 19.247 5.85116 19.2837ZM20.9844 2.8049C25.6734 5.26248 28.9572 10.9629 27.7323 17.1879C26.5225 23.3377 21.128 27.8702 14.8835 27.998C8.79514 28.1225 4.38835 24.254 2.84539 20.9945C8.16477 21.8457 12.8838 20.5677 16.7187 16.7343C20.5535 12.9009 21.8452 8.17031 20.9844 2.8049Z" fill="#64646C" />
                            </svg>
                        </div>
                        <div>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9053 25.1325C13.5528 25.8537 14.384 26.25 15.2465 26.25H15.2478C16.114 26.25 16.949 25.8537 17.5978 25.1312C17.9453 24.7475 18.5378 24.7162 18.9215 25.0625C19.3065 25.4087 19.3378 26.0025 18.9915 26.3862C17.9815 27.5075 16.6528 28.125 15.2478 28.125H15.2453C13.844 28.1237 12.5178 27.5062 11.5115 26.385C11.1653 26.0012 11.1965 25.4075 11.5815 25.0625C11.9665 24.715 12.559 24.7462 12.9053 25.1325ZM15.3088 1.25C20.865 1.25 24.5975 5.5775 24.5975 9.61875C24.5975 11.6975 25.1263 12.5787 25.6875 13.5137C26.2425 14.4362 26.8713 15.4837 26.8713 17.4637C26.435 22.5225 21.1538 22.935 15.3088 22.935C9.46378 22.935 4.18128 22.5225 3.75002 17.5437C3.74628 15.4837 4.37503 14.4362 4.93003 13.5137L5.12596 13.1839C5.60838 12.3548 6.02003 11.4529 6.02003 9.61875C6.02003 5.5775 9.75253 1.25 15.3088 1.25ZM15.3088 3.125C10.94 3.125 7.89503 6.5475 7.89503 9.61875C7.89503 12.2175 7.17378 13.4187 6.53628 14.4787C6.02503 15.33 5.62128 16.0025 5.62128 17.4637C5.83003 19.8212 7.38628 21.06 15.3088 21.06C23.1875 21.06 24.7925 19.7662 25 17.3825C24.9963 16.0025 24.5925 15.33 24.0813 14.4787C23.4438 13.4187 22.7225 12.2175 22.7225 9.61875C22.7225 6.5475 19.6775 3.125 15.3088 3.125Z" fill="#64646C" />
                            </svg>
                        </div>
                        <div className="bg-dark rounded-md p-1 h-9 w-20 flex ">
                            <div className="h-full flex-1 flex justify-center items-center text-xs font-thin text-white font-gothic">
                                EN
                            </div>
                            <div className="h-full flex-1 flex justify-center items-center text-white text-light bg-secondary rounded text-xs">
                                ع
                            </div>
                        </div>
                        <div className="px-2 py-2.5 flex items-center rounded justify-between border border-primary/[35%] gap-x-2.5">
                            <div className="h-8 w-8 bg-primary rounded-md shrink-0 flex items-center justify-center font-gothic">
                                <span className="text-white font-semibold text-sm">BA</span>
                            </div>
                            <div className="flex flex-col font-medium text-grey">
                                <span className="text-[10px]">Welcome!</span>
                                <span className="text-lg leading-4">Bader Alobaidi</span>
                            </div>
                            <div>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.46967 8.46967C4.73594 8.2034 5.1526 8.1792 5.44621 8.39705L5.53033 8.46967L12 14.939L18.4697 8.46967C18.7359 8.2034 19.1526 8.1792 19.4462 8.39705L19.5303 8.46967C19.7966 8.73594 19.8208 9.1526 19.6029 9.44621L19.5303 9.53033L12.5303 16.5303C12.2641 16.7966 11.8474 16.8208 11.5538 16.6029L11.4697 16.5303L4.46967 9.53033C4.17678 9.23744 4.17678 8.76256 4.46967 8.46967Z" fill="#64646C" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleOpenNavbar}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#004a91" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>
                    </button>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;