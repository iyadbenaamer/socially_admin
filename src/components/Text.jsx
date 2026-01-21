import { useEffect, useState } from "react";

const Text = (props) => {
  const [text, setText] = useState("");
  const originalText = props.text;

  useEffect(() => {
    let text = originalText;
    if (text.length > 100) {
      setText(text.slice(0, 100).concat(" ..."));
    } else {
      setText(text);
    }
  }, [originalText]);

  return (
    <div className="flex flex-col">
      <pre
        dir="auto"
        className="font-[inherit] text-ellipsis text-wrap break-words whitespace-pre-wrap"
      >
        {text}
      </pre>
      {text.length > 100 && originalText.length !== text.length && (
        <button
          className="hover:underline w-fit"
          onClick={() => setText(originalText)}
        >
          show more
        </button>
      )}
      {text.length > 100 && text.length === originalText.length && (
        <button
          className="hover:underline w-fit"
          onClick={() => setText(originalText.slice(0, 100).concat(" ..."))}
        >
          show less
        </button>
      )}
    </div>
  );
};

export default Text;
