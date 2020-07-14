import React from 'react';
import CategoriesOffer from './CategoriesOffer';
import '../App.css';
import './AddOffer.css';

const AddOffer = () => {
  return (
    <section id="addpick">
      <div class="col-12">
          <h2>Je dépose mon annonce</h2>
          <div class="container-md">
              <form>
                  <div class="form-group">
                      <label htmlFor="title">Que vendez-vous ? <span class="required">*</span></label>
                      <input type="text" class="form-control" id="title" placeholder="Titre de l'annonce"/>
                  </div>
                  <div class="form-group">
                      <label htmlFor="cotegory">Précisez la catégorie <span class="required">*</span></label>
                      <select class="form-control" id="category">
                          <option>Afficher les catégories</option>
                          <CategoriesOffer />
                      </select>
                  </div>
                  <div class="form-group">
                      <label htmlFor="text">Ajouter des photos</label>
                      <textarea class="form-control" id="text" rows="3" placeholder="Texte de votre annonce"></textarea>
                  </div>
                  <div class="form-group">
                      <label htmlFor="text">Décrivez-nous ce que vous vendez <span class="required">*</span></label>
                      <textarea class="form-control" id="text" rows="5" placeholder="Texte de votre annonce"></textarea>
                  </div>
                  <div class="form-group">
                      <label htmlFor="price">Quel est votre prix ? <span class="required">*</span></label>
                      <input type="text" class="form-control" id="price" placeholder="Titre de l'annonce"/>
                  </div>
                  <div class="form-group">
                      <label htmlFor="adress">Ou se trouve ce que vous vendez ? <span class="required">*</span></label>
                      <input type="text" class="form-control" id="adress" placeholder="Adresse"/>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20%C3%89tat%20de%20New%20York%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2sfr!4v1584704204874!5m2!1sfr!2sfr" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                  </div>
                  <div class="form-button">
                      <button type="submit" id="send" class="btn btn-primary">Publier</button>
                  </div>
              </form>
          </div>
      </div>
    </section>
  )
};

export default AddOffer;