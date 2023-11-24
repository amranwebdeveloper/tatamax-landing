import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// img import
import  shapes_1 from "../../../../public/assets/img/payment/qrcode.png" ;
import  shapes_2 from "../../../../public/assets/img/payment/mobile.png" ;
import  shapes_3 from "../../../../public/assets/img/payment/hand.png" ;
import  shapes_4 from "../../../../public/assets/img/payment/coin-1.png" ;
import  shapes_5 from "../../../../public/assets/img/payment/coin-2.png" ;
import  shapes_6 from "../../../../public/assets/img/payment/payment-3.png" ;
import  shapes_7 from "../../../../public/assets/img/payment/message.png" ;
import  bg_img from "../../../../public/assets/img/payment/background.png" ;
import  payment_img_1 from "../../../../public/assets/img/payment/image.png" ;
import  payment_img_2 from "../../../../public/assets/img/payment/get-paid.png" ;


const payment_content = {
    title: <>Here, we embrace the challenge to drive each other to <br />excellence by enriching our own capabilities.</>,
    sub_title: <>WE ENVISION WITH A MISSION</>,
    box_1: [
        {
            id: 1,
            col: "md-6",
            cls: "2 tpfadeLeft",
            delay: ".3s",
            title: "We have a unique combination of talents",
            des: <>motivated by ambitious goals and a can-do attitude. Our drive to develop excellent products is built on teamwork, passion, and giving team members full control over their work to succeed on their own. We want to create an environment where ideas can flourish.</>,
            shapes: [
                {
                    id: 2,
                    cls: "5",
                    img: shapes_2,
                },
                {
                    id: 4,
                    cls: "7",
                    img: shapes_4,
                },
                {
                    id: 5,
                    cls: "8",
                    img: shapes_5,
                },
            ]

        },
        {
            id: 2,
            col: "md-6",
            cls: "3 tpfadeRight",
            delay: ".5s",
            title: "We dream, design, develop, and dare to",
            des: <>challenge the status quo and make a difference. We strive to develop a rich culture by expanding our horizons and bringing you ideas outside of the boxk</>,
            shapes: [
                {
                    id: 1,
                    cls: "9",
                    img: shapes_6,
                },

            ]

        },



    ],
    box_3_title: <>Online Billing & <br /> Invoicing Payments.</>,
    box_3_des: <>Get paid faster with Online Invoicing <br /> and the Virtual Terminal.</>,
    box_3_btn: "Explore Invoicing Tools",

}
const {title, sub_title, box_1, box_3_title, box_3_des, box_3_btn}  = payment_content

const PaymentArea = () => {
    return (
        <>
        <div id="payment-method" className="tp-payment__area pt-110 pb-110">
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-xl-12">
                        <h2 className="tp-payment__Vision_visionTitle">our vision</h2>
                        <div className="tp-payment__title-box z-index-3 mb-55">
                           <p>{sub_title}</p>
                           <h3 className="tp-section-title-6">{title}</h3>
                        </div>
                     </div>
                  </div>
                  <div className="row justify-content-center">

                     <div className="col-xl-12">
                        <div className="row">

                            {box_1.map((item, i)  =>
                                <div key={i} className="col-md-6 mb-30">
                              <div className={`tp-payment__item tp-payment__bg-color-${item.cls} p-relative z-index wow `}
                                    data-wow-duration=".9s"
                                    data-wow-delay={item.delay}>
                                 {item.shapes.map((item, i)  =>
                                    <div key={i} className={`tp-payment__shape-${item.cls}`}>
                                        <Image src={item.img} alt="theme-pure" />
                                    </div>
                                 )}

                                <div className="tp-payment__content">
                                    <h3 className="tp-payment__title">{item.title}</h3>
                                    <p> {item.des}</p>
                                 </div>

                              </div>
                           </div>
                                )
                            }
                        </div>
                     </div>

                     {/* <div className="col-xl-12 mb-30">
                        <div className="tp-payment__item p-relative z-index wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                           <div className="tp-payment__shape-1">
                              <Image src={bg_img} alt="theme-pure" />
                           </div>
                           <div className="row">
                              <div className="col-md-6">
                                 <div className="tp-payment__content tp-payment__content-space">
                                    <h3 className="tp-payment__title">{box_3_title}</h3>
                                    <p>{box_3_des}</p>
                                    <Link href="/service-details">{box_3_btn}<i className="far fa-arrow-right"></i></Link>
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="tp-payment__shape-2">
                                    <Image src={payment_img_1} alt="theme-pure" />
                                 </div>
                                 <div className="tp-payment__shape-3 d-none d-sm-block">
                                    <Image src={payment_img_2} alt="theme-pure" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div> */}

                  </div>
               </div>
            </div>

        </>
    );
};

export default PaymentArea;