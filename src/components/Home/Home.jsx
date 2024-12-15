import React from "react";

const Home = () => {
  return (
    <div className=" min-h-screen">
      <div className="h-[300px]">
        <h2 className="text-center font-bold text-3xl">Result</h2>
        <div className="   grid grid-cols-3 px-5 mx-5 my-10 gap-5">
          <div className="flex justify-between  border-4 border-sky-500 bg-blue-950 text-white px-6 py-6 rounded">
            <p>Total Bilirubin :</p>
            <p>0.7</p>
          </div>
          <div className="flex justify-between  border-4 border-sky-500 bg-blue-950 text-white px-6 py-6 rounded">
            <p>Total Bilirubin :</p>
            <p>0.7</p>
          </div>
          <div className="flex justify-between  border-4 border-sky-500 bg-blue-950 text-white px-6 py-6 rounded">
            <p>Total Bilirubin :</p>
            <p>0.7</p>
          </div>
          <div className="flex justify-between border-4 border-sky-500 bg-blue-950 text-white px-6 py-6 rounded">
            <p>Direct Bilirubin :</p>
            <p>0.1</p>
          </div>
          <div className="flex justify-between border-4 border-sky-500 bg-blue-950 text-white px-6 py-6 rounded">
            <p>Direct Bilirubin :</p>
            <p>0.1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
