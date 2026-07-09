// Home-page copy. Defaults are the stock starter strings; a tenant build
// overrides any of them via the "copy" key of tenant.json (arrays replace
// the default list wholesale). This is also where AI-generated copy lands
// in the automated pipeline — same shape, no template changes needed.
const { loadTenant, deepMerge } = require("../config/tenant");

const defaults = {
    meta: {
        title: "Eleventy Starter Template",
        description: "Meta description for the page",
    },
    hero: {
        topper: "Websitero presents",
        title: "Eleventy Starter <br /> Template",
        text: "This starter kit gives you a ready-made website setup built with Eleventy, so you can reuse sections, manage your content in one place, and grow your site easily. It also includes a built-in blog with Decap CMS.",
    },
    services: [
        {
            title: "Service 1",
            text: "Write a short description of the service using common search terms. Aim for 1–2 sentences.",
        },
        {
            title: "Service 2",
            text: "Write a short description of the service using common search terms. Aim for 1–2 sentences.",
        },
        {
            title: "Service 3",
            text: "Write a short description of the service using common search terms. Aim for 1–2 sentences.",
        },
    ],
    about: {
        topper: "About Us",
        title: "About Company Title",
        paragraphs: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ],
        quote: "Successus clientium nostrorum successus noster est. Dediti sumus eventibus qui per se loquuntur.",
        name: "John Doe",
        job: "CEO & Founder",
    },
    seo: {
        topper: "SEO Ranking",
        title: "Highlight a primary service keyword",
        paragraphs: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus.",
            "Vestibulum id ligula porta felis euismod semper. Non tenetur, iure nihil ipsam qui atque commodi id voluptatem nesciunt, quis animi fuga cum doloribus! Eaque laboriosam, unde consectetur iure asperiores ullam. Consequuntur debitis a voluptatibus vitae optio autem explicabo quia neque est quas, in placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus modi laudantium voluptatibus rem libero error minus quia eligendi sapiente eos.",
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        ],
    },
    gallery: {
        topper: "Our Portfolio",
        title: "Expert Backup Generator Installation Services",
    },
    reviews: {
        topper: "Our Reviews",
        title: "Words From Our Customers",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dolor volutpat porttitor sagittis nunc nisl. Sagittis sit pellentesque gravida viverra. Leo ut sed euismod tortor risus et. Ornare non neque, leo, ornare. Lorem ipsum dolor sit amet.",
        items: [
            {
                text: "Dictum dolor, nullam morbi sem in auctor proin. Consequat dolor habitasse nam sed tempor. Viverra magna pharetra rhoncus, nec sed ullamcorper lectus et. Auctor velit diam fermentum consequat. Feugiat viverra massa urna, volutpat orci imperdiet eget eget.",
                name: "John Doe",
                desc: "Homeowner",
                img: "/assets/images/testimonials/profile5.jpg",
            },
            {
                text: "Dictum dolor, nullam morbi sem in auctor proin. Consequat dolor habitasse nam sed tempor. Viverra magna pharetra rhoncus, nec sed ullamcorper lectus et. Auctor velit diam fermentum consequat. Feugiat viverra massa urna, volutpat orci imperdiet eget eget.",
                name: "Jane Doe",
                desc: "Homeowner",
                img: "/assets/images/testimonials/profile-4.jpg",
            },
        ],
    },
    faq: {
        topper: "Company Name Ltd.",
        title: "Frequently Asked Questions",
        text: "Have some questions? Check out our FAQ, where we answer our most common questions.",
        items: [
            {
                question: "A euismod, tincidunt molestie suscipit?",
                answer: "Dictumst lorem ullamcorper rutrum, dolor nam luctus, a viverra nulla ultricies suscipit interdum posuere. Gravida rhoncus libero ultricies, bibendum ut ante rutrum neque. Luctus felis vel velit, justo molestie quis, a cras integer porta orci arcu.",
            },
            {
                question: "Velit platea, ipsum curabitur leo?",
                answer: "Dui sem condimentum, placerat velit, orci cubilia venenatis duis semper. Vehicula rutrum, amet curae varius. Fermentum laoreet conubia, platea elit inceptos senectus posuere.",
            },
            {
                question: "Porta praesent id pharetra lacinia egestas dictumst?",
                answer: "Nunc orci gravidus, nec tortor sed pharetra. Nibh ac nulla non, mauris fusce facilisis, at etiam eget posuere dolor vitae. Etiam curae, curabitur inceptos nisl.",
            },
            {
                question: "Erat elementum rutrum convallis, habitant massa ut fermentum imperdiet?",
                answer: "Elit morbi curae litora, gravida aliquam tincidunt metus himenaeos. Neque curabitur quisque, sodales sapien, habitasse leo sem lectus torquent interdum eget.",
            },
            {
                question: "Faucibus sagittis turpis fames?",
                answer: "Fringilla erat tristique, ac lobortis, sagittis sed viverra nec urna. Luctus porta donec augue, conubia sollicitudin himenaeos, eros non adipiscing commodo mauris molestie odio",
            },
            {
                question: "Donec porttitor imperdiet, commodo turpis, quisque mi consectetur ut ligula?",
                answer: "Quam cursus, id taciti consequat. Sociosqu vel, in porttitor suspendisse. Suscipit nisl nostra, magna ac odio nunc sit.",
            },
            {
                question: "Aenean leo arcu, risus sem mauris libero?",
                answer: "Taciti consectetur, donec consequat in aliquam. Dapibus non suspendisse senectus, erat litora ultrices blandit elementum. Curae varius purus, quisque venenatis feugiat dictumst.",
            },
            {
                question: "Varius mauris aenean, eleifend quam?",
                answer: "Sodales felis risus, fusce curae eget integer. Primis in facilisis, erat litora, quisque euismod hac proin fermentum praesent. Nibh phasellus et, varius cursus, nam accumsan euismod faucibus vel donec.",
            },
        ],
    },
};

module.exports = deepMerge(defaults, loadTenant().copy);
