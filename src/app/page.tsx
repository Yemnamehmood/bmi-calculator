'use client'
import { useState } from 'react';

export default function BmiCalculator() {
  const [gender, setGender] = useState<string | null>(null);
  const [age, setAge] = useState<number | null>(null);
  const [feet, setFeet] = useState<number | null>(null);
  const [inches, setInches] = useState<number | null>(null);
  const [cm, setCm] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');

  const calculateBMI = () => {
    let heightInCm = 0;

    
    if (feet && inches) {
      heightInCm = feet * 30.48 + inches * 2.54;
    } else if (cm) {
      heightInCm = cm; // Use cm input if available
    }

    if (weight && heightInCm > 0) {
      // Calculate BMI
      const bmiValue = Number((weight / (heightInCm / 100) ** 2).toFixed(1));
      setBmi(bmiValue);

      // Determine BMI category
      if (bmiValue < 18.5) setCategory('Underweight');
      else if (bmiValue < 24.9) setCategory('Normal');
      else if (bmiValue < 29.9) setCategory('Overweight');
      else setCategory('Obese');
    }
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>

      {/* Gender Selection */}
      <div className="gender-selection">
        <button
          className={gender === 'Male' ? 'active' : ''}
          onClick={() => setGender('Male')}
        >
          Male
        </button>
        <button
          className={gender === 'Female' ? 'active' : ''}
          onClick={() => setGender('Female')}
        >
          Female
        </button>
      </div>

      {/* Age Input */}
      <input
        type="number"
        placeholder="Age"
        value={age ?? ''}
        onChange={(e) => setAge(Number(e.target.value))}
      />

      {/* Height Input: Feet & Inches */}
      <div className="height-input">
        <input
          type="number"
          placeholder="Feet"
          value={feet ?? ''}
          onChange={(e) => setFeet(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Inches"
          value={inches ?? ''}
          onChange={(e) => setInches(Number(e.target.value))}
        />
      </div>

      {/* Height Input: cm */}
      <input
        type="number"
        placeholder="Height (cm)"
        value={cm ?? ''}
        onChange={(e) => setCm(Number(e.target.value))}
      />

      {/* Weight Input */}
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight ?? ''}
        onChange={(e) => setWeight(Number(e.target.value))}
      />

      {/* Calculate Button */}
      <button onClick={calculateBMI}>Calculate BMI</button>

      {/* BMI Result */}
      {bmi && (
        <div className="bmi-result">
          <p>Your BMI: {bmi}</p>
          <p>Category: {category}</p>
        </div>
      )}

      <footer>
        © All Rights Reserved, BMI Calculator by Yemna Mehmood
      </footer>
    </div>
  );
}
