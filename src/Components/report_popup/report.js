import React from 'react';
import { Spring } from 'react-spring/renderprops';
import './report.css';
import firebase from '../firebase';

export default class Report extends React.Component{
    Up(){
        let count = 0;
        let ref = firebase.database().ref();
        ref.on("child_added", snap => {
            count++;
        });


        let x, y;
        navigator.geolocation.getCurrentPosition((position) => {
            x = position.coords.latitude;
            y = position.coords.longitude;

            firebase.database().ref().child('Marker'+count).set({
                x: x,
                y: y
            })
        })

    }

    render(){
        return (
            <>
                <Spring
                    from={{opacity:0, marginTop: window.innerHeight/2}}
                    to={{opacity:1, marginTop: -61.5*window.innerHeight/100}}
                    config={{duration:1000}}
                >
                {props => (
                    <div style={props} className="report">
                        <div>
                            <h1>Welcome to the Report Page</h1>
                            <p>To report a fire, please input your email below and a photo of the fire.</p>
                            <form id="form-email">
                                <input type="text" id="email" name="email" defaultValue="someone@example.com"></input>
                            </form>
    
                            <input type="file" id="real-file" onChange={(e) => {
                                let files = e.target.files;
                                let reader = new FileReader();
                                document.getElementById("custom-text").innerHTML = files.item(0).name;
                                reader.readAsDataURL(files[0]);
                            }}
                                hidden="hidden" ref={fileInput => this.fileInput=fileInput}/>
                            <button type="button" id="custom-button" onClick={() => this.fileInput.click()}>CHOOSE A FILE</button>
                            <span id="custom-text">No file chosen, yet.</span><br />
                            <button type="bnpm sutton" id="upload-button" onClick={() => this.Up()}>Upload</button>
                        </div>
                    </div>
                )}
                </Spring>
            </>
        )
    }
}
