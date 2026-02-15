import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import picExp1 from '../assets/pic1.jpg'
import picExp2 from '../assets/pic2.jpg'

export const data = () =>[
    {
        date: "2024-2025",
        title: "FullStack",
        link:"https://github.com/sam1760/reactweb",
        material:[
            "React",
            "Next",
            "TailWind"
        ],
        descriptions:[
            {type: faGithub, link:""},
            {type: faYoutube, link:""}
        ],
        skill:[
            ['React','Next'],
            ['MUI']
        ],
        picture: picExp1
    },
    {
        date: "2023-2024",
        title: "Tester",
        link:"https://github.com/sam1760/reactweb",
        material:[
            "React",
            "Next",
        ],
        descriptions:[
            {type: faGithub, link:""},
            {type: faYoutube, link:""}
        ],
        skill:[
            ['React','Next'],
            ['MUI']
        ],
        picture: picExp2
    }
]