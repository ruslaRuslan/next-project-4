


interface NavItems {
    id: number;
    img: any;
    title: string;
    href: any
}
export const navItems = [
    {
        id: 0,
        title: "Home",
        href: "/",
    },
    {
        id: 1,
        title: "Shop",
        href: "/shop",
    },
    {
        id: 2,
        title: "About",
        href: "/about",
    },
    {
        id: 3,
        title: "Blog",
        href: "/blog",
    },

    {
        id: 4,
        title: "Help",
        href: "/help",
    },

    {
        id: 6,
        title: "Contact",
        href: "/contact",
    },
    {
        id: 7,
        title: "Search",
        href: "/search",
    },
    {
        id: 8,
        title: "My account",
        href: "/myAccount",
    },
];
















interface Earrings {
    id: number;
    img: any;
    title: string;
    price: number;
    basket: any;
}

export const earrings: Earrings[] = [
    {
        id: 0,
        img: "/images/earring1.svg",
        title: "Lira Earrings",
        price: 20,
        basket: "/images/basket.svg",
    },
    {
        id: 1,
        img: "/images/earring2.svg",
        title: "Hal Earrings",
        price: 25,
        basket: "/images/basket.svg",
    },
    {
        id: 2,
        img: "/images/earring3.svg",
        title: "Kaede Hair Pin Set Of 3 ",
        price: 30,
        basket: "/images/basket.svg",
    },
    {
        id: 3,
        img: "/images/earring4.svg",
        title: "Hair Pin Set of 3",
        price: 30,
        basket: "/images/basket.svg",
    },
    {
        id: 4,
        img: "/images/earring5.svg",
        title: "Plaine Necklace",
        price: 19,
        basket: "/images/basket.svg",
    },
    {
        id: 5,
        img: "/images/earring6.svg",
        title: "Yuki Hair Pin Set of 3",
        price: 29,
        basket: "/images/basket.svg",
    },
];


interface BlogType {
    id: number;
    img: any;
    title: string;
    fashionDate: string;
    text: string;
    info: string
}



export const blog: BlogType[] = [
    {
        id: 0,
        img: "/images/blog1.svg",
        fashionDate: "Fashion - October 8, 2020",
        title: "Top Trends From Spring",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... ",
        info: "Read More",

    },
    {
        id: 1,
        img: "/images/blog2.svg",
        fashionDate: "Fashion - October 8, 2020",
        title: "Top Trends From Spring",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... ",
        info: "Read More",

    },
    {
        id: 2,
        img: "/images/blog3.svg",
        fashionDate: "Fashion - October 8, 2020",
        title: "Top Trends From Spring",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... ",
        info: "Read More",

    },
    {
        id: 3,
        img: "/images/blog4.svg",
        fashionDate: "Fashion - October 8, 2020",
        title: "Top Trends From Spring",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... ",
        info: "Read More",


    },

];