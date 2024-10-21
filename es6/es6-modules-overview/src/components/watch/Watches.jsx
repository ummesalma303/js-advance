import { useEffect, useState } from "react";
import Watch from "./Watch";

function Watches() {
    const [watches, setWatches] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ummesalma303/watches-data/refs/heads/main/watches.json')
        // fetch('watches.json')
            .then(res => res.json())
        .then(data=>setWatches(data))
    },[])
    return (
        <div>
            {
                watches.map(watch=><Watch key={watch.id} watch={watch}></Watch>)
            }
        </div>
    );
}

export default Watches;