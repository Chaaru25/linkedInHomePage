import React from "react";
import { useNavigate } from "react-router-dom";

function ProfileList(props) {
    const { profile, setSingleProfile } = props;
    const navigate = useNavigate()
    const onClickHandler = (profile) => {
        setSingleProfile(profile)
        navigate('/homePage')
    }

    return (

        <div onClick={() => onClickHandler(profile)}
            style={{
                display: "flex", justifyContent: "left", alignItems: "center", marginLeft: "50px", borderBottom: "1px solid #eee",
                fontSize: "22px", color: '#5D6D7E'
            }}>
            <img style={{ height: "35px", width: "35px", borderRadius: "50%" }}
                src={profile.profilepicture} alt="No Profile Image" />
            <p style={{ marginLeft: "10px" }}> {profile.name}
            </p>

        </div>

    )
}
export default ProfileList;