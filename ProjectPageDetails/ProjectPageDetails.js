import React from 'react';

const ProjectPageDetails = ({projects}) => {
    // console.log(projects);
    const { title, description, img, tools, live, git, features } = projects;
    return (
        <div className="col-md-4">
            <div className="project-body mt-3 mb-5">
            <div className="project-card">
            <div className="project-img">
                    <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="project-details">
                    <h4 className="font-weight-bold">{title}</h4>
                    <p className="project-description">{description}</p>
                    <ul className="list-inline-mb-0 tech-tools align-left">
                        {
                            tools.map(tl => <li className="list-inline-item tools">{tl.item}</li>)
                        }
                    </ul>
                 
                </div>
            </div>
                <div className="project-content">
                <h4 className="ml-4">Features</h4>
                <ul>
                    {
                        features.map(ft => <li>{ft.feature}</li>)
                    }
                </ul>
                <div className="links ml-4 pb-3">
                        <a target="_blank" href={live} className="live-link">Website</a>
                        <a target="_blank" href={git} className="git-link">GitHub</a>
                    </div>
            </div>
            </div>
    
        </div>
    );
};

export default ProjectPageDetails;