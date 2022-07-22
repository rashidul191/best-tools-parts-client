import React from "react";

const Blogs = () => {
  return (
    <div className="m-20">
      <div className="mb-2">
        <h2 className="text-2xl font-bold">
          Question 1: How will you improve the performance of a React
          Application
        </h2>
        <p className="text-xl">
          <span className="text-yellow-500 font-bold">Ans:</span> Optimizing
          application performance is key for developers who are conscious of
          keeping users engaged and engaged with an app to keep the user
          experience positive.
          <br />
          According to Akamai's research, a second delay conversion can reduce
          load time by 7 percent, making it imperative for developers to create
          apps with optimized performance.
          <br />
          In React apps, we ensure a very fast UI by default. However, as an
          application grows, developers may encounter some performance issues.
          <br />
          Before optimizing a React application, we must understand how React
          updates its UI and how to measure an app's performance. This makes it
          easy to troubleshoot any response performance issues.
        </p>
      </div>

      <div className="mb-3">
        <h2 className="text-2xl font-bold">
          Question 2 : What are the different ways to manage a state in a React
          application?
        </h2>
        <p className="text-xl">
          <span className="text-yellow-500 font-bold">Ans:</span>
          The built-in way React provides to set component state is by using
          setState() and adding "local state" to a class. There are several
          other ways to manage state in React, including using:
          <br />
          <ul>
            <li>Hooks</li>
            <li>React context API</li>
            <li>Apollo Link State</li>
            <li>We will, however, focus on using the setState() method.</li>
          </ul>
          using setState() The built-in setState() method updates the value of a
          variable in the class's local store. This local store allows updated
          variable values ​​to be accessed by any function that may need these
          values.
          <br />
          setState() returns that this element and its children (sometimes
          delayed and grouped into a single batch) should be re-rendered with
          the most updated state; This re-render is often based on events
          triggered by the user.
          <br />
          Sample React app using setState()
        </p>
      </div>

      <div className="mb-3">
        <h2 className="text-2xl font-bold">
          Question 3: How does prototypical inheritance work
        </h2>
        <p className="text-xl">
          <span className="text-yellow-500 font-bold">Ans:</span> JavaScript
          objects are dynamic "bags" of properties (referred to as properties).
          JavaScript objects have links to a prototype object. When attempting
          to access a property of an object, the property will be searched not
          only on the object but also on the object's prototype, the prototype
          of the prototype, and so on until a property with a matching name is
          found or terminated. The prototype chain has been reached.
          <br />
          Prototypal inheritance is a feature of JavaScript used to add methods
          and properties to objects. It is a method by which an object can
          inherit the properties and methods of another object. Traditionally,
          to get and set the of an object, we use Object.getPrototypeOf and
          Object
        </p>
      </div>
      <div className="mb-3">
        <h2 className="text-2xl font-bold">
          Question 4: What is a unit test? Why should write unit tests
        </h2>
        <p className="text-xl">
          <span className="text-yellow-500 font-bold">Ans:</span> The main
          purpose of unit testing is to test written code in isolation and
          determine whether it works as intended. Unit testing is an important
          step in the development process because, if done correctly, it can
          help identify early errors in code that may be more difficult to find
          in later testing phases.
          <br />
          A unit test usually consists of three steps: planning, case and
          scripting, and the unit test itself. In the first step, unit tests are
          prepared and reviewed. The next step is to create test cases and
          scripts, then the code is tested.
          <br />
          Test-driven development requires developers to write failing unit
          tests first. Then they write code and refactor the application until
          it passes tests. TDD generally results in a clear and predictable code
          base.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
