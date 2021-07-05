import React from 'react'
import './PopUp.css'



export const PopUpWidget = () => {

    function openForm() {
        document.querySelector('.open-button').style.display = "none";
        document.getElementById("myForm").style.display = "block";
    }

    function closeForm() {
        document.getElementById("myForm").style.display = "none";
        document.querySelector('.open-button').style.display = "block";
    }

    function submit() {
        let message = document.querySelector('#message');
        let input = document.querySelector('.file');
        let size;
        try {
            size = input.files[0].size;    
        } catch (error) {
            // console.log("File not uploaded error");
            message.innerHTML = "Please upload your image first."
            return;
        }
        

        if(input.value && size/1024 <= 5120){
            document.getElementById("myForm").style.display = "none";
            document.querySelector('.open-button').style.display = "none";
            document.querySelector('.alert').style.display = 'block';
        }
        else{
            if(!input.value)
                message.innerHTML = "Please upload your image first."
            else{
                message.innerHTML = "Please upload image of size upto 5MB."
                return;
            }
            
        }
    }

    function fileName(){
        var inputfile = document.querySelector('.file');
        
        
        var filename1 = inputfile.value.replace(/^.*[\\]/, '');
        var label1 = document.querySelector('#name');
        label1.innerHTML = filename1;
        // console.log("Uploaded file : " + filename1);
    }


    return (
        <div>
            
            <button className="open-button" onClick = { openForm } >KYC Update</button>
            <div className="form-popup" id="myForm">
                <form action="" className="form-container">
                    <h1>Upload your ID</h1>

                    <div className="file-input">
                        <input type="file" id="file" className="file" accept="image/*" required onChange={fileName}  />
                        <label htmlFor="file" id="name">
                        <i className="bi bi-card-image"></i> Choose your image
                            <p className="file-name"></p>
                        </label>
                    </div>
                    <p><small>Upload .JPG/.JPEG/.PNG file and no more than 5 MB</small></p>
                    <p><span id="message"></span></p>
                    
                    <img src="Correct.jpg" alt="Correct way to upload document" height="130px" width = "210px" id="demo-img"/>
                    <button type="button" className="btn submit" onClick={submit}>Submit</button>
                    <button type="button" className="btn cancel" onClick={ closeForm }>Close</button>
                    <p><small>This information is used for identification only, and will be kept secure.</small></p>
                </form>
            </div>
        </div>
        
    )
}
