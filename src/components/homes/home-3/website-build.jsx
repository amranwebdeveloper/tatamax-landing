import LineShapTwo from '@/src/svg/line-shap-2';
import {gsap} from 'gsap';
import Link from 'next/link';
import Image from 'next/image';
import React, {useEffect} from 'react';

// import shape images
import shape_1 from "../../../../public/assets/img/hero/hero-circle-5-1.png";
import shape_2 from "../../../../public/assets/img/hero/hero-circle-5-2.png";
import shape_3 from "../../../../public/assets/img/hero/hero-circle-5-3.png";
import shape_4 from "../../../../public/assets/img/hero/hero-shape-5-1-1.png";
import shape_5 from "../../../../public/assets/img/hero/home-shape-1-1.png";
import shape_6 from "../../../../public/assets/img/hero/home-shape-1-2.png";
import secure from "../../../../public/assets/img/website-build/secure.png";
import security from "../../../../public/assets/img/website-build/security.png";
import support from "../../../../public/assets/img/website-build/support.png";
import modern_tech from "../../../../public/assets/img/website-build/modern-tech.png";
import hosting from "../../../../public/assets/img/website-build/hosting.png";


const WebsiteBuild = () => {
   useEffect(() => {
      let tl = gsap.timeline({default:{ease:"SlowMo.easeOut"}});
		tl.to(".hero-text-anim-2 i.child-2", {y: "0px", duration: .9, opacity:1, stagger:0.3, delay:.3});
   })

    return (
        <>
            <div className="tp-hero-area tp-hero-five__ptb-5 p-relative grey-bg-2 fix">
                  <div className="tp-hero-five__shape-2">
                     <Image src={shape_1} alt="theme-pure" />
                  </div>
                  <div className="tp-hero-five__shape-3">
                     <Image src={shape_2} alt="theme-pure" />
                  </div>
                  <div className="tp-hero-five__shape-4">
                     <Image src={shape_3} alt="theme-pure" />
                  </div>
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-5 order-2">
                           <div className="tp-hero-five-section-wrap">
                              <div className="tp-hero-five-section-box z-index">
                                 <h3 className="tp-hero-title-5 hero-text-anim-2">
                                    <i><i className="child-2">A Website <br /></i></i>
                                    <i>
                                       <i className="child-2">
                                          Built <span className="child-1 p-relative">in 7 Days
                                          <LineShapTwo />
                                          </span>
                                          <br />
                                       </i>
                                    </i>
                                    <i><i className="child-2"><span className="child-2">By Expert</span> for <br /></i></i>
                                    <i><i className="child-2"> You  </i></i>
                                 </h3>
                                 <p className="wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">Only £99+VAT one time fee and <br />then just £5.99/month.</p>
                              </div>
                              <div className="tp-hero-five-btn-box d-flex align-items-center wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                                 <Link className="tp-btn-blue-lg purple-bg circle-effect mr-15 mb-20" href="/">Get Started</Link>
                                 <Link className="tp-btn-grey mb-20" href="/service-details">Try a Damo</Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="tp-hero-five-2-thumb-main p-relative">
                     <div className="tp-hero-secure">
                        <Image src={secure} alt="theme-pure" />
                     </div>
                     <div className="tp-hero-security">
                        <Image src={security} alt="theme-pure" />
                     </div>
                     <div className="tp-hero-support">
                        <Image src={support} alt="theme-pure" />
                     </div>
                     <div className="tp-hero-modern_tech">
                        <Image src={modern_tech} alt="theme-pure" />
                     </div>
                     <div className="tp-hero-hosting">
                        <Image src={hosting} alt="theme-pure" />
                     </div>
                  </div>
               </div>
        </>
    );
};

export default WebsiteBuild;