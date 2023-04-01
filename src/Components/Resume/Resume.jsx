import React from 'react'
import "./Resume.css"

const Resume = () => {
  return (
    <div className="container">
        <div className="main-title">
            <h3>RESUME</h3>
            <h6>MY Formal Bio Detail</h6>
        </div>
        <div className="content">
          <input type="radio" name='indicator' checked id='education' />
          <input type="radio" name='indicator' id='programming_skill' />
          <input type="radio" name='indicator' id='project' />
          <input type="radio" name='indicator' id='intrest' />
          <div className="list">
          <label htmlFor="education" className="education">
            <i className="fas fa-user"></i>
          <span className="topic">Education</span>
          </label>
            
          <label htmlFor="programming_skill" className="programming_skill">
          <i className="fas fa-code"></i>
          <span className="topic">Programming Skill</span>
          </label>
            
          <label htmlFor="project" className="project">
          <i class="fas fa-chart-column"></i>
          <span className="topic">Project</span>
          </label>
            
          <label htmlFor="intrest" className="intrest">
          <i className="fas fa-palette"></i>
          <span className="topic">Intrest</span>
          </label>
          
            <div className="indicator"></div>
          </div>
          <div className="text-content">
            <div className="education text">
            <div className="title">education content</div>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus illum iure laudantium eaque quo velit exercitationem dolor nam nesciunt, delectus commodi nobis laboriosam consequuntur! Voluptas earum veritatis dolorum ipsa ea quisquam. Temporibus, exercitationem alias aliquam at nobis illum sequi. Ducimus dolores temporibus deserunt labore quas explicabo aliquam? Vitae, amet officia eveniet quasi ut ipsum ratione accusamus! Laborum fugiat autem officia quia molestias cupiditate impedit, pariatur nobis. Ipsa labore obcaecati numquam facilis incidunt iusto dolores a provident, neque fugit excepturi quo in, enim asperiores. Assumenda similique aut cumque excepturi harum minus. Voluptates in excepturi quis placeat quas enim tempore architecto facilis.
              </p>
          </div>
          <div className="Programming_skill text">
            <div className="title">Programming_skill content</div>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus illum iure laudantium eaque quo velit exercitationem dolor nam nesciunt, delectus commodi nobis laboriosam consequuntur! Voluptas earum veritatis dolorum ipsa ea quisquam. Temporibus, exercitationem alias aliquam at nobis illum sequi. Ducimus dolores temporibus deserunt labore quas explicabo aliquam? Vitae, amet officia eveniet quasi ut ipsum ratione accusamus! Laborum fugiat autem officia quia molestias cupiditate impedit, pariatur nobis. Ipsa labore obcaecati numquam facilis incidunt iusto dolores a provident, neque fugit excepturi quo in, enim asperiores. Assumenda similique aut cumque excepturi harum minus. Voluptates in excepturi quis placeat quas enim tempore architecto facilis.
              </p>
          </div>
          <div className="Project text">
            <div className="title">project content</div>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus illum iure laudantium eaque quo velit exercitationem dolor nam nesciunt, delectus commodi nobis laboriosam consequuntur! Voluptas earum veritatis dolorum ipsa ea quisquam. Temporibus, exercitationem alias aliquam at nobis illum sequi. Ducimus dolores temporibus deserunt labore quas explicabo aliquam? Vitae, amet officia eveniet quasi ut ipsum ratione accusamus! Laborum fugiat autem officia quia molestias cupiditate impedit, pariatur nobis. Ipsa labore obcaecati numquam facilis incidunt iusto dolores a provident, neque fugit excepturi quo in, enim asperiores. Assumenda similique aut cumque excepturi harum minus. Voluptates in excepturi quis placeat quas enim tempore architecto facilis.
              </p>
          </div>
          <div className="intrest text">
            <div className="title">intrest content</div>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus illum iure laudantium eaque quo velit exercitationem dolor nam nesciunt, delectus commodi nobis laboriosam consequuntur! Voluptas earum veritatis dolorum ipsa ea quisquam. Temporibus, exercitationem alias aliquam at nobis illum sequi. Ducimus dolores temporibus deserunt labore quas explicabo aliquam? Vitae, amet officia eveniet quasi ut ipsum ratione accusamus! Laborum fugiat autem officia quia molestias cupiditate impedit, pariatur nobis. Ipsa labore obcaecati numquam facilis incidunt iusto dolores a provident, neque fugit excepturi quo in, enim asperiores. Assumenda similique aut cumque excepturi harum minus. Voluptates in excepturi quis placeat quas enim tempore architecto facilis.
              </p>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Resume
