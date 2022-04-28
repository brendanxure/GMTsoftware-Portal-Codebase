import React, { useState } from "react";
import Message from "./message";
import "./style.css";

function UploadAndDisplayImage() {
  const [name, setName] = useState("");
  const [cover, setCover] = useState();
  const [message, setMessage] = useState("");

  const newBook = () => {
    const uploadData = new FormData();
    uploadData.append("name", name);
    uploadData.append("cover", cover, cover.name);

    fetch("https://portal.gmtsoftware.tech/books/", {
      method: "POST",
      body: uploadData,
    })
      .then(() => setMessage("File Uploaded"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <div className="card submit">
        <div className="card-body">
          <div className="signup-container">
            <div className="mx-auto">
              <h2 className="text-center mx-auto reg">
                Submit Project Solution
              </h2>
              <div className="mb-1">
                {message ? <Message msg={message} /> : null}
              </div>
              <div className="mb-1">
                <label>Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(evt) => setName(evt.target.value)}
                />
              </div>
              <br />
              <label>
                {cover ? "File Attached please click Upload" : "Upload Project"}
              </label>
              <br />
              <input
                type="file"
                onChange={(evt) => setCover(evt.target.files[0])}
              />
              <div className="mt-2">
                <button className="btn btn-primary" onClick={() => newBook()}>
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadAndDisplayImage;

// import { useState } from "react";

// import axios from "axios";

// const Card = (uploadFile) => {
//   return { File: uploadFile };
// };

// function UploadAndDisplayImage() {
//   const [uploadFile, setUploadFile] = useState({ File: null });

//   console.log(uploadFile);
//   const uploadHandler = (e) => {
//     e.preventDefault();
//     let form_data = new FormData();
//     form_data.append("File", , uploadFile.name);

//     axios
//       .post(
//         `http://127.0.0.1:8000/portaluser/Image/`,
//         form_data,

//         {
//           headers: {
//             "content-type": "multipart/form-data",
//           },
//
//         }
//       )
//       .then(() => {
//
//       })
//       .then((err) => {
//         if (err.response.status === 500) {
//           console.log("there was a problem with the server");
//         } else {
//           console.log(err.response.data.msg);
//         }
//       });
//   };

//   const handleFileReader = (event) => {
//     setUploadFile({ ...uploadFile, File: event.target.files[0] });
//   };

//   return (
//     <div>
//       <div className="card">
//         <div className="card-body">
//           <div className="signup-container">
//             <div className="mx-auto">
//               <h2 className="text-center mx-auto reg">Submit Assessment</h2>
//               <label>
//                 Instruction: Please Indicate your name in the Project Solution
//               </label>
//               <div classname="mb-1">
//
//               </div>
//               <form
//                 className="signup-form"
//                 onSubmit={uploadHandler}
//                 method="post"
//               >
//                 <div className="mb-3">
//                   <input
//                     onChange={handleFileReader}
//                     type="file"
//                     accept="image/png, image/jpeg"
//                   />
//                 </div>
//

//                 <button type="submit" className="btn btn-primary form-control">
//                   Upload File
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UploadAndDisplayImage;
