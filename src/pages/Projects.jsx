import project1 from '../assets/project1.png'
import project2 from '../assets/project2.avif'
function Projects(){
    return(
        <>
        <div className="home-container">
            <h2>My recent Projects</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptates vitae impedit voluptatibus dolores?</p>
        
            <div className="project-flex">
                <div className="card">

                    <img src={project1} alt="" />
                    <div className="p-flex">
                        <h4>Hulu Home-Clone</h4>
                        <div className='share-icon'>
                            <a href="https://mrgaurav77.github.io/HULU-Clone-by-Gaurav/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
                                </svg></a>
                        </div>
                    </div>
                    
                    <p className="desc">Hulu home page clon by gaurav kolhe using HTML & CSS</p>
                </div>

                <div className="card">
                    <img src={project2} alt="" />
                    <div className="p-flex"></div>
                    <div className="p-flex">
                    <h4>AI Film Recommendation Generator</h4>
                    <div className='share-icon'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
                                </svg>
                        </div>
                    </div>
                    <p className="desc">Get curated show and movie recommendations with OpenAI GPT-3</p>
                </div>
            </div>
        
        </div>
        </>
    )

}
export default Projects;