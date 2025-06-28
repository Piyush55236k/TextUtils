import React from 'react';

function About() {

  const preStyle = {
    marginTop: "10px",
    textAlign: "center",
    whiteSpace: 'pre-wrap', // Allow wrapping
    wordWrap: 'break-word'  // Break long words
  };

  return (
    <div className="about">
      <pre style={preStyle}>{`💡 About TextUtils
TextUtils is a powerful yet simple text manipulation tool built with React. Whether you're writing, coding, editing, or preparing documents, this tool helps you transform your text quickly and efficiently.

With TextUtils, you can easily convert your text to uppercase, lowercase, remove extra spaces, or even copy the formatted text with a single click. 
The app also provides a real-time text summary, including word count, character count, and estimated reading time, making it helpful for students, writers, and professionals.

Designed with a clean and responsive interface, TextUtils offers both light and dark modes to enhance your viewing experience, whether day or night.

✨ Why Use TextUtils?
✅ Fast and lightweight

✅ No ads, no clutter — just tools

✅ Easy to use

✅ Works in any modern browser

✅ Completely free and open-source

📢 Note:
This is a browser-based utility and does not store or share your text anywhere. Your privacy is completely safe.

🎯 Our Goal:
To make everyday text tasks simple, quick, and accessible for everyone.`}</pre>
    </div>
  );
}

export default About;
