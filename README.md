Do you often find yourself converting text-based requirements or ideas into code? Manually translating text into code can be time-consuming and error-prone. In this tutorial, we will build a Text to Code Generator using Next.js, a popular React framework, to automate the process of generating code from text input.

Prerequisites
Before get started, make sure you have the following:
Node.js and npm installed on your machine.
Basic knowledge of JavaScript and React.
Familiarity with Next.js and its project structure.

Setting Up the Project

To start, let's create a new Next.js project and set up the necessary dependencies. Open your terminal and follow these steps:
Create a new Next.js project:
        npx create-next-app text-to-code-generator
Change into the project directory:
        cd text-to-code-generator
Install additional dependencies:
       npm install @monaco-editor/react 
          npm install next react react-dom @monaco-editor/react    
Open the package.json file and update the scripts section as follows:
        "scripts": { "dev": "next dev" },
Integrating Monaco Editor

The Monaco Editor is a powerful web-based code editor that we will use for our Text to Code Generator. Let's create a new component called CodeEditor that integrates with Monaco Editor. Open the file components/editor.jsx and add the following code:

import { useEffect } from 'react'; 
import { Editor } from '@monaco-editor/react';
 export default function CodeEditor({ editorRef }) {
 useEffect(() => { 
if (editorRef.current) { 
editorRef.current.focus(); } }, 
[]);
 return (
 <Editor 
height="40vh" 
fontSize="14px" 
theme="vs-dark" 
defaultLanguage="javascript" 
ref={editorRef} 
margin="auto"
 /> ); }

Here, we import the necessary dependencies and create a functional component CodeEditor. The useEffect hook ensures that the editor receives focus when it is rendered. The Editor component renders the Monaco Editor with customizable properties such as height, font size, theme, and default language.

Creating the User Interface

Now, let's build the user interface for our Text to Code Generator. Open the file pages/index.js and replace the existing code with the following:

import { useRef } from 'react';
import CodeEditor from '../components/editor';

export default function Home() {
  const editorRef = useRef(null);

  const handleGenerateCodeClick = () => {
    const textBoxValue = document.getElementById('textbox1').value;
    const selectedLanguage = document.getElementById('language').value;

    // Perform actions with textBoxValue and selectedLanguage
    alert('Entered Text: ' + textBoxValue);
    alert('Selected Language: ' + selectedLanguage);
  };

  return (
    <div className="container">
      <h1>Text to Code Generator</h1>
      <input type="text" id="textbox1" className="input-animation" placeholder="Enter your text" />
      <div>
        <select id="language" className="select-animation">
          <option value="">Select language</option>
          <option value="cpp">C++</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="javascript">JavaScript</option>
          <option value="php">PHP</option>
        </select>
      </div>
      <button id="generateButton" onClick={handleGenerateCodeClick}>Generate Code</button>
      <div className="edit">
        <CodeEditor editorRef={editorRef} />
        <br></br>
      </div>
    </div>
  );
}


In this code, we import the useRef hook and the CodeEditor component. We create a handleGenerateCodeClick function that retrieves the values from the text input and language selection elements and performs actions based on the user's input. The UI consists of a text input, a language selection dropdown, a "Generate Code" button, and the CodeEditor component.

Styling the User Interface:

To add some visual appeal to our Text to Code Generator, we can apply CSS styles. Create a new file called globals.css in the styles directory and add the following styles:

/* styles/globals.css */

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  text-align: center;
}

.input-animation {
  /* Add your animation styles here */
}

.select-animation {
  /* Add your animation styles here */
}

.edit {
  margin-top: 40px;
}


These styles define the appearance of the container, input elements, and the CodeEditor component. You can customize the styles to match your preferences. Running the Application
To run the Text to Code Generator, execute the following command in your terminal:

        npm run dev

Open your browser and navigate to http://localhost:3000. You should see the Text to Code Generator with the input elements and the code editor. Enter some text, select a language, and click the "Generate Code" button to see the alerts displaying the entered text and selected language.

Conclusion

now we have successfully built a Text to Code Generator using Next.js and Monaco Editor. This project automates the process of generating code from text input, making it more efficient and reducing the chances of manual errors. You can further enhance this project by integrating code generation logic based on the selected language or by adding additional features to the user interface.

Feel free to explore the complete source code of this project on GitHub. If you have any questions or feedback, please leave a comment below.

Happy coding!
By Worqhat

Youtube linkedin Instagram Github
