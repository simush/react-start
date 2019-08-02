    import React, { Component } from 'react'

   function Dialog(props) {
       return (
        <div className="Dialog">
            <button className="buttonStyle">OK</button>

          <div> {props.someText} </div>
        </div>
       );
   }

export default Dialog;