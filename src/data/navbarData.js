import { mdiFood, mdiBeer, mdiHamburger, mdiFoodHotDog, mdiNoodles } from '@mdi/js';

export const navbarData = [
    {
        id: 1,
        title: "Semua Menu",
        category: "all menus",
        icon: mdiFood,
    },
    {
        id: 2,
        title: "Makanan",
        category: "foods",
        icon: mdiHamburger
    },
    {
        id: 3,
        title: "Minuman",
        category: "drinks",
        icon: mdiBeer
    },
    {
        id: 4,
        title: "Mie dan Pasta",
        category: "noodles and pasta",
        icon: mdiNoodles
    },
    {
        id: 5,
        title: "Cemilan",
        category: "meals",
        icon: mdiFoodHotDog, mdiNoodles
    },
]