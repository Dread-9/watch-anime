import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  animes = [
    {
      title: 'Naruto',
      subtitle: 'El camino del ninja',
      description: 'Un joven ninja sueña con convertirse en el líder de su aldea.',
      image: 'https://naruto-official.com/special/anime_gallery/anime-gallery1.webp',
    },
    {
      title: 'Attack on Titan',
      subtitle: 'La lucha por la humanidad',
      description: 'La humanidad lucha contra titanes gigantes que amenazan con extinguirlos.',
      image: 'https://www.ecartelera.com/carteles-series/500/535/002_m.jpg',
    },
    {
      title: 'One Piece',
      subtitle: 'Aventuras en el mar',
      description: 'Un joven pirata busca el legendario tesoro One Piece.',
      image: 'https://areajugones.sport.es/wp-content/uploads/2019/09/OnePiecePoster.jpg',
    },
    {
      title: 'Demon Slayer',
      subtitle: 'El asesino de demonios',
      description: 'Un joven lucha contra demonios para salvar a su hermana.',
      image: 'https://m.media-amazon.com/images/I/91VivF555eL._AC_SL1500_.jpg',
    },
    {
      title: 'My Hero Academia',
      subtitle: 'Héroes en formación',
      description: 'Un adolescente sin poderes sueña con ser un héroe.',
      image: 'https://imgmedia.larepublica.pe/640x906/larepublica/migration/images/QKBXUPZ6MFEPHKFZNADV34ZTAA.webp',
    },
    {
      title: 'Dragon Ball Z',
      subtitle: 'Guerreros legendarios',
      description: 'Guerreros protegen la Tierra contra poderosos enemigos.',
      image: 'https://i.pinimg.com/736x/0e/e6/53/0ee6535892f2c0a7e7bc6e2c43e60dae.jpg',
    },
    {
      title: 'Tokyo Ghoul',
      subtitle: 'Terror en Tokio',
      description: 'Un joven se convierte en mitad humano, mitad ghoul.',
      image: 'https://senpaitv.com/wp-content/uploads/2024/07/TOKYO-GHOUL-721x1024.webp',
    },
    {
      title: 'Sword Art Online',
      subtitle: 'Mundos virtuales',
      description: 'Jugadores atrapados en un MMORPG luchan por sobrevivir.',
      image: 'https://wallpapers.com/images/featured/sword-art-online-pddb3chbaddm7bh3.jpg',
    },
  ];

  constructor() {}

}
