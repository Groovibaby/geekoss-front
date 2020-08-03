import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Action = () => {
  return (
    <section id="actions">
      <div className="col-12">
        <h2>On se revend nos trésors entre Geekoss !</h2>
        <div className="d-flex justify-content-center">
          <Link className="hidden-sm" to="/add-offer">
            <button type="button" className="btn btn-primary">
              Je vends du lourd
            </button>
          </Link>
        </div>
        <p className="d-flex justify-content-center">
          <a href="www.google.fr">Comment ça marche ?</a>
        </p>
      </div>
    </section>
  );
};

export default Action;
