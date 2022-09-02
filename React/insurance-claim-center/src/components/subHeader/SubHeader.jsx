import React from 'react';
import { useState } from 'react';
import './subHeader.css';

const SubTitle = () => {
    let [scrolBool , setScrollBool] = useState(false)
    function scrollEvent(){
        window.addEventListener('scroll' , (e)=>{
            document.querySelector('html').scrollTop > 0 ? setScrollBool(true) : setScrollBool(false);
        })
    }
    let menuList = [
        {href : '#program' , maneName : '프로그램안내'},
        {href : '#condition' , menuName : '보상조건'},
        {href : '#offerPeriod' , menuName : '서비스 제공기간'},
        {href : '#limit' , menuName : '보상 한도'},
        {href : '#submission' , menuName : '필수 제출 서류'},
        {href : '#procedure' , menuName : '자기부담금 지급 절차'},
        {href : '#way' , menuName : '서류 제출 방법'},
        {href : '#notCompensated' , menuName : '보상하지 않는 손해'}
    ]
    scrollEvent();
    return (
        <header className={"BGColor " + (scrolBool && 'active')}>
            <h1 className="hiddenTitle">보험 중계 청구 센터</h1>
            <div className="contentWidth">
                <a href="#" data-click="backPage">이전 페이지</a>
                <h2>지원서비스 센터</h2>
            </div>
            <nav className="maxWidth">
                {/* <ul>
                    <li className="active"><a href="#program">프로그램안내</a></li>
                    <li><a href="#condition">보상조건</a></li>
                    <li><a href="#offerPeriod">서비스 제공기간</a></li>
                    <li><a href="#limit">보상 한도</a></li>
                    <li><a href="#submission">필수 제출 서류</a></li>
                    <li><a href="#procedure">자기부담금 지급 절차</a></li>
                    <li><a href="#way">서류 제출 방법</a></li>
                    <li><a href="#notCompensated">보상하지 않는 손해</a></li>
                </ul> */}
                <ul>
                    {menuList.map((m)=>{
                        return(
                            <li><a href={m.href}>{m.menuName}</a></li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    );
};

export default SubTitle;