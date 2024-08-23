// components/MarkdownEditor.js
"use client"
import { useEffect, useRef } from 'react';
import EasyMDE from 'easymde';
import 'easymde/dist/easymde.min.css';

const MarkdownEditor = ({ value, onChange, placeholder }:{value:any,onChange:any, placeholder: any}) => {
    const editorRef = useRef(null);
    const textareaRef = useRef(null);

    useEffect(() => {
        if (!editorRef.current && textareaRef.current) {
            //@ts-ignore
            editorRef.current = new EasyMDE({
                element: textareaRef.current,
                initialValue: value,
                toolbar: ["bold", "italic", "heading", "|", "quote", "unordered-list", "ordered-list", "|", "fullscreen"],
                spellChecker: false,
            });
            //@ts-ignore
            editorRef.current.codemirror.on('change', () => {
                //@ts-ignore
                const newValue = editorRef.current.value();
                if (newValue !== value) {
                    onChange(newValue);
                }
            });
        }

        return () => {
            if (editorRef.current) {
                //@ts-ignore
                editorRef.current.toTextArea();
                editorRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        //@ts-ignore
        if (editorRef.current && editorRef.current.value() !== value) {
            //@ts-ignore
            editorRef.current.value(value);
        }
    }, [value]);

    return <textarea ref={textareaRef}  id="markdown-editor" placeholder={placeholder}></textarea>;
};

export default MarkdownEditor;
