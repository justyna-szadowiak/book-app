import React, {useState} from 'react';

function ShowLess({description = ''}) {
    const [showMore, setShowMore] = useState(false);
    return ( description &&
        <div>
            <p>
                {showMore ? description : `${description.substring(0,100)}`}
                <button className="buttonStyle" onClick={() => setShowMore(!showMore)}>
                    {showMore ? "Show less" : "Show more"}
                </button>
            </p>
        </div>
    );
}

export default ShowLess;