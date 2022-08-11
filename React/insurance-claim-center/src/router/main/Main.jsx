import './main.css'
import Footer from '../../components/footer/Footer.jsx'
import { useState } from 'react';

function Main(){
    let [menu , setMenu] = useState(false);
    return (
        <div>
            <div className="mainPage">
                <header>
                    <h1><img src={require('../../images/logo.png')} alt="JAGUAR logo LAND ROVER log" /></h1>
                </header>
                <section>
                    <h2>
                        <mark>자기부담금</mark>
                        보험금 청구 센터
                    </h2>
                    <p>
                        고객이 부담한 자기부담금을<br/>
                        보상해 드리는 편리한 보험 신청 서비스
                    </p>
                    <div>
                        <div>
                            <strong>보험금 청구</strong>
                            <a href="login.html" className="moreBtn"><mark>바로가기</mark></a>
                            <svg width="168px" height="168px" viewBox="0 0 168 168" version="1.1" >
                                <title>자동차 아이콘</title>
                                <defs>
                                    <rect x="0" y="0" width="168" height="168"></rect>
                                </defs>
                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g>
                                        <g transform="translate(4.000000, 22.529297)">
                                            <g transform="translate(0.000000, 36.470703)">
                                                <path d="M21.8052687,61 C13.8231302,61 6.91738743,61 1.08804037,61 C-2.12691232,55.810236 1.71842325,38.3900631 13.4821812,32.0386839 C25.2459391,25.6873048 40.0892852,26.1454636 52.6949093,14.3022599 C65.3005334,2.45905616 76.484554,0 94.9305623,0 C113.376571,0 122.862624,4.34642738 135.659397,14.3022599 C142.280123,19.4531555 150.278101,22.7601689 159.65333,24.2233001 C164.523411,24.982135 168.114058,29.1765551 168.11322,34.1054008 L168.11322,57 C168.11322,59.209139 166.322359,61 164.11322,61 L153,61 L153,61" id="carBody01" stroke="#FFFFFF" strokeWidth="3"></path>
                                                <line x1="55" y1="61.5" x2="120" y2="61.5" id="carBody02" stroke="#FFFFFF" strokeWidth="3"></line>
                                                <g transform="translate(39.5, 58.5)">
                                                    <circle id="carWheel01" stroke="#FFFFFF" strokeWidth="3" cx="0" cy="0" r="16.5"></circle>
                                                </g>
                                                <g transform="translate(137.5, 58.5)">
                                                    <circle id="carWheel01" stroke="#FFFFFF" strokeWidth="3" cx="0" cy="0" r="16.5"></circle>
                                                </g>
                                            </g>
                                            <g id="line01" stroke="#FFFFFF" strokeWidth="3">
                                                <line x1="12.5" y1="0.970703125" x2="50.5" y2="0.970703125"></line>
                                                <line x1="0.5" y1="0.970703125" x2="9.5" y2="0.970703125"></line>
                                            </g>
                                            <g id="line02" transform="translate(0,18.000000)" stroke="#FFFFFF" strokeWidth="3">
                                                <line x1="12.5" y1="0.970703125" x2="50.5" y2="0.970703125"></line>
                                                <line x1="0.5" y1="0.970703125" x2="9.5" y2="0.970703125"></line>
                                            </g>
                                            <line x1="0" y1="122.5" x2="38.5996094" y2="122.5" id="line03" stroke="#FFFFFF" strokeWidth="3"></line>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <ul>
                        <li><a href="supportServiceCenter.html">지원서비스안내</a></li>
                        <li><a href="serviceCenter.html">고객센터</a></li>
                        <li><a href="FAQ01.html">FAQ</a></li>
                    </ul>
                </section>
                <nav>
                    <div className="mainManu maxWidth">
                        <ul>
                            <li className="active"><a href="#">home</a></li>
                            <li><a href="#">list</a></li>
                            <li><a href="#">search</a></li>
                            <li data-click="menu" onClick={()=>{
                                setMenu(true);
                                console.log(menu);
                            }}><a href="#">menu</a></li>
                        </ul>
                    </div>
                    <div className={"sideMenu " + (menu && 'active')} data-popup="menu">
                        <div>
                            <h2><a href="index.html">HOME</a></h2>
                            <ul data-click="drop" data-drop="one">
                                <li className="active">
                                    <a href="supportServiceCenter.html">지원 서비스 안내</a>
                                </li>
                                <li>
                                    <a href="#">보험금청구</a>
                                    <ul>
                                        <li><a href="claimDocument.html">필수 제출 서류 양식</a></li>
                                        <li><a href="claim.html">보험금 청구</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="serviceCenter.html">고객센터</a>
                                </li>
                                <li>
                                    <a href="FAQ01.html">FAQ</a>
                                </li>
                            </ul>
                            <button className="closeBtn" data-close="menu" onClick={()=>{
                                setMenu(false);
                            }}>close button</button>
                        </div>
                    </div>
                </nav>
            </div>
            <Footer />
        </div>
    )
}

export default Main;