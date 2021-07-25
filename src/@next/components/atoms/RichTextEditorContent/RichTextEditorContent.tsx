import EditorJSHTML from "editorjs-html";
import React, { useRef } from "react";

import * as S from "./styles";

export interface RichTextEditorContentProps {
  jsonData?: string;
}

export const RichTextEditorContent: React.FC<RichTextEditorContentProps> = ({
  jsonData,
}) => {
  const editorHtml = useRef(EditorJSHTML());
  const data = jsonData ? JSON.parse(jsonData) : [];

  let html = "";
  try {
    html = editorHtml.current.parse(data).join("");
  } catch (e) {
    html = "";
  }
  return (
    <S.Content
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
};
