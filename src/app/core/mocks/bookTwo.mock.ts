import { BookModel } from '../models/book.model';

export const mockBookTwo = {
  isbn: 'a460afed-e5e7-4e39-a39d-c885c05db861',
  title: 'Henri Potier et la Chambre des secrets',
  price: 30,
  cover: 'http://henri-potier.xebia.fr/hp1.jpg',
  synopsis: [
    'Henri Potier passe l\'été chez les Dursley et reçoit la visite de Dobby, un elfe de maison. Celui-ci vient l\'avertir que des évènements étranges vont bientôt se produire à Poudlard et lui conseille donc vivement de ne pas y retourner. Henri choisit d\'ignorer cet avertissement. Le jour de son départ pour l\'école, il se retrouve bloqué avec Ron Weasley à la gare de King\'s Cross, sans pouvoir se rendre sur le quai 9 ¾ où les attend le Poudlard Express. En dernier recours, les garçons se rendent donc à Poudlard à l\'aide de la voiture volante de Monsieur Weasley et manquent de peu de se faire renvoyer dès leur arrivée à l\'école pour avoir été aperçus au cours de leur voyage par plusieurs moldus.',
    'Le nouveau professeur de défense contre les forces du mal, Gilderoy Lockhart, se montre particulièrement narcissique et inefficace. Pendant ce temps, Henri entend une voix étrange en parcourant les couloirs du château, systématiquement associée à la pétrification immédiate d\'un élève moldu de l\'école. Dès la première attaque, un message sanglant apparaît sur l\'un des murs, informant que la Chambre des secrets a été ouverte. Dumbledore et les autres professeurs (ainsi que Henri, Ron et Hermione) doivent prendre les mesures nécessaires pour trouver l\'identité du coupable et protéger les élèves contre de nouvelles agressions.'
  ]
} as BookModel;
