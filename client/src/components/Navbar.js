import React from "react";
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import ContactSupportSharpIcon from '@mui/icons-material/ContactSupportSharp';
import InputRoundedIcon from '@mui/icons-material/InputRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger shadow-lg p-3 mb-5">
         <div className="container-fluid">
            <a className="navbar-brand" href="#"><LocalPizzaIcon fontSize="large" />Pizzeria</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
               <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                     <a className="nav-link active" aria-current="page" href="#"><ContactSupportSharpIcon/></a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link active" href="#"><InputRoundedIcon/></a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link active" href="#"><ShoppingCartRoundedIcon/><span> 0</span></a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
      </div>
  );
};

export default Navbar;
