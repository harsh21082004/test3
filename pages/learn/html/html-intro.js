import React, { useState, useContext } from 'react';
import styles from '@/styles/Html.module.css';
import Footer from '../../footer';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ThemeContext } from '../../context/themeContext';

import Html from './html';
import data from './html.json';
import AceEditor from "react-ace";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark, docco, zTouch } from "react-syntax-highlighter/dist/cjs/styles/prism";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import { LuCopy } from 'react-icons/lu';

const HtmlIntro = () => {
  const { theme } = useContext(ThemeContext);

  const [currentIndex, setCurrentIndex] = useState(1);

  const router = useRouter();


  const handleNext = () => {
    if (currentIndex < data.myObj.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      // If you're on the first page, navigate to your home component
      // You can replace '/home' with the actual URL of your home component
      router.push('/learn');
    }
  };

  const handleCopyClick = () => {
    // Copy the code to the clipboard
    const el = document.createElement("textarea");
    el.value = code;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopyText("Copied");

    setTimeout(() => {
      setCopyText("Copy");
    }, 2000);
  };

  const [code, setCode] = useState(
    '<!DOCTYPE html>\n<html>\n <head> \n<title>Page Title</title> \n</head>\n <body>\n<h1>This is a Heading</h1>\n <p>This is a paragraph.</p>\n </body> \n</html>'
  );

  const [selectedLanguage, setSelectedLanguage] = useState("html");
  const [copyText, setCopyText] = useState("Copy");

  return (
    <div className={`${styles.learn}`}>
      <Html />
      <div className={`${styles.learncont}`} id='sidecont'>
        <h2 className={`text-center text-white ${styles.h2html}`}>HTML Introduction</h2>
        <div className={`${styles.nextprev}`}>
          <Link href={`/learn/html/${data.myObj[currentIndex - 1]}`} className={`${styles.button}`}>&lt; Prev</Link>
          <Link href={`/learn/html/${data.myObj[currentIndex + 1]}`} className={`${styles.button}`}>Next &gt;</Link>
        </div>
        <div className={`${styles.languegecourse} text-white px-5 py-5`}>
          <h5 className={`text-left text-white`}>GET OUR FREE HTML COURSE</h5>
          <p className={`text-left text-white`}>In this course you will learn HTML from basic to advanced.</p>
          <Link href="/learn" target='_blank'><input type="button" value="Go to the Course" className={`btn btn-primary`} /></Link>
        </div>
        <div className={`px-3 ${styles.docpage}`}>
          <p className={`text-white`}>HTML, or Hypertext Markup Language, is the foundational language of the World Wide Web. It serves as the backbone for creating and structuring web pages, allowing content to be presented and organized in a way that both browsers and users can understand. HTML employs a system of tags, each with a specific purpose, to define text, images, links, forms, and other elements on a web page. These tags create a structured hierarchy, and when combined with cascading style sheets (CSS) and JavaScript, they enable the web to be an interactive and visually appealing environment. HTML's simplicity and versatility have made it a cornerstone of web development, facilitating the creation of the websites and web applications we use every day.</p><br />
          <p className={`text-white`}><b>HTML Tags</b></p>
          <p className={`text-white`}>HTML (Hypertext Markup Language) tags are essential elements used to structure and define the content of a web page. They serve as the building blocks of web documents and are enclosed within angle brackets (&lt; &gt;). HTML tags come in pairs: an opening tag and a closing tag, with content in between. Here's a brief overview, including some common headings:<br /></p>
          <ol className={`text-white`}>
            <li>&lt;<b>!DOCTYPE</b>&gt; Declaration:
              <ul>
                <li>Specifies the HTML version being used by the document.</li>
              </ul>
            </li>
            <li>&lt;<b>html</b>&gt; Declaration:
              <ul>
                <li>The root element that contains all other elements on the web page.</li>
              </ul>
            </li>
            <li>&lt;<b>head</b>&gt; Declaration:
              <ul>
                <li>Contains metadata about the document, such as the title and links to external resources like stylesheets and scripts.</li>
              </ul>
            </li>
            <li>&lt;<b>title</b>&gt; Declaration:
              <ul>
                <li>Defines the title of the web page, which appears in the browser's title bar or tab.</li>
              </ul>
            </li>
            <li>&lt;<b>meta</b>&gt; Declaration:
              <ul>
                <li>Provides metadata like character encoding and author information.</li>
              </ul>
            </li>
            <li>&lt;<b>link</b>&gt; Declaration:
              <ul>
                <li>Links external resources, like CSS stylesheets.</li>
              </ul>
            </li>
            <li>&lt;<b>style</b>&gt; Declaration:
              <ul>
                <li>Contains inline CSS styles or references an external stylesheet.</li>
              </ul>
            </li>
            <li>&lt;<b>script</b>&gt; Declaration:
              <ul>
                <li>Includes JavaScript code or links to external JavaScript files.</li>
              </ul>
            </li>
            <li>&lt;<b>body</b>&gt; Declaration:
              <ul>
                <li>Encloses the visible content of the web page.</li>
              </ul>
            </li>
            <li>&lt;<b>body</b>&gt; Declaration:
              <ul>
                <li>Used to create section headings and subheadings. &lt;h1&gt; is the highest level (most important), while &lt;h6&gt; is the lowest.</li>
              </ul>
            </li>
            <li>&lt;<b>body</b>&gt; Declaration:
              <ul>
                <li>Encloses the visible content of the web page.</li>
              </ul>
            </li>
            <li>&lt;<b>body</b>&gt; Declaration:
              <ul>
                <li>Encloses the visible content of the web page.</li>
              </ul>
            </li>
            <li>&lt;<b>body</b>&gt; Declaration:
              <ul>
                <li>Encloses the visible content of the web page.</li>
              </ul>
            </li>
            <li>&lt;<b>body</b>&gt; Declaration:
              <ul>
                <li>Encloses the visible content of the web page.</li>
              </ul>
            </li>
            <li>&lt;<b>body</b>&gt; Declaration:
              <ul>
                <li>Encloses the visible content of the web page.</li>
              </ul>
            </li>
          </ol>
        </div>
        <div style={{ position: "relative" }} className={`px-3`}>
          <button
            onClick={handleCopyClick}
            style={{
              position: "absolute",
              top: 10,
              right: 20,
              background: "#0a143c",
              color: "white",
              border: "none",
              padding: "5px 10px",
              cursor: "pointer",
            }}>
            <span><LuCopy /> {copyText}</span>
          </button>
          <SyntaxHighlighter language={selectedLanguage} style={zTouch}>
            {code}
          </SyntaxHighlighter>
          <div>
            <Link href={`/html-code-editor?code=${encodeURIComponent(code)}`} target="_blank">
              <input type="button" value="Try Yourself" className={`btn btn-primary`} />
            </Link>
          </div>
        </div>
        <div className={`px-3 ${styles.docpage}`}>
          <h3
            className={`text-white`}>
            Html Page Structure
          </h3>
          <div
            className={`text-white text-xl`}>
            <div style={{ border: "2px solid black", padding: "5px"}} >&lt;html&gt;
              <div style={{ margin: "15px", border: "2px solid black", padding: "5px" }} >&lt;head&gt;
                <div style={{ margin: "15px", border: "2px solid black", padding: "5px" }} >&lt;title&gt;Page title&lt;/title&gt;
                </div>
                &lt;/head&gt;
              </div>
              <div style={{ margin: "15px", border: "2px solid black", padding: "5px" }} >&lt;body&gt;
                <div style={{ margin: "15px", border: "2px solid black", padding: "5px" }} >
                  <div style={{ margin: "15px", border: "2px solid black", padding: "5px" }}>&lt;h1&gt;This is a heading&lt;/h1&gt;</div>
                  <div style={{ margin: "15px", border: "2px solid black", padding: "5px" }}>&lt;p&gt;This is a paragraph.&lt;/p&gt;</div>
                  <div style={{ margin: "15px", border: "2px solid black", padding: "5px" }}>&lt;p&gt;This is another paragraph.&lt;/p&gt;</div>
                </div>
                &lt;/body&gt;
              </div>
              &lt;/html&gt;
            </div>
          </div>
        </div>
        <div className={`${styles.nextprev}`}>
          <Link href={`/learn/html/${data.myObj[currentIndex]}`} onClick={handlePrev} className={`${styles.button}`}>&lt; Prev</Link>
          <Link href={`/learn/html/${data.myObj[currentIndex]}`} onClick={handleNext} className={`${styles.button}`}>Next &gt;</Link>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default HtmlIntro;
