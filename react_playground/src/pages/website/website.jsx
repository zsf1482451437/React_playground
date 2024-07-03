import { useEffect } from "react";

import { getWebsite } from "@request/website/websiteApi";

const Website = () => {
    useEffect(() => {
        getWebsite().then((res) => {
            console.log(res);
        });
     }, []);
    return (
        <div>
            <h2>Website</h2>
        </div>
    )
}

export default Website;
