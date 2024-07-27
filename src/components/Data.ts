interface NavItems {
    id: number;
    img: any;
    title: string;
    href: any
}
export const navItems = [
    {
        id: 1,
        title: "Home",
        href: "/",
    },
    {
        id: 2,
        title: "Shop",
        href: "/shop",
    },
    {
        id: 3,
        title: "About",
        href: "/about",
    },
    {
        id: 4,
        title: "Blog",
        href: "/blog",
    },

    {
        id: 5,
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
        href: "/my-account",
    },
    {
        id: 9,
        title: "Shopping cart",
        href: "/shopping-cart",
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
        id: 1,
        img: "/images/earring1.svg",
        title: "Lira Earrings",
        price: 20,
        basket: "/images/basket.svg",
    },
    {
        id: 2,
        img: "/images/earring2.svg",
        title: "Hal Earrings",
        price: 25,
        basket: "/images/basket.svg",
    },
    {
        id: 3,
        img: "/images/earring3.svg",
        title: "Kaede Hair Pin Set Of 3 ",
        price: 30,
        basket: "/images/basket.svg",
    },
    {
        id: 4,
        img: "/images/earring4.svg",
        title: "Hair Pin Set of 3",
        price: 30,
        basket: "/images/basket.svg",
    },
    {
        id: 5,
        img: "/images/earring5.svg",
        title: "Plaine Necklace",
        price: 19,
        basket: "/images/basket.svg",
    },
    {
        id: 6,
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
        id: 1,
        img: "/images/blog1.svg",
        fashionDate: "Fashion - October 8, 2020",
        title: "Top Trends From Spring",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... ",
        info: "Read More",

    },
    {
        id: 2,
        img: "/images/blog2.svg",
        fashionDate: "Fashion - October 8, 2020",
        title: "Top Trends From Spring",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... ",
        info: "Read More",

    },
    {
        id: 3,
        img: "/images/blog3.svg",
        fashionDate: "Fashion - October 8, 2020",
        title: "Top Trends From Spring",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... ",
        info: "Read More",

    },
    {
        id: 4,
        img: "/images/blog4.svg",
        fashionDate: "Fashion - October 8, 2020",
        title: "Top Trends From Spring",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... ",
        info: "Read More",


    },

];




interface MyAccountItemsType {
    id: number;
    href: any
    title: string;
}

export const myAccountItems: MyAccountItemsType[] = [
    {
        id: 1,
        href: "/dashboard",
        title: "Dashboard",
    },
    {
        id: 2,
        href: "/orders",
        title: "Orders",
    },
    {
        id: 3,
        href: "/downloads",
        title: "Downloads",
    },
    {
        id: 4,
        href: "/addresses",
        title: "Addresses",
    },

    {
        id: 5,
        href: "/account-details",
        title: "Account details",
    },

    {
        id: 6,
        href: "/logout",
        title: "Logout",
    },


];



interface LoginType {
    id: number;
    href: any
    title: string;
}

export const login: LoginType[] = [
    {
        id: 1,
        href: "/sign-in",
        title: "Sign in",
    },
    {
        id: 2,
        href: "/register",
        title: "Register",
    },
];

