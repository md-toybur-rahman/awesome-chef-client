import React from 'react';
import './MyBlog.css';
import Pdf from "react-to-pdf"
const MyBlog = () => {
    const Question = React.createRef();
    return (
        <div className='blog-container'>
            <h1 className='section-title'>Answer of All Require Question</h1>
            <div ref={Question}>

                <div className='blog'>
                    <h3><span className='highlight'>Question:</span> Differences between uncontrolled and controlled components.</h3>
                    <h4><span className='highlight'>Answer:</span> A control component is a component that is controlled by its parent component through props. They are called control components. And those components which are not controlled by any props or any other component are called uncontrolled components.</h4>
                </div>

                <div className='blog'>
                    <h3><span className='highlight'>Question:</span> How to validate React props using PropsTypes?</h3>
                    <h4><span className='highlight'>Answer:</span> Props are an important mechanism for passing the attributes to Other Components. Props validation is a tool that will help us to avoid future bugs and problems.React used PropsTypes that help us to catch bugs by validation data types of values passed through props.</h4>
                </div>

                <div className='blog'>
                    <h3><span className='highlight'>Question:</span> Difference between nodejs and express js.</h3>
                    <h4><span className='highlight'>Answer:</span> Node.js is not a framework and it's not a programming language. It's a runtime environment for executing JavaScript code outside of a browser. It's used for building back-end service. In other hand Express.js is a small framework. It's used to build web-apps. It's more powerful than Node.js</h4>
                </div>

                <div className='blog'>
                    <h3><span className='highlight'>Question</span>: What is a custom hook, and why will you create a custom hook?</h3>
                    <h4><span className='highlight'>Answer:</span> The hooks that we can create and use outside React's hooks are called Custom Hooks. It is a very powerful hook. Code repetition occurs when the same JavaScrip code is used in different components in React. Then a custom hook is used as a solution. The word 'use' must be used at the beginning of the hook name during creation</h4>
                </div>
                
            </div>
            <div className='d-flex justify-content-center'>
                <Pdf targetRef={Question} filename="Question-01.pdf">
                    {({ toPdf }) => <button className='custom-btn mt-4' onClick={toPdf}>Download Pdf</button>}
                </Pdf>
            </div>
        </div>
    );
};

export default MyBlog;