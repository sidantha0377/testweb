import React from "react";
import "./Budget.css";

export default function Budget() {
  const components = [
    { component: "ESP32 Board", unitPrice: 1790, units: 2, price: 3580 },
    { component: "Ultrasonic Sensor", unitPrice: 1090, units: 3, price: 3270 },
    { component: "Solenoid Lock", unitPrice: 1950, units: 3, price: 5850 },
    { component: "Led(Red,Green)", unitPrice: 5, units: 6, price: 30 },
    { component: "Relay Module", unitPrice: 845, units: 3, price: 2535 },
    { component: "20x4 LCD Display", unitPrice: 990, units: 1, price: 990 },
    {
      component: "R305 Fingerprint Sensor",
      unitPrice: 9950,
      units: 1,
      price: 9950,
    },
    { component: "4x4 Keypad", unitPrice: 220, units: 1, price: 220 },
    { component: "I2C module(Keypad)", unitPrice: 900, units: 1, price: 900 },
    {
      component: "I2C module(LCD Display)",
      unitPrice: 250,
      units: 1,
      price: 250,
    },
    {
      component: "5V SMPC Power supply",
      unitPrice: 1390,
      units: 1,
      price: 1390,
    },
    {
      component: "12V SMPC Power supply",
      unitPrice: 3290,
      units: 1,
      price: 3290,
    },
  ];

  const total = components.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="budget">
      <div className="iname">Estimated Budget</div>
      <div className="description">
        Below is a breakdown of the estimated costs for the hardware.
      </div>

      <div className="table-container">
        <table className="components-table">
          <thead className="table-header">
            <tr>
              <th className="header-cell component-col">Component</th>
              <th className="header-cell unit-price-col">Unit Price (LKR)</th>
              <th className="header-cell units-col">Units</th>
              <th className="header-cell price-col">Price (LKR)</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {components.map((item, index) => (
              <tr key={index} className="table-row">
                <td className="table-cell component-name">{item.component}</td>
                <td className="table-cell unit-price">
                  {item.unitPrice.toLocaleString()}
                </td>
                <td className="table-cell units">{item.units}</td>
                <td className="table-cell total-price">
                  {item.price.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="table-footer">
            <tr className="total-row">
              <td className="table-cell total-label" colSpan="3">
                Total
              </td>
              <td className="table-cell grand-total">
                {total.toLocaleString()}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="summary-stats">
        <p className="stat-item">Total Components: {components.length}</p>
        <p className="stat-item">
          Total Units: {components.reduce((sum, item) => sum + item.units, 0)}
        </p>
      </div>
    </div>
  );
}
