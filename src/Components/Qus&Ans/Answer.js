import React from 'react';
import './Answer.css'
const Answer = () => {
    return (
        <div>
            <h2 className='ques'>How react work</h2>
            <ul>
                <li>React is a library that makes easy to connect with code easily </li>
                <li>It is a tool for make single page website as well as mobile app</li>
                <li>Its have Components which work as stalk of tree and can be connected with the main Components to show UI</li>
                <li>In react have a opportunity to use html with the power of javascript </li>
            </ul>
            <h2 className='ques'>props and data </h2>
            <ul>
                <li>props work for external work while state work as internal control according to the randers in component</li>
                <li>in state data can be set and change but props use to get the state's data and con not change</li>
                <li>state is mutable but props is immutable</li>

            </ul>


        </div>
    );
};

export default Answer;