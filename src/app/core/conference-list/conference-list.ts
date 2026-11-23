import { Component } from '@angular/core';
import { Conference } from '../../Model/conference';
import { CommonModule } from '@angular/common';
@Component({
  imports: [CommonModule],
  selector: 'app-conference-list',
  styleUrl: './conference-list.css',
  templateUrl: './conference-list.html',
})
export class ConferenceList {
  confList:Conference[]=[{

    id: 1,

    titre: 'Angular Workshop',

    description: 'Découvrez les nouveautés d’Angular et développez vos compétences.',

    date: new Date('2026-10-15'),

    lieu: 'Tunis',

    prix: 50,

    imageUrl: 'images/event.jpeg',

    nbPlaces: 30,

    category:'Technologie',
    nbLikes: 7

    },

  {

   id: 2,

   titre: 'Music Festival 2026',

   description: 'Un festival musical avec plusieurs artistes et groupes.',

   date: new Date('2026-10-22'),

   lieu: 'Sousse',

   prix: 80,

   imageUrl: 'images/event.jpeg',

   nbPlaces: 0,

   category: 'Musique',
   nbLikes: 20

  },

  {

   id: 3,

   titre: 'AI & Innovation Conference',

   description: 'Une conférence consacrée à l’intelligence artificielle et à l’innovation.',

   date: new Date('2026-11-18'),

   lieu: 'Hammamet',

   prix: 100,

   imageUrl: 'images/event.jpeg',

   nbPlaces: 150,

   category: 'Technologie',
   nbLikes: 4

  },

  {

   id: 4,

   titre: 'Startup Meetup',

   description: 'Une rencontre entre entrepreneurs, étudiants et professionnels.',

   date: new Date('2026-11-05'),

   lieu: 'Tunis',

   prix: 30,

   imageUrl: 'images/event.jpeg',

   nbPlaces: 100,

   category: 'Business',
   nbLikes: 10

  },

 ];
}
