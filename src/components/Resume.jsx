import resume from "../assets/27424.png"

function Resume(){
    

    return (
        <>
        <h2><a href={resume} download>Check out my resume</a></h2>

        <h2>Front End Skillz</h2>
        <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>etc...</li>
        </ul>
        
        <h2>Backend End Skillz</h2>
        <ul>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MySQL</li>
        <li>etc...</li>
        </ul>

        </>
    )
}


export default Resume;