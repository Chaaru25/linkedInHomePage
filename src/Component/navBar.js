import { Button } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import map from '../Component/map.png'

const NavBar = ({ singleProfile }) => {

    const navigate = useNavigate();
    const [navType, setNavType] = useState("Profile");
    const [isToggle, setIsToggle] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const navTypeArr = ["Profile", "Post", "Gallery", "To Do"];
    const userList = JSON.parse(localStorage.getItem("userList"));
    const userName = userList.slice(0, 2);

    const onClickHandler = (type) => {
        setNavType(type);
    }
    const signoutHandler = () => {
        navigate('/')
    }
    const onClickToggle = () => {
        setIsToggle(!isToggle)
    }
    const onClickChatOpen = () => {
        setIsChatOpen(!isChatOpen)
    }


    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'inherit',
                background: 'grey',
                position: 'relative'
            }}>
            <div style={{
                display: 'flex',
                height: '95vh',
                width: "20%",
                background: "#4054C8",
                borderRadius: '35px',
                margin: '50px 10px 50px 50px',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <div>

                    {navTypeArr.map(ele => {
                        return <p
                            style={{
                                fontSize: '25px',
                                color: 'white',
                                marginTop: '10px',
                                margin: '30px 0px 30px 0px',
                                alignItems: 'center'
                            }}
                            onClick={() => onClickHandler(ele)}>{ele}<hr /></p>

                    })}


                </div>
            </div>

            <div
                style={{
                    color: '#545454',
                    height: '95vh',
                    width: "80%",
                    background: 'white',
                    margin: '50px'
                }}>
                <div>
                    <div
                        style={{
                            color: '#545454',
                            display: 'flex',
                            justifyContent: 'space-between',
                            fontSize: '24px',
                            margin: '10px 20px 10px 20px'
                        }}>
                        <p style={{ fontWeight: 'bold' }}>
                            {navType}
                        </p>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginLeft: "50px",
                                position: 'relative'
                            }}>
                            <img onClick={onClickToggle} style={{ height: '40px', width: '40px', borderRadius: '50%' }} src={singleProfile.profilepicture} />
                            <p style={{ marginLeft: '20px' }}>{singleProfile.name}</p>

                            {isToggle ?

                                <div className='card'
                                    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '40px', height: '450px', width: '350px', background: '#FFFFFF', borderRadius: '35px', position: 'absolute', top: '30px', right: '-40px' }}>
                                    <img style={{ height: '100px', width: '100px', borderRadius: '50%' }} src={singleProfile.profilepicture} />
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 'left', lineHeight: '0.2px' }}>
                                        <p>{singleProfile.name}</p>
                                        <p>{singleProfile.email}</p>
                                    </div>
                                    {userName && userName.map(ele => {
                                        return (
                                            <div style={{ fontSize: '18px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderTop: '1.2px solid #eee', minWidth: '80%', }}>
                                                <img style={{ height: '40px', width: '40px', borderRadius: '50%' }} src={ele.profilepicture} />
                                                <p style={{ marginLeft: '20px' }}>{ele.name}</p>
                                            </div>
                                        )

                                    })}

                                    <Button onClick={signoutHandler}
                                        style={{ marginTop: '15px', fontWeight: 'bold', height: '10%', width: '30%', borderRadius: '20px', background: '#D55151' }}>Sign Out</Button>
                                </div>

                                : null}

                        </div>

                    </div>

                </div>
                <hr />
                {navType == "Profile" ?
                    <div style={{ display: 'flex', height: '95vh' }}>

                        <div style={{ height: 'inherit', width: '40%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '2px solid #eee' }}>
                            <div style={{ margin: '30px', height: '90vh', lineHeight: '17px' }}>
                                <img style={{ height: '200px', width: '200px', borderRadius: '50%' }} src={singleProfile.profilepicture} />
                                <p style={{ margin: '20px', fontSize: '29px', fontWeight: 'bold' }}>{singleProfile.name}</p>
                                <div style={{ alignItems: 'center', justifyContent: 'center' }}>

                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                        <p style={{ marginRight: '10px', fontSize: '20px', color: '#9A9A9A', width: '30%' }}>Username</p>
                                        <p style={{ width: '20%' }}>:</p>
                                        <p style={{ color: 'black', fontSize: '22px', width: '50%', color: '#283747' }}>{singleProfile.username}</p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                        <p style={{ marginRight: '10px', fontSize: '20px', color: '#9A9A9A', width: '30%' }}>e-mail</p>
                                        <p style={{ width: '20%' }}>:</p>
                                        <p style={{ color: 'black', fontSize: '22px', width: '50%', color: '#283747' }}>{singleProfile.email}</p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                        <p style={{ marginRight: '10px', fontSize: '20px', color: '#9A9A9A', width: '30%' }}>Phone</p>
                                        <p style={{ width: '20%' }}>:</p>
                                        <p style={{ color: 'black', fontSize: '22px', width: '50%', color: '#283747' }}>{singleProfile.phone}</p>
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                        <p style={{ marginRight: '10px', fontSize: '20px', color: '#9A9A9A', width: '30%' }}>Website</p>
                                        <p style={{ width: '20%' }}>:</p>
                                        <p style={{ color: 'black', fontSize: '22px', width: '50%', color: '#283747' }}>{singleProfile.website}</p>
                                    </div>
                                    <hr />
                                    <h2 style={{ marginLeft: '100px' }}> Company</h2>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                        <p style={{ marginRight: '10px', fontSize: '20px', color: '#9A9A9A', width: '30%' }}>Name</p>
                                        <p style={{ width: '20%' }}>:</p>
                                        <p style={{ color: 'black', fontSize: '22px', width: '50%', color: '#283747' }}>{singleProfile.company.name}</p>
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                        <p style={{ marginRight: '10px', fontSize: '20px', color: '#9A9A9A', width: '30%' }}>catchPhrase</p>
                                        <p style={{ width: '20%' }}>:</p>
                                        <p style={{ color: 'black', fontSize: '22px', width: '50%', color: '#283747' }}>{singleProfile.company.catchPhrase}</p>
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                        <p style={{ marginRight: '10px', fontSize: '20px', color: '#9A9A9A', width: '30%' }}>bs</p>
                                        <p style={{ width: '20%' }}>:</p>
                                        <p style={{ color: 'black', fontSize: '22px', width: '50%', color: '#283747' }}>{singleProfile.company.bs}</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div style={{ margin: '20px', height: 'inherit', width: '25%' }}>
                            <h2 style={{ marginLeft: '0px' }}>Address :</h2>
                            <div style={{ marginRight: '10px' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                    <p style={{ marginRight: '10px', fontSize: '20px', color: '#9A9A9A', width: '30%' }}>Street</p>
                                    <p style={{ width: '20%' }}>:</p>
                                    <p style={{ color: 'black', fontSize: '22px', width: '50%', color: '#283747' }}>{singleProfile.address.suite}</p>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                    <p style={{ marginRight: '10px', fontSize: '20px', color: '#9A9A9A', width: '30%' }}>City</p>
                                    <p style={{ width: '20%' }}>:</p>
                                    <p style={{ color: 'black', fontSize: '22px', width: '50%', color: '#283747' }}>{singleProfile.address.city}</p>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                    <p style={{ marginRight: '10px', fontSize: '20px', color: '#9A9A9A', width: '30%' }}>ZipCode </p>
                                    <p style={{ width: '20%' }}>:</p>
                                    <p style={{ color: 'black', fontSize: '22px', width: '50%', color: '#283747' }}>{singleProfile.address.street}</p>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}></div>

                                <img style={{ borderRadius: '30px' }} src={map} />
                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <div style={{ width: '30%', display: 'flex', justifyContent: 'space-between' }}>
                                        <p>Lat:{singleProfile.address.geo.lat}</p>
                                        <p>Lon:{singleProfile.address.geo.lng}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    : <div style={{ height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <p style={{ fontWeight: 'bold', fontSize: '105px', color: '#F2F3F4 ' }}>Comming Soon</p>
                    </div>

                }
                <div style={{ width: '300px', background: '#F2F3F4', position: 'absolute', right: '80px', bottom: '60px', borderRadius: '15px 15px 0px 0px' }}>
                    <div style={{ background: '#2E86C1', height: '60px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', borderRadius: '15px 15px 0px 0px' }}>
                        <p>Chats</p>
                        {isChatOpen ? <i onClick={onClickChatOpen} class="arrow down"></i>
                            :
                            <i onClick={onClickChatOpen} class="arrow up"></i>}


                    </div>
                    {isChatOpen ?
                        <div style={{ display: 'block', background: '#F8F9F9', height: '250px', alignItems: 'center', overflow: 'hidden scroll' }}>
                            {userList && userList.length !== 0 && userList.map(ele =>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img style={{ height: '45px', width: '45px', borderRadius: '50%' }} src={ele.profilepicture} />
                                    <p style={{ margin: '20px', fontSize: '19px', fontWeight: 'inherit' }}>{ele.name}</p>
                                    <p style={{ height: '10px', width: '10px', borderRadius: '50%', background: 'green' }}></p>
                                </div>
                            )}

                        </div>
                        :
                        null}
                </div>
            </div>
        </div>



    );
};

export default NavBar;