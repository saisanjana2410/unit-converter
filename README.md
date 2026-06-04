# Metric & Imperial Unit Converter

A simple web application that converts values between Metric and Imperial units. Enter a number, click **Convert**, and instantly see conversions for length, volume, and mass.

## Features

* Convert Meters ↔ Feet
* Convert Liters ↔ Gallons
* Convert Kilograms ↔ Pounds
* Clean and responsive UI
* Built with Vanilla JavaScript
* Fast client-side calculations

---

## Preview

### Length Conversion

```text
20 meters = 65.620 feet | 20 feet = 6.096 meters
```

### Volume Conversion

```text
20 liters = 5.280 gallons | 20 gallons = 75.758 liters
```

### Mass Conversion

```text
20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
```

---

## Tech Stack

* HTML5
* CSS3
* JavaScript (ES6)

---

## Project Structure

```text
metric-imperial-converter/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## How It Works

The application takes a user-entered number and performs three different unit conversions.

### Length

```javascript
length * 3.281
length / 3.281
```

### Volume

```javascript
volume * 0.264
volume / 0.264
```

### Mass

```javascript
mass * 2.2046
mass / 2.2046
```

Results are displayed with three decimal places using:

```javascript
.toFixed(3)
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/saisanjana2410/unit-converter.git
```

Open `index.html` in your browser.

---

## Learning Objectives

This project helped practice:

* DOM Manipulation
* Event Handling
* Functions
* User Input Processing
* String Interpolation
* JavaScript Number Methods
* Responsive Styling with CSS
