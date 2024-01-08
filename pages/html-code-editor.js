import { useState, useRef, useContext } from "react";
import { useRouter } from "next/router";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";

import styles from '@/styles/HtmlCodeEditor.module.css'
import { ThemeContext } from './context/themeContext';

const HtmlCodeEditor = () => {

  const { them, handleOnClick2 } = useContext(ThemeContext)
  const router = useRouter();
  const { code } = router.query;
  const iframeRef = useRef();
  const editorRef = useRef(); // Define editorRef here
  

  const handleRunClick = () => {
    const iframe = iframeRef.current;
    const iframeDoc = iframe.contentDocument;

    // const [selectedLanguage, setSelectedLanguage] = useState("html");

    if (iframeDoc) {
      iframeDoc.open();
      iframeDoc.write(editorRef.current.editor.getValue()); // Use editorRef to get the editor content
      iframeDoc.close();
    }
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <>
      <div className={`${them === "light"?styles.code_editor_total_dark:styles.code_editor_total_light}`}>
        <div className={`${them === "light"?styles.code_nav_dark:styles.code_nav_light}`}>
          <span className={`p-1`}>
            <img
              className={`${them === "light"?'imgdark':'imgMode'}`}
              src="/nmicon.png"
              width={40}
              height={40}
              alt="Picture of the author"
              onClick={handleOnClick2}
            />
          </span>
          <button onClick={handleRunClick} className={`btn btn-primary px-3 py-2 ${styles.run}`}>
            Run
          </button></div>
        <div className={`${them === "light"?styles.code_editor_dark:styles.code_editor_light}`}>
          <div className={`${styles.code_field}`}>
            <AceEditor
              ref={editorRef}
              mode="html"
              theme="monokai"
              value={code || ""}
              fontSize={16}
              readOnly={false}
              width="100%"
              height="400px"
            />
          </div>
          <div className={`${styles.code_output}`}>
            <iframe ref={iframeRef} width="100%" height="400px" title="Output" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HtmlCodeEditor;
