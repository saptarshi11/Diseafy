import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "../styles/prediction.css";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

const Prediction = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSymptoms, setFilteredSymptoms] = useState({});
  const [selectedSymptoms, setSelectedSymptoms] = useState({});
  const [results, setResults] = useState("");

  const symptoms = new Map([
    ["itching", 0],
    ["skin rash", 1],
    ["nodal skin eruptions", 2],
    ["continuous sneezing", 3],
    ["shivering", 4],
    ["chills", 5],
    ["joint pain", 6],
    ["stomach pain", 7],
    ["acidity", 8],
    ["ulcers on tongue", 9],
    ["muscle wasting", 10],
    ["vomiting", 11],
    ["burning micturition", 12],
    ["spotting urination", 13],
    ["fatigue", 14],
    ["weight gain", 15],
    ["anxiety", 16],
    ["cold hands and feets", 17],
    ["mood swings", 18],
    ["weight loss", 19],
    ["restlessness", 20],
    ["lethargy", 21],
    ["patches in throat", 22],
    ["irregular sugar level", 23],
    ["cough", 24],
    ["high fever", 25],
    ["sunken eyes", 26],
    ["breathlessness", 27],
    ["sweating", 28],
    ["dehydration", 29],
    ["indigestion", 30],
    ["headache", 31],
    ["yellowish skin", 32],
    ["dark urine", 33],
    ["nausea", 34],
    ["loss of appetite", 35],
    ["pain behind the eyes", 36],
    ["back pain", 37],
    ["constipation", 38],
    ["abdominal pain", 39],
    ["diarrhoea", 40],
    ["mild fever", 41],
    ["yellow urine", 42],
    ["yellowing of eyes", 43],
    ["acute liver failure", 44],
    ["fluid overload", 45],
    ["swelling of stomach", 46],
    ["swelled lymph nodes", 47],
    ["malaise", 48],
    ["blurred and distorted vision", 49],
    ["phlegm", 50],
    ["throat irritation", 51],
    ["redness of eyes", 52],
    ["sinus pressure", 53],
    ["runny nose", 54],
    ["congestion", 55],
    ["chest pain", 56],
    ["weakness in limbs", 57],
    ["fast heart rate", 58],
    ["pain during bowel movements", 59],
    ["pain in anal region", 60],
    ["bloody stool", 61],
    ["irritation in anus", 62],
    ["neck pain", 63],
    ["dizziness", 64],
    ["cramps", 65],
    ["bruising", 66],
    ["obesity", 67],
    ["swollen legs", 68],
    ["swollen blood vessels", 69],
    ["puffy face and eyes", 70],
    ["enlarged thyroid", 71],
    ["brittle nails", 72],
    ["swollen extremeties", 73],
    ["excessive hunger", 74],
    ["extra marital contacts", 75],
    ["drying and tingling lips", 76],
    ["slurred speech", 77],
    ["knee pain", 78],
    ["hip joint pain", 79],
    ["muscle weakness", 80],
    ["stiff neck", 81],
    ["swelling joints", 82],
    ["movement stiffness", 83],
    ["spinning movements", 84],
    ["loss of balance", 85],
    ["unsteadiness", 86],
    ["weakness of one body side", 87],
    ["loss of smell", 88],
    ["bladder discomfort", 89],
    ["foul smell of urine", 90],
    ["continuous feel of urine", 91],
    ["passage of gases", 92],
    ["internal itching", 93],
    ["toxic look (typhos)", 94],
    ["depression", 95],
    ["irritability", 96],
    ["muscle pain", 97],
    ["altered sensorium", 98],
    ["red spots over body", 99],
    ["belly pain", 100],
    ["abnormal menstruation", 101],
    ["dischromic patches", 102],
    ["watering from eyes", 103],
    ["increased appetite", 104],
    ["polyuria", 105],
    ["family history", 106],
    ["mucoid sputum", 107],
    ["rusty sputum", 108],
    ["lack of concentration", 109],
    ["visual disturbances", 110],
    ["receiving blood transfusion", 111],
    ["receiving unsterile injections", 112],
    ["coma", 113],
    ["stomach bleeding", 114],
    ["distention of abdomen", 115],
    ["history of alcohol consumption", 116],
    ["fluid overload.1", 117],
    ["blood in sputum", 118],
    ["prominent veins on calf", 119],
    ["palpitations", 120],
    ["painful walking", 121],
    ["pus filled pimples", 122],
    ["blackheads", 123],
    ["scurring", 124],
    ["skin peeling", 125],
    ["silver like dusting", 126],
    ["small dents in nails", 127],
    ["inflammatory nails", 128],
    ["blister", 129],
    ["red sore around nose", 130],
    ["yellow crust ooze", 131],
    ["prognosis", 132],
  ]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterSymptoms = () => {
    let filteredList = {};
    symptoms.forEach((value, key) => {
      if (key.toLowerCase().includes(searchTerm.toLowerCase())) {
        filteredList[key] = value;
      }
    });
    setFilteredSymptoms(filteredList);
  };

  const handlePrediction = () => {
    const selectedSymptomsList = Object.values(selectedSymptoms);
    const data = Array.from({ length: 132 }, () => 0);
    selectedSymptomsList.forEach((symptom) => {
      data[symptom] = 1;
    });

    axios.post("/predict", { pred: data }).then((response) => {
      const result = response.data;
      setResults(result);
    });
  };

  useEffect(() => {
    filterSymptoms();
  }, [searchTerm]);

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js";
    script.async = true;

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz@9..40&family=Roboto&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Roboto&display=swap"
        rel="stylesheet"
      />
      <NavLink to="/">
        <button className="btn mt-2 ml-2">Home</button>
      </NavLink>
      {/* <div id="preloader" /> */}
      <div id="particles-js">
        <section className="white-box">
          <form action="/login" className="search" id="predform" method="post">
            <i className="fa-sharp fa-solid fa-magnifying-glass" />
            <input
              type="text"
              name=""
              id="search-bar"
              placeholder="Search symptoms"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </form>
          <ul id="symp-list">
            {Object.keys(filteredSymptoms).map((symptom) => (
              <li
                key={symptoms.get(symptom)}
                className="symptom"
                onClick={() => {
                  setSelectedSymptoms({
                    ...selectedSymptoms,
                    [symptom]: symptoms.get(symptom),
                  });
                }}
              >
                <h2>{symptom}</h2>
              </li>
            ))}
          </ul>
        </section>
        <section className="title">
          <h1>Diseafy.io</h1>
        </section>
        <section className="selected-symp-box">
          <ul id="selected">
            {Object.keys(selectedSymptoms).length > 0 ? (
              <>
                {Object.keys(selectedSymptoms).map((symptom) => (
                  <li
                    key={selectedSymptoms[symptom]}
                    className="selected-symptom"
                    onClick={() => {
                      const newSelectedSymptoms = { ...selectedSymptoms };
                      delete newSelectedSymptoms[symptom];
                      setSelectedSymptoms(newSelectedSymptoms);
                    }}
                  >
                    <h2>{symptom}</h2>
                  </li>
                ))}
              </>
            ) : (
              <div id="noele">No symptoms selected</div>
            )}
          </ul>
          <button
            className="bubbly-button"
            onClick={handlePrediction}
            disabled={Object.keys(selectedSymptoms).length === 0}
          >
            Predict
          </button>
        </section>
        <div className="blurred-background" />
        <section className="output">
          {results && (
            <>
              <h2>You may have</h2>
            </>
          )}
          <div className="dis_container">
            {results && (
              <>
                {results.map((result, index) => (
                  <div className="dis_box" key={index}>
                    <div className="op_perc">
                      <h1 className="op">{result.disease}</h1>
                      <h5 className="perc">{result.percentage}</h5>
                    </div>
                    <h4 className="det">{result.details}</h4>
                  </div>
                ))}
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Prediction;
