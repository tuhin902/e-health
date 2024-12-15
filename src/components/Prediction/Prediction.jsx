import axios from "axios";
import React, { useEffect, useState } from "react";

export const Prediction = () => {
  const [datas, setDatas] = useState([]);
  const [result, setResult] = useState(null);
  // console.log(result);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const age = form.age.value;
    const gender = form.gender.value;
    const totalBilirubin = form.totalBilirubin.value;
    const directBilirubin = form.directBilirubin.value;
    const alkphosAlkalinePhosphotase = form.alkphosAlkalinePhosphotase.value;
    const sgptAlamineAminotransferase = form.sgptAlamineAminotransferase.value;
    const sgotAspartateAminotransferase =
      form.sgotAspartateAminotransferase.value;
    const totalProtiens = form.totalProtiens.value;
    const albAlbumin = form.albAlbumin.value;
    const agRatioAlbuminAndGlobulinRatio =
      form.agRatioAlbuminAndGlobulinRatio.value;

    const inputData = {
      features: [
        parseFloat(directBilirubin),
        parseInt(gender),
        parseFloat(sgptAlamineAminotransferase),
        parseFloat(alkphosAlkalinePhosphotase),
        parseFloat(agRatioAlbuminAndGlobulinRatio),
      ],
    };
    // console.log(inputData);
    // const inputData = {
    //   features: [
    //     parseInt(age),
    //     parseInt(gender),
    //     parseFloat(totalBilirubin),
    //     parseFloat(directBilirubin),
    //     parseFloat(alkphosAlkalinePhosphotase),
    //     parseFloat(sgptAlamineAminotransferase),
    //     parseFloat(sgotAspartateAminotransferase),
    //     parseFloat(totalProtiens),
    //     parseFloat(albAlbumin),
    //     parseFloat(agRatioAlbuminAndGlobulinRatio),
    //   ],
    // };
    setDatas(inputData);
    form.reset();

    // console.log(age, inputData);
  };
  // console.log(data);

  useEffect(() => {
    fetch("http://localhost:4000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datas),
    })
      .then((res) => res.json())
      .then((data) => setResult(data));
  }, [datas]);

  return (
    <div className="bg-[url('/src/assets/bg/predictionbg.jpg')] bg-top bg-cover bg-no-repeat py-20">
      <div className=" w-3/4 py-20 mx-auto  backdrop-blur-sm bg-black/30 border-white border-2 shadow-lg shadow-white text-white rounded-xl">
        <h2 className="text-4xl text-center py-5 font-medium ">
          Liver Disease Prediction
        </h2>
        <form onSubmit={handleSubmit} className="w-3/4  mx-auto mt-5">
          <div className="flex gap-7 mt-3 space-between">
            <div className="w-1/2">
              <label htmlFor="age" className="text-lg font-semibold block ">
                Age:
              </label>
              <input
                type="text"
                name="age"
                id="age"
                required
                placeholder="Age"
                className="input input-bordered w-[350px]  mt-2 text-black"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="gender" className="text-lg font-semibold block ">
                Gender:
              </label>
              <select
                name="gender"
                id="gender"
                className="input input-bordered w-[350px] mt-2 text-black"
              >
                <option value="0">Male</option>
                <option value="1">Female</option>
              </select>
              {/* <input
                type="text"
                placeholder="Gender"
                className="input input-bordered w-[350px] mt-2 text-black"
              /> */}
            </div>
          </div>
          <div className="flex gap-7 mt-3 space-between">
            <div className="w-1/2">
              <label
                htmlFor="totalBilirubin"
                className="text-lg font-semibold "
              >
                Total Bilirubin:
              </label>
              <input
                type="text"
                name="totalBilirubin"
                id="totalBilirubin"
                required
                placeholder="Total Bilirubin"
                className="input input-bordered w-[350px]  mt-2 text-black"
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="directBilirubin"
                className="text-lg font-semibold "
              >
                Direct Bilirubin:
              </label>
              <input
                type="text"
                placeholder="Direct Bilirubin"
                className="input input-bordered w-[350px] mt-2 text-black"
                name="directBilirubin"
                id="directBilirubin"
              />
            </div>
          </div>
          <div className="flex gap-7 mt-3 space-between">
            <div className="w-1/2">
              <label
                htmlFor="alkphosAlkalinePhosphotase"
                className="text-lg font-semibold "
              >
                Alkphos Alkaline Phosphotase:
              </label>
              <input
                type="text"
                name="alkphosAlkalinePhosphotase"
                id="alkphosAlkalinePhosphotase"
                required
                placeholder="Alkphos Alkaline Phosphotase"
                className="input input-bordered w-[350px]  mt-2 text-black"
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="sgptAlamineAminotransferase"
                className="text-lg font-semibold "
              >
                Sgpt Alamine Aminotransferase:
              </label>
              <input
                type="text"
                placeholder="Sgpt Alamine Aminotransferase"
                className="input input-bordered w-[350px] mt-2 text-black"
                name="sgptAlamineAminotransferase"
                id="sgptAlamineAminotransferase"
              />
            </div>
          </div>
          <div className="flex gap-7 mt-3  space-between">
            <div className="w-1/2">
              <label
                htmlFor="sgotAspartateAminotransferase"
                className="text-lg font-semibold "
              >
                Sgot Aspartate Aminotransferase:
              </label>
              <input
                type="text"
                name="sgotAspartateAminotransferase"
                id="sgotAspartateAminotransferase"
                required
                placeholder="Sgot Aspartate Aminotransferase"
                className="input input-bordered w-[350px]  mt-2 text-black"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="totalProtiens" className="text-lg font-semibold ">
                Total Protiens:
              </label>
              <input
                type="text"
                placeholder="Total Protiens"
                className="input input-bordered w-[350px] mt-2 text-black"
                name="totalProtiens"
                id="totalProtiens"
              />
            </div>
          </div>
          <div className="flex gap-7 mt-3 space-between">
            <div className="w-1/2">
              <label htmlFor="albAlbumin" className="text-lg font-semibold ">
                ALB Albumin:
              </label>
              <input
                type="text"
                name="albAlbumin"
                id="albAlbumin"
                required
                placeholder="ALB Albumin"
                className="input input-bordered w-[350px]  mt-2 text-black"
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="agRatioAlbuminAndGlobulinRatio"
                className="text-lg font-semibold "
              >
                A/G Ratio Albumin and Globulin Ratio:
              </label>
              <input
                type="text"
                placeholder="A/G Ratio Albumin and Globulin Ratio"
                className="input input-bordered w-[350px] mt-2 text-black"
                name="agRatioAlbuminAndGlobulinRatio"
                id="agRatioAlbuminAndGlobulinRatio"
              />
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <button className="btn btn-outline btn-success" type="submit">
              Predict
            </button>
          </div>
        </form>
        {result && (
          <div>
            <h3>Prediction: {result.prediction}</h3>
            <h3>Probability: {JSON.stringify(result.probability)}</h3>
          </div>
        )}
      </div>
    </div>
  );
};
