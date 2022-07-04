import React, { useState } from "react";
import ReactPlayer from 'react-player'
function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  function onChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange,
  };
}

export default function TextForm(props) {
  const inputProps = useInput();
  const [text, settext] = useState("Your Video Summary Here");
  return (
    <>
    <div className="container-fluid px-4 mt-4 ms-4 me-4 ">
  <div className="row gx-5 ">
    <div className="col">
     <div className="p-1">
     <h5>{props.heading}</h5>
          <input {...inputProps} className="form-control" placeholder="Enter your Link Here" />
          <div className="container mt-4">
          <ReactPlayer url={inputProps.value}/>
          </div>
      </div>
    </div>
    <div className=" col mt-4">
      <h5>Video Summary </h5>
      < div className="h-75 d-inline-block overflow-auto me-4">
        <p>
        Sad is the man who is asked for a story
and can't come up with one.

His five-year-old son waits in his lap.
Not the same story, Baba. A new one.
The man rubs his chin, scratches his ear.

In a room full of books in a world
of stories, he can recall
not one, and soon, he thinks, the boy
will give up on his father.


Already the man lives far ahead, he sees
the day this boy will go. Don't go!
Hear the alligator story! The angel story once more!
You love the spider story. You laugh at the spider.
Let me tell it!

But the boy is packing his shirts,
he is looking for his keys. Are you a god,
the man screams, that I sit mute before you?
Am I a god that I should never disappoint?

But the boy is here. Please, Baba, a story?
It is an emotional rather than logical equation,
an earthly rather than heavenly one,
which posits that a boy's supplications
and a father's love add up to silence.
<p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out
          qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan
          mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim
          qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic.
          Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
        </p>
    </div>
    <button type="button" className="btn mt-2 btn-primary">Copy to Clipboard</button>
    <button type="button" className="btn ms-4 mt-2 btn-primary">Download as text file</button>
  
    </div>
    </div>
    
  
   </div>
       
     
        
    </>
  );
}

/* 
 <div classNameName="container">
        <div classNameName='row'>
            < div classNameName="col-6" > 
                <h5>{props.heading}</h5>
                <input {...inputProps} classNameName="form-control" placeholder="Enter your Link Here" />
        
        
        </div>
        </div>
        </div>


const handleUpClick = () => {
  console.log("Uppercase was Clicked", text);
  let newtext = text.toUpperCase();
  settext(newtext);
};
const handleLoClick = () => {
  console.log("LowerCase was Clicked", text);
  let newtext = text.toLowerCase();
  settext(newtext);
};
const handleClearClick = () => {
  let newtext = "";
  settext(newtext);
};
const handleClearClickLink = () => {
  let newtext = "";
  setlink(newtext);
};
const handleorchange = (event) => {
  console.log("On change");
  settext(event.target.value);
};
const [text, settext] = useState("Enter your Text Here");
const [linktext, setlink] = useState("Enter your Link Here"); */