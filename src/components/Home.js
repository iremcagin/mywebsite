import React from "react";
import bg from "../images/daisy.webp";
import "../styles/home.css";
import Navbar from "./Navbar.js";

class Home extends React.Component{

    render(){
        return <div className="App">
            <Navbar />

            <div className="body-right">
                <img src={bg} className="bg" alt="background" />

                <div className="text">
                    <h1 className='text-baslik'>
                        <p className='text-shadow'>HELLO</p>
                        <p className='text-hello'>HELLO</p>
                    </h1>
                    
                    <p className='text-intro'>&nbsp;&nbsp;&nbsp;&nbsp;Let me introduce myself briefly. This is my second year at the Istanbul Technical University as a computer engineering student. I learned c, c++, java at school and this year, I realized that I enjoy front-end and back-end development. So, I am in a road to be a full stack developer. I improved my html, css, js skills and now, I am learning react, node.js, sql.</p>
                    <div className='text-tarih'><p >~ 12.08.2022</p></div>
                </div>
            </div>
        </div>;
    }
}

export default Home;