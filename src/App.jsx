import { useState } from "react";

function App() {
  // const [array, setArray] = useState("초기값");
  const initalState = ["apple", "banana", "cherry", "melon", "elderberry"];
  const [array, setArray] = useState(initalState);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");

  const handleForEach = () => {
    let temp = "";
    array.forEach(function (item, index) {
      temp += `${index}: ${item} /`;
    });

    setResult(temp);
  };

  const handleFilter = function () {
    const filtered = array.filter((item) => item.includes(query));
    setResult(filtered.join(", "));
  };

  const handleMap = function () {
    const maped = array.map(function (item) {
      return item.toUpperCase();
    });

    setResult(maped.join(", "));
  };

  const handleReduce = function () {
    const reduced = array.reduce(function (acc, cur) {
      return `${acc} + ${cur}`;
    });

    setResult(reduced);
  };

  const handlePush = function () {
    if (query.length <= 0) {
      alert("추가하시려는 값을 입력해주세요!");
      return false;
    }
    const newArr = [...array, query];

    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handlePop = function () {
    // 1. 원본 배열을 통해 pop한 값을 저장
    const delArr = [...array];
    delArr.pop();

    // 2. setArray에 저장
    setArray(delArr);

    // 3. array를 기반으로 result 생성(setResult)
    setResult(delArr.join(", "));
  };

  const handleSlice = function () {
    const sliced = [...array];

    setResult(sliced.slice(0, 3).join(", "));
  };

  const handleSplice = function () {
    const spliced = [...array];

    setResult(
      spliced.splice(0, 3).concat("kiwi", "lime", "elderberry").join(", ")
    );
  };

  const handleIndexOf = function () {
    const arrayIndexOf = array.indexOf(query);

    setResult(arrayIndexOf);
  };

  const handleIncludes = function () {
    const arrayIncules = array.includes(query);

    setResult(String(arrayIncules));
  };

  const handleFind = function () {
    const arrayFind = array.find((item) => item.includes(query));

    setResult(arrayFind ? arrayFind : "Not Found");
  };

  const handleSome = function () {
    const arraySome = array.some(function (item) {
      return item.includes(query);
    });

    setResult(String(arraySome));
  };

  // every의 경우 각 요소가 모두 2글자 이상의 길이를 가진 경우 true를 반환하도록 구현
  const handleEvery = function () {
    const lengthCheck = (item) => item.length >= 2;
    const arrayEvery = array.every(lengthCheck);

    setResult(String(arrayEvery));
  };

  const handleSort = function () {
    const arraySort = array.sort();
    setResult(arraySort.join(", "));
  };

  const handleJoin = function () {
    const arrayJoin = array.join(" + ");
    setResult(arrayJoin);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Standard반 배열 API 테스트</h1>
      <input
        style={{ margin: "1.5rem", width: "20rem", height: "1.6rem" }}
        value={query}
        onChange={function (e) {
          setQuery(e.target.value);
        }}
      />
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexOf}>indexOf</button>
        <button onClick={handleIncludes}>includes</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>
        <button onClick={handleJoin}>join</button>
      </div>
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          margin: "1rem",
          padding: "0.5rem",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
        }}
      >
        <h3 style={{ fontSize: "1rem" }}>원본배열:&nbsp;</h3>
        <p>{array.join(", ")}</p>
      </div>
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          margin: "1rem",
          padding: "0.5rem",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
        }}
      >
        <h3 style={{ fontSize: "1rem" }}>결과물:&nbsp;</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
