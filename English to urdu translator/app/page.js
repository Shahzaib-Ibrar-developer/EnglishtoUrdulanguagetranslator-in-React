"use client"
import React, { useState, useEffect } from "react";

const page = () => {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  // const [languages, setLanguages] = useState([]); // Initialize languages as an empty array
  const [selectedLanguage, setSelectedLanguage] = useState(""); // State for the selected language

  const url = 'https://text-translator2.p.rapidapi.com/translate';
  // const url1 = 'https://text-translator2.p.rapidapi.com/getLanguages';

  // const options1 = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '5ea0dc9b1dmsh99f39c25cbced79p1a975djsn7525e530690b',
  //     'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
  //   }
  // };

  // useEffect(() => {
  //   // Fetch languages when the component mounts
  //   const fetchLanguages = async () => {
  //     try {
  //       const response = await fetch(url1, options1);
  //       const result1 = await response.json();
  //       console.log(result1);
  //       setLanguages(result1.languages);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchLanguages();
  // }, []);

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '5ea0dc9b1dmsh99f39c25cbced79p1a975djsn7525e530690b',
      'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    },
    body: new URLSearchParams({
      source_language: 'en',
      target_language: 'ur', // Use the selected language
      text: text
    })
  };

  const submitHandler = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const translatedText = result.data.translatedText;
      setOutput(translatedText);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>English to Urdu Language Translator</h1>
      {/* <div>
        <button className="btn" onClick={submitHandler}>Translate</button>
      </div>
      <div>
     {languages && languages.length > 0 ? (
  <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
    <option value="">Select Language</option>
    {languages.map((language, index) => (
      <option key={index} value={language.code}>
        {language.name}
      </option>
    ))}
  </select>
) : (
  <p>Loading languages or an error occurred.</p>
)} */}
<div>
        <button className="btn" onClick={submitHandler}>Translate</button>
      </div>
      <div className="main">
        <div className="first">
          <textarea
            className="inputTag"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="second">
          <textarea
            className="OutputTag"
            type="text"
            value={output}
            onChange={(e) => setOutput(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default page;
