import { test } from "node:test";

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

async function main() {
} 

async function deleteContact(idcontact : Number){
    const deleteUser = await prisma.contact.delete({
        where: {
          id: idcontact,
        },
      })
}

async function showOneContact(idcontact : Number){
  const contact = await prisma.contact.findUnique({
    where: {
      id: idcontact,
      },
})
return contact
}

async function showOneCivilite(idcivilite : Number){
  const civilite = await prisma.civilite.findUnique({
    where: {
      id: idcivilite,
      },
})
return civilite
}


async function deleteCivilite(idcivilite : Number){
    const deleteUser = await prisma.civilite.delete({
        where: {
            id: idcivilite,
        },
      })  
}

async function createContact(nom : string, prenom : string, idcivi : Number) {
  const contact = await prisma.contact.create({
    data: {
      nom: nom,
      prenom: prenom,
      idCivilite: idcivi
    },
  });
}

async function createCivilite(libelle : string){
    const civilite = await prisma.civilite.create({
        data: {
          libelle: libelle,
        },
      });
}

async function modifyCivilite(idcivilite : Number, newLib : string){
  const deleteUser = await prisma.civilite.update({
    where: {
        id: idcivilite,
    },
    data: {
      libelle: newLib,
    },
  })   
}

async function modifyContact(idcontact : Number, newNom : string, newPrenom : string, newIdCivil : Number){
  const deleteUser = await prisma.contact.update({
      where: {
          id: idcontact,
      },
      data: {
        nom: newNom,
        prenom: newPrenom,
        idCivilite : newIdCivil,
      },
    })  
}

async function showCivilite(){
    const allcivilite = await prisma.civilite.findMany({
    });
    return allcivilite;
}

async function showContact(){
    const allcontact = await prisma.contact.findMany({});
      return allcontact;
}


module.exports = {
  deleteContact,
  deleteCivilite,
  createContact,
  createCivilite,
  showCivilite,
  showContact,
  modifyCivilite,
  modifyContact,
  showOneCivilite,
  showOneContact
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })