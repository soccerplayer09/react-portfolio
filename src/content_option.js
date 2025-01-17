const logotext = "dgk";
const meta = {
    title: "Donggoo Kim",
    description: "I’m Donggoo Kim software engineer _ Blockchain expert,currently working in Seoul",
};

const introdata = {
    title: "Donggoo Kim",
    animated: {
        first: "Software Engineer",
        second: "Backend Engineering",
        third: "Blockchain Expert",
    },
    // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum",
    your_img_url: "https://dgk-share.s3.ap-northeast-2.amazonaws.com/images/profile.jpg",
};

const dataabout = {
    title: "Donggoo Kim",
    aboutme: "Joined university with economics major, decided to be a software engineer after being inspired by Uber and Airbnb during US trip in 2019. Currently persuing master degree in computer science. Interested in backend engineering and blockchain especially bitcoin protocol and proof of reserve of non-custodial wallet.",
};
const worktimeline = [{
        jobtitle: "Software Engineer",
        where: "Boeing Korea",
        date: "2021 ~ Present",
    },
];

const skills = [
    {
        name: "Typescript",
        value: 80,
    },
    {
        name: "Nextjs",
        value: 90,
    },
    {
        name: "Nestjs",
        value: 90,
    },
    {
        name: "Python",
        value: 90,
    },
    {
        name: "FastAPI",
        value: 85,
    },
    {
        name: "Kafka",
        value: 60,
    },
];

const services = [{
        title: "Backend",
        description: "TBD",
    },
    {
        title: "Blockchain",
        description: "TBD",
    },
    {
        title: "Security",
        description: "TBD",
    },
];

const dataportfolio = [{
        id: "por",
        title: "Proof of Reserve Platform for Central Exchange",
        img: "https://dgk-share.s3.ap-northeast-2.amazonaws.com/images/por.png",
        demoVideo: "https://dgk-share.s3.ap-northeast-2.amazonaws.com/videos/por.mp4",
        diagram: "https://dgk-share.s3.ap-northeast-2.amazonaws.com/images/por_diagram.png",
        description: "Proof of Reserve Platform for Central Exchange",
        description_detail: "Proof of Reserve Platform for Central Exchange",
        link: "#/portfolio/por",
    },
    {
        id: "bitcoin_nofify",
        title: "Bitcoin Transaction Notification Service",
        img: "https://dgk-share.s3.ap-northeast-2.amazonaws.com/images/trx_notify_service.png",
        demoVideo: "https://dgk-share.s3.ap-northeast-2.amazonaws.com/videos/bitcoin_trx_notify.mp4",
        description: "Wallet Neutral Bitcoin Transaction Notification Service",
        description_detail: "Wallet Neutral Bitcoin Transaction Notification Service",
        link: "#/portfolio/bitcoin_nofify",
    },
];

const contactConfig = {
    YOUR_EMAIL: "dkim3055@gatech.edu",
    // YOUR_FONE: "(999)999-9999",
    // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    // github: "https://github.com",
    // facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/donggookim96/",
    // twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};