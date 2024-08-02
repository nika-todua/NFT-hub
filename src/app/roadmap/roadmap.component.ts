import { Component } from '@angular/core';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrl: './roadmap.component.css'
})
export class RoadmapComponent {


  roadmaparray:any = [
    {
      procents: 0,
      toptxt: 'Phase 01',
      title: 'Planning',
      info: 'Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.',
      cardlist: ["Release website and logo","Grow community","Launch the project"]
    },
    {
      procents: 25,
      toptxt: 'Phase 02',
      title: 'Production',
      info: 'Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.',
      cardlist: ["Release website and logo","Grow community","Launch the project"]
    },
    {
      procents: 50,
      toptxt: 'Phase 03',
      title: 'Launch',
      info: 'Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.',
      cardlist: ["Release website and logo","Grow community","Launch the project"]
    },
    {
      procents: 75,
      toptxt: 'Phase 04',
      title: 'Minting',
      info: 'Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.',
      cardlist: ["Release website and logo","Grow community","Launch the project"]
    },
    {
      procents: 95,
      toptxt: 'Phase 05',
      title: 'New Nfts',
      info: 'Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.',
      cardlist: ["Release website and logo","Grow community","Launch the project"]
    },
    {
      procents: 100,
      toptxt: 'Phase 06',
      title: 'Metaverse',
      info: 'Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.',
      cardlist: ["Release website and logo","Grow community","Launch the project"]
    }
  ]
  
  

}
