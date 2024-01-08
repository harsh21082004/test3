// pages/code-editor.js
import { useRouter } from "next/router";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

const CodeEditorPage = () => {
  const router = useRouter();
  const { code } = router.query;

  return (
    <div>
      <AceEditor
        mode="html"
        theme="monokai"
        value={code}
        fontSize={16}
        width="100%"
        height="300px"
        readOnly={false} // Set to true to allow editing
      />
    </div>
  );
};

export default CodeEditorPage;
