#!/usr/bin/env python3
import sys
from docx import Document

def read_docx(file_path):
    try:
        doc = Document(file_path)
        text = []
        for paragraph in doc.paragraphs:
            if paragraph.text.strip():
                text.append(paragraph.text)
        return '\n'.join(text)
    except Exception as e:
        return f"Error reading file: {e}"

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python read_docx.py <file.docx>")
        sys.exit(1)
    
    content = read_docx(sys.argv[1])
    print(content)