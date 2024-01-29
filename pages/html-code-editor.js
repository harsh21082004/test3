import { useRef } from "react";
import { useRouter } from "next/router";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";

import styles from '@/styles/HtmlCodeEditor.module.css'

const HtmlCodeEditor = () => {
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
      <div className={`${styles.code_editor_total}`}>
        <div className={`${styles.code_nav}`}>
          <button onClick={handleRunClick} className={`btn btn-primary px-3 py-2 ${styles.run}`}>
            Run
          </button></div>
        <div className={`${styles.code_editor}`}>
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
