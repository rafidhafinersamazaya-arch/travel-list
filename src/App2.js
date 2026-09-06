//versi saya
import { useState } from "react";

export default function App2() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [tip2, setTip2] = useState(0);
  // const [isReset, setIsReset] = useState(false);

  const handleReset = () => {
    setBill(0);
    setTip(0);
    setTip2(0);
    // setIsReset(true);
  };

  return (
    <div>
      <Billinput value={bill} onChange={setBill} />
      <Tipinput value={tip} onChange={setTip} />
      <TipInput2 value={tip2} onChange={setTip2} />
      <Total bill={bill} tip={tip} tip2={tip2} />
      <ResetButton onClick={handleReset} />
    </div>
  );
}

function Billinput({ value, onChange }) {
  return (
    <div>
      <h1>How much was the bill?</h1>
      <input
        type="text"
        placeholder="Enter the bill amount"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
      />
    </div>
  );
}

function Tipinput({ value, onChange }) {
  return (
    <div>
      <h1>What percentage tip would you like to give?</h1>
      <select
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
      >
        <option value={0}>Select a tip percentage</option>
        <option value={5}>5%</option>
        <option value={10}>10%</option>
        <option value={15}>15%</option>
        <option value={20}>20%</option>
      </select>
    </div>
  );
}

function TipInput2({ value, onChange }) {
  return (
    <div>
      <h1>What percentage tip would you like to give?</h1>
      <select
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
      >
        <option value={0}>Select a tip percentage</option>
        <option value={5}>5%</option>
        <option value={10}>10%</option>
        <option value={15}>15%</option>
        <option value={20}>20%</option>
      </select>
    </div>
  );
}

function Total({ bill, tip, tip2 }) {
  const billAmount = parseFloat(bill) || 0;
  const tipPercentage = (tip + tip2) / 2;
  const total = billAmount + (billAmount * tipPercentage) / 100;

  return (
    <div>
      <h1>{`You Pay ${total}`}</h1>
    </div>
  );
}

function ResetButton({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>Reset</button>
    </div>
  );
}

//versi mentor
// import { useState } from "react";

// export default function App2() {
//   const [bill, setBill] = useState(0);
//   const [tip, setTip] = useState(0);
//   const [tip2, setTip2] = useState(0);
//   // const [isReset, setIsReset] = useState(false);

//   const handleReset = () => {
//     setBill(0);
//     setTip(0);
//     setTip2(0);
//     // setIsReset(true);
//   };

//   return (
//     <div>
//       <Billinput value={bill} onChange={setBill} />
//       <Tipinput value={tip} onChange={setTip} />
//       <TipInput2 value={tip2} onChange={setTip2} />
//       <Total bill={bill} tip={tip} tip2={tip2} />
//       <ResetButton onClick={handleReset} />
//     </div>
//   );
// }

// function Billinput({ value, onChange }) {
//   return (
//     <div>
//       <h1>How much was the bill?</h1>
//       <input
//         type="text"
//         placeholder="Enter the bill amount"
//         value={value}
//         onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
//       />
//     </div>
//   );
// }

// function Tipinput({ value, onChange }) {
//   return (
//     <div>
//       <h1>What percentage tip would you like to give?</h1>
//       <select
//         value={value}
//         onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
//       >
//         <option value={0}>Select a tip percentage</option>
//         <option value={5}>5%</option>
//         <option value={10}>10%</option>
//         <option value={15}>15%</option>
//         <option value={20}>20%</option>
//       </select>
//     </div>
//   );
// }

// function TipInput2({ value, onChange }) {
//   return (
//     <div>
//       <h1>What percentage tip would you like to give?</h1>
//       <select
//         value={value}
//         onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
//       >
//         <option value={0}>Select a tip percentage</option>
//         <option value={5}>5%</option>
//         <option value={10}>10%</option>
//         <option value={15}>15%</option>
//         <option value={20}>20%</option>
//       </select>
//     </div>
//   );
// }

// function Total({ bill, tip, tip2 }) {
//   const billAmount = parseFloat(bill) || 0;
//   const tipPercentage = (tip + tip2) / 2;
//   const total = billAmount + (billAmount * tipPercentage) / 100;

//   return (
//     <div>
//       <h1>{`You Pay ${total}`}</h1>
//     </div>
//   );
// }

// function ResetButton({ onClick }) {
//   return (
//     <div>
//       <button onClick={onClick}>Reset</button>
//     </div>
//   );
// }
