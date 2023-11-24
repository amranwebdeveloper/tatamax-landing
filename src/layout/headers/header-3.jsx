import useSticky from '@/src/hooks/use-sticky';
import Offcanvus from '@/src/common/offcanvus';
import Link from 'next/link';
import React,{useState} from 'react';
import NavMenu from './nav-menu';
import Image from 'next/image';


import logo from "../../../public/assets/img/logo/logo-black.png"

const HeaderThree = () => {

    const {sticky} = useSticky()
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
        <header className="tp-header-height">
            <div id="header-sticky" className={`"header-bottom__area header__space header-sticky-bg-2 header-bottom__transparent z-index-5 ${sticky && "header-sticky"}`}>
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-6">
                        <div className="header-bottom__logo">
                           <Link href="/">TATAMAX</Link>
                        </div>
                     </div>
                     <div className="col-xxl-6 col-xl-6 col-lg-6 d-none d-lg-block">
                        <div className="header-bottom__main-menu header-bottom__main-menu-3">
                           <nav id="mobile-menu">
                              <NavMenu />
                           </nav>
                        </div>
                     </div>
                     <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-8 col-6">
                        <div className="header-bottom__right d-flex align-items-center justify-content-end">
                           <div className="header-bottom__action">
                              <Link className="d-none d-lg-inline-block header-bottom__action-2 border-none" href="/register">
                                 <span>Log In</span>
                              </Link>
                           </div>
                           <div className="header-bottom__btn d-flex align-items-center">
                              <Link className="tp-btn-blue-sm d-none d-md-inline-block tp-btn-hover alt-color-black" href="/service-details">
                                 <span>Get Free</span>
                                 <b></b>
                              </Link>
                              <a className="header-bottom__bar tp-menu-bar d-lg-none" onClick={()  => setSidebarOpen(true)}><i className="fal fa-bars"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <Offcanvus sidebarOpen={sidebarOpen}  setSidebarOpen={setSidebarOpen} />


        </>
    );
};

export default HeaderThree;