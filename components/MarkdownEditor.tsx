// components/MarkdownEditor.js
"use client"
import { useEffect, useRef } from 'react';
import EasyMDE from 'easymde';
import 'easymde/dist/easymde.min.css';

const MarkdownEditor = ({ value, onChange,placeholder }:{value:any,onChange:any,placeholder: string}) => {
    const editorRef = useRef(null);
    useEffect(() => {
        if (!editorRef.current) {
            //@ts-ignore
            editorRef.current = new EasyMDE({
                //@ts-ignore
                element: document.getElementById('markdown-editor'),
                initialValue: value,
                toolbar: ["bold", "italic", "heading", "|", "quote", "unordered-list", "ordered-list","|", "fullscreen"],
                spellChecker: false,
            });
            //@ts-ignore
            editorRef.current.codemirror.on('change', () => {
                //@ts-ignore
                onChange(editorRef.current.value());
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

    return <textarea id="markdown-editor" placeholder={placeholder}  ></textarea>;
};

export default MarkdownEditor;
