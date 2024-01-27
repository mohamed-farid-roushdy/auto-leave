import Image from "next/image"
import logo from "../../../public/car-logo.svg"

export const links  =[
    {
        id:1,
        title: "سيارات مستعملة",
        url: "/used-cars",
        img:  require("../../../public/used.png").default
    },
    {
        id:2,
        title: "سيارات جديدة",
        url: "/new-cars",
        img: require("../../../public/new.png").default
    },
    {
        id:3,
        title: "سيارات مستوردة",
        url: "/Imported-cars",
        img: require("../../../public/ship.png").default
    },
    {
        id:4,
        title: "صيانة السيارات",
        url: "/cars-prices",
        img: require("../../../public/service.png").default
    },
    {
        id:5,
        title: "موتوسيكلات",
        url: "/motorcycles",
        img: require("../../../public/moto.png").default
    },
    {
        id:6,
        title: "مركبات أخرى",
        url: "/other-vehicles",
        img: require("../../../public/truck.png").default
    },
    {
        id:7,
        title: "ايجار السيارات",
        url: "/other-vehicles",
        img: require("../../../public/rent-car.png").default
    },
    {
        id:8,
        title: "بيع سيارتك",
        url: "/add-car",
        img: require("../../../public/plus.png").default
    }
]


