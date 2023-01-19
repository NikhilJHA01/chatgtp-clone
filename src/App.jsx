import { useState } from "react";
import "./App.css";
import Options from "./components/Options";
import { arrayItems } from "./AIOptions";
import Translation from "./components/Translation";
import { Configuration, OpenAIApi } from "openai";

function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPEN_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState({});
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(import.meta.env.VITE_OPEN_API_KEY);
  const selectOption = (option) => {
    setOption(option);
  };

  const doStuff = async () => {
    let object = { ...option, prompt: input };
    setLoading(true);
    const response = await openai.createCompletion(object);

    setResult(response.data.choices[0].text);
    setLoading(false);
  };
  console.log(option);

  return (
    <div className="App">
      <h1>React AI APP</h1>
      {!Object.values(option).length ? (
        <Options arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation
          doStuff={doStuff}
          result={result}
          setInput={setInput}
          loading={loading}
        />
      )}
    </div>
  );
}

export default App;
