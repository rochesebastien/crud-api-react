const express = require('express');
const app = express();
const cors = require('cors');
const Repository = require('./Repository.js');

app.use(cors());
app.use(express.json());

// ! Affiche les contacts
app.get('/contact', async (req : any, res : any) => {
    const data = await Repository.showContact();
    res.json(data);
});

// ! Affiche les civilites
app.get('/civilite', async (req : any, res :any) => {
    const data = await Repository.showCivilite();
    res.send(data);
});

// ! Ajoute un contact
app.post('/contact', async (req : any, res : any) => {
    const { nom, prenom, idcivilite } = req.body;
    await Repository.createContact(nom, prenom, idcivilite);
    res.send(`Contact ${nom} ${prenom} créé avec succès`);
});

// ! Ajoute une civilite
app.post('/civilite', async (req : any, res :any) => {
    const  libelle  = req.body.libelle;
    await Repository.createCivilite(libelle);
    res.send(`Civilité ${libelle} créée avec succès`);
});

// ! Modifie une civilite
app.put('/civilite/:id', async (req : any, res :any) => {
    const libelle  = req.body.libelle;
    const id = parseInt(req.params.id);
    await Repository.modifyCivilite(id, libelle);
    res.send(`Modification de la civilite ${id} effectuée avec succès`);
});

// ! Modifie un contact
app.put('/contact/:id', async (req : any, res :any) => {
    const id = parseInt(req.params.id);
    const { nom, prenom, idcivilite } = req.body;
    await Repository.modifyContact(id, nom, prenom, idcivilite);
    res.send(`Modification du contact ${id} effectuée avec succès`);
});

// ! Affiche un contact
app.get('/contact/:id', async (req : any, res :any) => {
    const id = parseInt(req.params.id);
    const data = await Repository.showOneContact(id);
    res.send(data);
});

// ! Affiche un contact
app.get('/civilite/:id', async (req : any, res :any) => {
    const id = parseInt(req.params.id);
    const data = await Repository.showOneCivilite(id);
    res.send(data);
});

// ! Supression d'un contact specifique
app.delete('/contact/:id', async (req :any , res :any) => {
    const id = parseInt(req.params.id);
    await Repository.deleteContact(id);
    res.send(`Contact numéro ${id} supprimé avec succès`);
});

// ! Supression d'une civilite
app.delete('/civilite/:id', async (req : any, res : any) => {
    const id = parseInt(req.params.id);
    await Repository.deleteCivilite(id);
    res.send(`Civilité numéro ${id} supprimée avec succès`);
});

// ! Met en route l'api sur le port voulu 
app.listen(3000, () => {
    console.log('API started');
});
