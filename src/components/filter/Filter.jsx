import React from "react";
import { useForm } from "react-hook-form";

import container from "./FormContainer.module.css";
import inputStyles from "./TextInput.module.css";
import radioStyles from "./RadioGroup.module.css";
import btn from "./Buttons.module.css";

export default function RightSideFilterForm() {
  const { register, watch, setValue, reset } = useForm({
    defaultValues: {
      controlNumber: "",
      policyholderNumber: "",
      productType: "all",
    },
  });

  const handleNumberInput = (e, name) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 7) {
      setValue(name, value);
    }
  };

  const controlNumber = watch("controlNumber");
  const policyholderNumber = watch("policyholderNumber");

  return (
    <div className={container.wrapper}>
      {/* Header */}
      <p className={container.filterBy}>Filter by</p>

      {/* CONTROL NUMBER */}
      <label htmlFor="controlNumber" className={container.label}>
        Control number
      </label>

      <div className={inputStyles.inputWrapper}>
        <input
          id="controlNumber"
          placeholder="xxxxxxx"
          className={inputStyles.input}
          value={controlNumber}
          {...register("controlNumber")}
          onChange={(e) => handleNumberInput(e, "controlNumber")}
        />

        <button type="button" className={inputStyles.searchButton}>
          <span className={inputStyles.searchIcon}>🔍</span>
        </button>
      </div>

      <p className={container.orText}>Or</p>

      {/* POLICYHOLDER */}
      <label htmlFor="policyholderNumber" className={container.label}>
        Policyholder number
      </label>

      <div className={inputStyles.inputWrapper}>
        <input
          id="policyholderNumber"
          placeholder="xxxxxxx"
          className={inputStyles.input}
          value={policyholderNumber}
          {...register("policyholderNumber")}
          onChange={(e) => handleNumberInput(e, "policyholderNumber")}
        />

        <button type="button" className={inputStyles.searchButton}>
          <span className={inputStyles.searchIcon}>🔍</span>
        </button>
      </div>

      <hr className={container.divider} />

      {/* PRODUCT TYPES */}
      <p className={radioStyles.title}>Product types</p>

      <div className={radioStyles.group}>
        <label className={radioStyles.item}>
          <input
            type="radio"
            value="all"
            {...register("productType")}
            className={radioStyles.radio}
          />
          All
        </label>

        <label className={radioStyles.item}>
          <input
            type="radio"
            value="medical"
            {...register("productType")}
            className={radioStyles.radio}
          />
          Medical
        </label>

        <label className={radioStyles.item}>
          <input
            type="radio"
            value="dental"
            {...register("productType")}
            className={radioStyles.radio}
          />
          Dental
        </label>
      </div>

      <hr className={container.divider} />

      <button className={btn.clear} onClick={() => reset()}>
        Clear filters
      </button>
    </div>
  );
}
