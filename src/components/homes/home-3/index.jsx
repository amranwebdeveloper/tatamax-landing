import FooterThree from "@/src/layout/footers/footer-3";
import HeaderThree from "@/src/layout/headers/header-3";
import React from "react";
import TestimonialArea from "../home-3/testimonial-area";
import BlogArea from "./blog-area";
import CardArea from "../../../common/card-area";
import CounterArea from "./counter-area";
import HeroArea from "./hero-area";
import WebsiteBuild from "./website-build";
import IntegrationArea from "./integration-area";
import RatedArea from "./rated-area";
import SalesArea from "../../../common/sales-area";
import ServiceArea from "./service-area";
import PaymentArea from "../home-2/payment-area";
import OpenAccountArea from "../home-2/open-account-area";
import PriceArea from "../../price/price-area";
import PaymentMethodArea from "../home-2/payment-method-area";
import FaqArea from "../home-2/faq-area";
import ProjectArea from "../home/project-area";
import Brand from "../../about/brand";
import TeamArea from "../home-4/team-area";
import ContactArea from "../home-4/contact-area";

const HomeThree = () => {
  return (
    <>
      <HeaderThree />
      <HeroArea />
      <CounterArea />
      <PaymentArea />
      <OpenAccountArea />
      <WebsiteBuild />
      <PriceArea />
      <PaymentMethodArea />
      <TestimonialArea />
      <FaqArea />
      <ProjectArea />
      <IntegrationArea />
      <Brand />
      <TeamArea />
      <BlogArea />
      <ContactArea />
      <FooterThree />
    </>
  );
};

export default HomeThree;
