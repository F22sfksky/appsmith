import CodeMirror from "codemirror";
import { EditorModes } from "components/editorComponents/CodeEditor/EditorConfig";
import "codemirror/addon/mode/multiplex";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/sql/sql";
import "codemirror/addon/hint/sql-hint";

CodeMirror.defineMode(EditorModes.TEXT_WITH_BINDING, function(config) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: No types available
  return CodeMirror.multiplexingMode(
    CodeMirror.getMode({ ...config, lint: true }, EditorModes.TEXT),
    {
      open: "{{",
      close: "}}",
      mode: CodeMirror.getMode(
        { ...config, lint: false },
        {
          name: "javascript",
        },
      ),
    },
  );
});

CodeMirror.defineMode(EditorModes.JSON_WITH_BINDING, function(config) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: No types available
  return CodeMirror.multiplexingMode(
    CodeMirror.getMode(config, { name: "javascript", json: true }),
    {
      open: "{{",
      close: "}}",
      mode: CodeMirror.getMode(config, {
        name: "javascript",
      }),
    },
  );
});

CodeMirror.defineMode(EditorModes.SQL_WITH_BINDING, function(config) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: No types available
  return CodeMirror.multiplexingMode(
    CodeMirror.getMode(config, EditorModes.SQL),
    {
      open: "{{",
      close: "}}",
      mode: CodeMirror.getMode(config, {
        name: "javascript",
      }),
    },
  );
});
