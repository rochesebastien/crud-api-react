"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require('express');
const app = express();
const cors = require('cors');
const Repository = require('./Repository.js');
app.use(cors());
app.use(express.json());
// ! Affiche les contacts
app.get('/contact', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield Repository.showContact();
    res.json(data);
}));
// ! Affiche les civilites
app.get('/civilite', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield Repository.showCivilite();
    res.send(data);
}));
// ! Ajoute un contact
app.post('/contact', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nom, prenom, idcivilite } = req.body;
    yield Repository.createContact(nom, prenom, idcivilite);
    res.send(`Contact ${nom} ${prenom} créé avec succès`);
}));
// ! Ajoute une civilite
app.post('/civilite', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const libelle = req.body.libelle;
    yield Repository.createCivilite(libelle);
    res.send(`Civilité ${libelle} créée avec succès`);
}));
// ! Modifie une civilite
app.put('/civilite/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const libelle = req.body.libelle;
    const id = parseInt(req.params.id);
    yield Repository.modifyCivilite(id, libelle);
    res.send(`Modification de la civilite ${id} effectuée avec succès`);
}));
// ! Modifie un contact
app.put('/contact/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { nom, prenom, idcivilite } = req.body;
    yield Repository.modifyContact(id, nom, prenom, idcivilite);
    res.send(`Modification du contact ${id} effectuée avec succès`);
}));
// ! Affiche un contact
app.get('/contact/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const data = yield Repository.showOneContact(id);
    res.send(data);
}));
// ! Affiche un contact
app.get('/civilite/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const data = yield Repository.showOneCivilite(id);
    res.send(data);
}));
// ! Supression d'un contact specifique
app.delete('/contact/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    yield Repository.deleteContact(id);
    res.send(`Contact numéro ${id} supprimé avec succès`);
}));
// ! Supression d'une civilite
app.delete('/civilite/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    yield Repository.deleteCivilite(id);
    res.send(`Civilité numéro ${id} supprimée avec succès`);
}));
// ! Met en route l'api sur le port voulu 
app.listen(3000, () => {
    console.log('API started');
});
