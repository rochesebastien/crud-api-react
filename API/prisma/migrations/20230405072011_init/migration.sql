-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "idCivilite" INTEGER NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Civilite" (
    "id" SERIAL NOT NULL,
    "libelle" TEXT NOT NULL,

    CONSTRAINT "Civilite_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_idCivilite_fkey" FOREIGN KEY ("idCivilite") REFERENCES "Civilite"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
