import AdobeTagManager from './AdobeTagManager';

const config = {
    enabled: true,
    vendors: [
        {
            name: "Adobe Tag Manager",
            api: new AdobeTagManager()
        },
    ],
    pageDefaults: routeState => {
        //const paths = routeState.pathname.substr(1).split("/");
        const timestamp = new Date();
        return {
            timestamp,
            siteName: "Dell Technologies VR",
            //category: !paths[0] ? "landing" : paths[0]
        };
    },
    pageViewEvent: "pageLoad",
    debug: true
};

export default config;
