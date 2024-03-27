import { Editor as TinyEditor } from "@tinymce/tinymce-react";

const TINY_MCE_KEY = import.meta.env.VITE_TINY_MCE_KEY;

export default function Editor({ value: initValue = "", onChange = () => {} }) {
  return (
    <TinyEditor
      apiKey={TINY_MCE_KEY}
      value={initValue}
      onEditorChange={onChange}
      init={{
        height: 300,
        menubar: false,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
        ],
        toolbar:
          "undo redo | formatselect | " +
          "bold italic backcolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
    />
  );
}
