//! andle menuButton to go back to previous menu(musicMenu/gameMenu/settingMenu)
import song1 from "../Audio/jaiShreeRam.mp3"
import song3 from "../Audio/dilTodKe.mp3"
import song4 from "../Audio/Naah.mp3"
import song2 from "../Audio/Kordhell.mp3"

export const ArrayList = {
    Menu: [
        {
            parentIndex: 0,
            name: "Cover Flow",
            icon: "https://cdn-icons-png.flaticon.com/128/10062/10062925.png"
        },
        {
            parentIndex: 1,
            name: "Music",
            icon: "https://cdn-icons-png.flaticon.com/128/7566/7566380.png"
        },
        {
            parentIndex: 2,
            name: "Tools",
            icon: "https://cdn-icons-png.flaticon.com/128/2593/2593065.png"
        },
        {
            parentIndex: 3,
            name: "Setting",
            icon: "https://cdn-icons-png.flaticon.com/512/747/747914.png"
        },
    ],
    Music: [
        {
            parentIndex: 4,
            name: "Songs",
            icon: "https://cdn-icons-png.flaticon.com/512/5907/5907562.png"
        },
        {
            parentIndex: 5,
            name: "Albums",
            icon: "https://cdn-icons-png.flaticon.com/128/10062/10062925.png"
        },
        {
            parentIndex: 6,
            name: "Artists",
            icon: "https://cdn-icons-png.flaticon.com/128/2908/2908584.png"
        },
        {
            parentIndex: 7,
            name: "Playlists",
            icon: "https://cdn-icons-png.flaticon.com/128/10062/10062925.png"
        }
    ],
    Tools: [
        {
            parentIndex: 2,
            name: "Calculator",
            icon: "https://cdn-icons-png.flaticon.com/128/891/891175.png",
        },
        {
            parentIndex: 2,
            name: "Torch",
            icon: "https://cdn-icons-png.flaticon.com/128/5545/5545835.png"
        },
        {
            parentIndex: 2,
            name: "Profile",
            icon: " https://cdn-icons-png.flaticon.com/128/1144/1144709.png"
        },
        {
            parentIndex: 2,
            name: "Silent",
            icon: "https://cdn-icons-png.flaticon.com/128/1040/1040258.png"
        }
    ],
    Setting: [
        {
            parentIndex: 3,
            name: "Wallpaper",
            icon: "https://cdn-icons-png.flaticon.com/512/8979/8979955.png"
        },
        {
            parentIndex: 3,
            name: "Theme",
            icon: "https://cdn-icons-png.flaticon.com/512/3876/3876200.png"
        },
        {
            parentIndex: 3,
            name: "Date Time",
            icon: "https://cdn-icons-png.flaticon.com/512/1388/1388629.png"
        },
        {
            parentIndex: 3,
            name: "Language",
            icon: "https://cdn-icons-png.flaticon.com/512/5739/5739233.png"
        }
    ],
    Songs: [
        {
            parentIndex: 4,
            name: "Jai Shree Ram",
            source: song1,
            duration: 28,
            icon: "https://a10.gaanacdn.com/gn_img/albums/7rVW1aRWk5/VW1aNYVBWk/size_l.webp",
        },
        {
            parentIndex: 4,
            name: "Kordhell",
            source: song2,
            duration: 31,
            icon: "https://i1.sndcdn.com/artworks-iXfwM6UF1SG3qugF-771jaA-t500x500.jpg"
        },
        {
            parentIndex: 4,
            name: "Dil Tod ke",
            source: song3,
            duration: 30,
            icon: "https://c.saavncdn.com/997/Dil-Tod-Ke-Hindi-2020-20200714234001-500x500.jpg"
        },
        {
            parentIndex: 4,
            name: "Naah",
            source: song4,
            duration: 30,
            icon: "https://upload.wikimedia.org/wikipedia/en/8/8a/Naah_Cover_Art.jpeg"
        },
    ],
    Album: [
        {
            parentIndex: 5,
            name: "Hustle 2.0",
            icon: "https://a10.gaanacdn.com/gn_img/albums/0wrb4N3Lg7/rb4qEwXMKL/size_l.jpg"
        },
        {
            parentIndex: 5,
            name: "Filhall",
            icon: "https://m.media-amazon.com/images/M/MV5BZjRmNGYzMjEtMTJmYS00NTA1LWJjODEtYmI0NmQ0ZjRlNWUyXkEyXkFqcGdeQXVyMTI0NzQ5OTky._V1_QL75_UX190_CR0,24,190,190_.jpg"
        },
        {
            parentIndex: 5,
            name: "Rustom",
            icon: "https://i.pinimg.com/236x/f9/1d/7c/f91d7c8fbb86deb944e63459a0d0f23b--bollywood-news-bollywood-actors.jpg"
        },
        {
            parentIndex: 5,
            name: "Naah",
            icon: "https://upload.wikimedia.org/wikipedia/en/8/8a/Naah_Cover_Art.jpeg"
        }
    ],
    Artists: [
        {
            parentIndex: 6,
            name: "Arijit Singh",
            icon: "https://c.saavncdn.com/artists/Arijit_Singh_002_20230323062147_500x500.jpg"
        },
        {
            parentIndex: 6,
            name: "Honey Singh",
            icon: "https://c.saavncdn.com/artists/Yo_Yo_Honey_Singh_002_20221216102650_500x500.jpg"
        },
        {
            parentIndex: 6,
            name: "Badshah",
            icon: "https://c.saavncdn.com/artists/Badshah_005_20230608084021_500x500.jpg"
        },
        {
            parentIndex: 6,
            name: "Diljit Dosanjh",
            icon: "https://c.saavncdn.com/artists/Diljit_Dosanjh_004_20221006184535_500x500.jpg"
        }
    ],
    Playlists: [
        {
            parentIndex: 7,
            name: "Hustle 2.0",
            icon: "https://a10.gaanacdn.com/gn_img/albums/0wrb4N3Lg7/rb4qEwXMKL/size_l.jpg"
        },
        {
            parentIndex: 7,
            name: "Filhall",
            icon: "https://m.media-amazon.com/images/M/MV5BZjRmNGYzMjEtMTJmYS00NTA1LWJjODEtYmI0NmQ0ZjRlNWUyXkEyXkFqcGdeQXVyMTI0NzQ5OTky._V1_QL75_UX190_CR0,24,190,190_.jpg"
        },
        {
            parentIndex: 7,
            name: "Rustom",
            icon: "https://i.pinimg.com/236x/f9/1d/7c/f91d7c8fbb86deb944e63459a0d0f23b--bollywood-news-bollywood-actors.jpg"
        },
        {
            parentIndex: 7,
            name: "Naah",
            icon: "https://upload.wikimedia.org/wikipedia/en/8/8a/Naah_Cover_Art.jpeg"
        }
    ],
}
