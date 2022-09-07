import React from "react";
import FeelingProud from "../assets/avatar_svg/FeelingProud";
import Greeting from "../Containers/greeting/Greeting";
import Skills from "../Containers/intro/intro";
import Cloud from "../Containers/cloud/cloud"
function Home(props) {
    const theme = props.theme;
    return (
<>

<Greeting theme={theme} />
<Skills theme ={theme}/>
<Cloud theme ={theme}/>


</>

    );
}
export default Home;