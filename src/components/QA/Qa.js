import React from 'react';
import './Qa.css'

const Qa = () => {
    return (
        <div className='question-answer'>
            <div>
                <h5>1. How Does React Works?</h5>
                <p>Ans: One of the biggest advantages of using React is that you can infuse HTML code with JavaScript.
                Users can create a representation of a DOM node by declaring the Element function in React. The code below contains a combination of HTML and JavaScript:
                You may have noticed that the syntax of the HTML code above is similar to XML. That said, instead of using the traditional DOM class, React uses className.
                JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. The quotation marks in JSX attributes represent strings, similarly to JavaScript.
                In most cases, React is written using JSX instead of standard JavaScript to simplify components and keep code clean.</p>
            </div>
            <div>
                <h5>2. Write doen the Difference between props and state.</h5>
                <p>Ans: 
                Props: Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.
                State: The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.</p>
            </div>
            <div>
                <h5>3. Write down the Use of Use Effect hook works.</h5>
                <p>Ans: The useEffect Hook allows you to perform side effects in your components.
                Some examples of side effects are: fetching data, directly updating the DOM, and timers.
                useEffect accepts two arguments. The second argument is optional.
                useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.
                This is not what we want. There are several ways to control when side effects run.
                We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.</p>
            </div>
        </div>
    );
};

export default Qa;