import styled from "styled-components";
import Slider from "react-slick";
import { useState } from "react";

const StyledHotPosting = styled.div`
    margin: 20px auto 0;
    height: 150px;
    width: 91.3%;
    background-color: black;
    `;
const StyledInner = styled.Slider`
    width: 100%;
    height: auto;
    display: inline-block;
`;

function HotPosting(){

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        //pauseOnHover: true,
    };

    return(
        <StyledHotPosting>
            <Slider {...settings}>
                <img src="https://atimg.sonyunara.com/files/attrangs/new_banner/1659947116_0.jpg"/>
                <img src="https://atimg.sonyunara.com/files/attrangs/new_banner/1660384704_0.jpg.webp"/>
                <img src="https://atimg.sonyunara.com/files/attrangs/new_banner/1659947116_0.jpg"/>
            </Slider>
        </StyledHotPosting>
    );
}


export default HotPosting;