import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Action = () => {
  return (
    <section id="actions">
            <div class="col-12">
                <h2>On se revend nos trésors entre Geekoss !</h2>
                <div class="d-flex justify-content-center">
                  <Link class="hidden-sm" to="/add-offer">
                    <button type="button" class="btn btn-primary">Je vends du lourd</button>
                  </Link>
                </div>
                <p class="d-flex justify-content-center"><a href="#">Comment ça marche ?</a></p>
            </div>
        </section>
  )
};

export default Action;