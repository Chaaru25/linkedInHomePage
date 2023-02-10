import React, { useEffect, useState } from "react";
import axios from "axios";
import { profileAPIUrl } from "../utils";
import ProfileList from "./profileList";


function LandingPage({ setSingleProfile }) {
    const [profileList, setProfileList] = useState([]);

    useEffect(() => {
        axios.get(profileAPIUrl).then((response) => {
            console.log("response", response.data.users);
            setProfileList(response.data.users);
            localStorage.setItem("userList", JSON.stringify(response.data.users));
        }).catch(e => {
            console.log("erroe", e)
        });
    }, [])

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#85C1E9",
                    height: "100vh"
                }}>
                <div
                    style={{
                        height: "67vh",
                        width: "40vw",
                        background: "white",
                        borderRadius: "35px 35px 35px 35px"
                    }}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "20%",
                            background: "#f7f7f7",
                            borderRadius: "35px 35px 0px 0px"
                        }}>
                        <p
                            style={{
                                fontWeight: "bold",
                                fontSize: "25px",
                                fontColor: "black"
                            }}>
                            Select an account
                        </p>
                    </div>
                    <div
                        style={{
                            height: '50vh',
                            overflow: 'hidden scroll'
                        }}>
                        {profileList && profileList.length !== 0 ? profileList.map(ele => {
                            return (<ProfileList key={ele.id} profile={ele} setSingleProfile={setSingleProfile} />)
                        }
                        ) : null
                        }
                    </div>


                </div>
            </div>
        </>
    )
}
export default LandingPage;