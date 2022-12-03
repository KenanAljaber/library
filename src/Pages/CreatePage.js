import { useRef, useState } from "react";
import { useAppContext } from "../Store/store";
import "../Styles/createPage.css"
const CreatePage = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [cover, setCover] = useState("");
    const [intro, setIntro] = useState("");
    const [completed, setCompleted] = useState(false);
    const [review, setReview] = useState("");
    const[warningMessage,setWarningMessage]=useState();
    const [warningStyle,setWarningStyle]=useState();
    const warningRef=useRef(null);
  
    const store = useAppContext();

    


  
    const inputStyles = {
      formContainer: {
        width: "400px",
        margin: "0 auto",
      },
      container: {
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        margin: "15px 0",
      },
      title: {
        fontSize: "16px",
        textAlign: "left",
      },
      input: {
        padding: "10px",
        borderRadius: "5px",
        fontSize: "16px",
      },
      spanImportant:{
        color: "red",
        fontSize: "1.2rem",
      },
    };
  
    function handleChange(e) {
      switch (e.target.name) {
        case "title":
          setTitle(e.target.value);
          break;
        case "author":
          setAuthor(e.target.value);
          break;
        case "intro":
          setIntro(e.target.value);
          break;
        case "completed":
          setCompleted(e.target.checked);
          break;
        case "review":
          setReview(e.target.value);
          break;
      }
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      
      const newBook = {
        id: crypto.randomUUID(),
        title,
        author,
        cover,
        intro,
        completed,
        review,
      };
      if ( checkBookDetails(newBook)){
        store.createItem(newBook)
        
        document.getElementById("form").reset();
        setTitle("");
        setAuthor("");
        setIntro("");
        setReview("");
        setCover("");
        warningRef.current.style.display="block";
        setWarningStyle("success");
        setWarningMessage("The book has been created successfully");
        setTimeout(()=>{
          warningRef.current.style.display="none";
        },2000);
       
      }else{
        setWarningMessage("Please make sure you filled the requierd info")
        setWarningStyle("warning");
        warningRef.current.style.display="block";
        setTimeout(()=>{
          warningRef.current.style.display="none";
        },2000);

      }
       
      
     

    }

    function checkBookDetails(book){
     return  !book.title || !book.author || !book.cover ? false: true;
    }
  
    function handleOnChangeFile(e) {
      const element = e.target;
      var file = element.files[0];
      var reader = new FileReader();
      reader.onloadend = function () {
        console.log("RESULT", reader.result);
        setCover(reader.result.toString());
      };
      reader.readAsDataURL(file);
    }
  
    return (
      
        <form id="form"  onSubmit={handleSubmit} style={inputStyles.formContainer}>
          <div className={warningStyle} ref={warningRef} >{warningMessage}</div>
          <div style={inputStyles.container}>
            <div style={inputStyles.title}>Title<span style={inputStyles.spanImportant}>*</span></div>
            <input id="titleInput"
              style={inputStyles.input}
              type="text"
              name="title"
              onChange={handleChange}
              value={title}
            />
          </div>
  
          <div style={inputStyles.container}>
            <div style={inputStyles.title}>Author<span style={inputStyles.spanImportant}>*</span></div>
            <input
              style={inputStyles.input}
              type="text"
              name="author"
              onChange={handleChange}
              value={author}
            />
          </div>
  
          <div style={inputStyles.container}>
            <div style={inputStyles.title}>Cover<span style={inputStyles.spanImportant}>*</span></div>
            <input type="file" name="cover" onChange={handleOnChangeFile} />
            <div>{!!cover ? <img src={cover} width="200" /> : ""}</div>
          </div>
  
          <div style={inputStyles.container}>
            <div style={inputStyles.title}>intro</div>
            <input
              style={inputStyles.input}
              type="text"
              name="intro"
              onChange={handleChange}
              value={intro}
            />
          </div>
  
          <div style={inputStyles.container}>
            <div style={inputStyles.title}>Completed</div>
            <input
              style={inputStyles.input}
              type="checkbox"
              name="completed"
              onChange={handleChange}
              value={completed}
            />
          </div>
  
          <div style={inputStyles.container}>
            <div style={inputStyles.title}>review</div>
            <input
              style={inputStyles.input}
              type="text"
              name="review"
              onChange={handleChange}
              value={review}
            />
          </div>
  
          <input
            type="submit"
            value="Register book"
            style={{
              padding: "15px 20px",
              minWidth: "200px",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#1e9638",
              color: "white",
              fontWeigth: "bolder",
              fontSize: "18px",
            }}
          />
        </form>
     

     );
}
 
export default CreatePage;