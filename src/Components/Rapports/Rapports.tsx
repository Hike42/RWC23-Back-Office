import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  Card,
  Title,
  BadgeDelta,
  DeltaType,
  Flex,
  Icon,
  Grid,
} from "@tremor/react";

function App() {
  const [communiques, setCommuniques] = useState<string[]>([]);
  const [selectedCommunique, setSelectedCommunique] = useState(null);
  const [newCommunique, setNewCommunique] = useState("");
  const [file, setFile] = useState(null);

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const createCommunique = () => {
    setCommuniques([...communiques, newCommunique]);
    setNewCommunique("");
  };

  const selectCommunique = (communique) => {
    setSelectedCommunique(communique);
  };

  return (
    <div className="flex justify-center w-screen h-screen-[calc(100vh-150px)]">
      <Grid className="w-full max-w-6xl mt-10" numItemsLg={2}>
        <Card className="w-full mr-4">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Communiqués existants</h2>
            {communiques.map((communique, index) => (
              <div
                key={index}
                onClick={() => selectCommunique(communique)}
                className="px-4 py-2 border-b border-gray-300"
              >
                {communique}
              </div>
            ))}
            {selectedCommunique && (
              <Document file={selectedCommunique} className="mt-4">
                <Page pageNumber={1} />
              </Document>
            )}
          </div>
        </Card>
        <Card className="w-full ml-4">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Créer un nouveau communiqué
            </h2>
            <ReactQuill value={newCommunique} onChange={setNewCommunique} />
            <input
              type="file"
              onChange={onFileChange}
              accept=".pdf"
              className="mt-4 p-2 border border-gray-300 rounded"
            />
            <button
              onClick={createCommunique}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Créer
            </button>
          </div>
        </Card>
      </Grid>
    </div>
  );
}

export default App;
