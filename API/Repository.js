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
Object.defineProperty(exports, "__esModule", { value: true });
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
function deleteContact(idcontact) {
    return __awaiter(this, void 0, void 0, function* () {
        const deleteUser = yield prisma.contact.delete({
            where: {
                id: idcontact,
            },
        });
    });
}
function showOneContact(idcontact) {
    return __awaiter(this, void 0, void 0, function* () {
        const contact = yield prisma.contact.findUnique({
            where: {
                id: idcontact,
            },
        });
        return contact;
    });
}
function showOneCivilite(idcivilite) {
    return __awaiter(this, void 0, void 0, function* () {
        const civilite = yield prisma.civilite.findUnique({
            where: {
                id: idcivilite,
            },
        });
        return civilite;
    });
}
function deleteCivilite(idcivilite) {
    return __awaiter(this, void 0, void 0, function* () {
        const deleteUser = yield prisma.civilite.delete({
            where: {
                id: idcivilite,
            },
        });
    });
}
function createContact(nom, prenom, idcivi) {
    return __awaiter(this, void 0, void 0, function* () {
        const contact = yield prisma.contact.create({
            data: {
                nom: nom,
                prenom: prenom,
                idCivilite: idcivi
            },
        });
    });
}
function createCivilite(libelle) {
    return __awaiter(this, void 0, void 0, function* () {
        const civilite = yield prisma.civilite.create({
            data: {
                libelle: libelle,
            },
        });
    });
}
function modifyCivilite(idcivilite, newLib) {
    return __awaiter(this, void 0, void 0, function* () {
        const deleteUser = yield prisma.civilite.update({
            where: {
                id: idcivilite,
            },
            data: {
                libelle: newLib,
            },
        });
    });
}
function modifyContact(idcontact, newNom, newPrenom, newIdCivil) {
    return __awaiter(this, void 0, void 0, function* () {
        const deleteUser = yield prisma.contact.update({
            where: {
                id: idcontact,
            },
            data: {
                nom: newNom,
                prenom: newPrenom,
                idCivilite: newIdCivil,
            },
        });
    });
}
function showCivilite() {
    return __awaiter(this, void 0, void 0, function* () {
        const allcivilite = yield prisma.civilite.findMany({});
        return allcivilite;
    });
}
function showContact() {
    return __awaiter(this, void 0, void 0, function* () {
        const allcontact = yield prisma.contact.findMany({});
        return allcontact;
    });
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
};
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
