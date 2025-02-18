import '../styles/cursor.css'

const Cursor = () => {
    return (
        <div className="cursor">
            <div className="cursor-side cursor-heads">
                <svg xmlns="http://www.w3.org/2000/svg" width="340" height="440">
                    <path d="M0 180H60V200H80V20h20V0h40V20h20v80h40v20h60v20h40v20h20v20h20V320H320v60H300v60H100V380H80V340H60V300H40V260H20V240H0V180"/>
                    <path fill="#fff" d="M20 200H60V220H80v60h20V20h40V200h20V120h40v80h20V140h40v80h20V160h20V180h20V320H300v60H280v40H120V380H100V340H80V300H60V260H40V240H20V200"/>
                </svg>
            </div>
            <div className="cursor-side cursor-tails">
                <svg xmlns="http://www.w3.org/2000/svg" width="340" height="440">
                    <path d="M0 180H60V200H80V20h20V0h40V20h20v80h40v20h60v20h40v20h20v20h20V320H320v60H300v60H100V380H80V340H60V300H40V260H20V240H0V180"/>
                    <path fill="#fff" d="M20 200H60V220H80v60h20V20h40V200h20V120h40v80h20V140h40v80h20V160h20V180h20V320H300v60H280v40H120V380H100V340H80V300H60V260H40V240H20V200"/>
                </svg>
            </div>
        </div>    )
}

export default Cursor;
