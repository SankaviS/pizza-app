import React from "react";
import Pizza from "../components/pizza";
import pizzas from "../Pizzaitem";
const Homescreen = () => {
  return (
    <div>
      <div className="row">
        {pizzas.map((pizza) => {
          return (
            <div className="col-md-4 p-3">
              <div>
                <Pizza pizza={pizza}/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homescreen;
