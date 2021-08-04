// import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

let marked = require("marked");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: `
# Pillow

Python Imaging Library (expansion of PIL) is the de facto image processing package for Python language.
            
## Installation
            
Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.
            
\`\`\`bash
pip install pillow
\`\`\`
            
## Usage
            
\`\`\`python
from PIL import Image
            
# opens image test.png
img = Image.open(r"test.png")
            
# btaining information about the opened image
img = Image.open(r"test.png")
print(img.mode)
            
# returns size of image
img = Image.open(r"test.png")
print(img.size)
\`\`\`
            
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
            
Please make sure to update tests as appropriate.
            
## License
[MIT](https://choosealicense.com/licenses/mit/)
       
    
      `,
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <section id="header-intro">
          <h1 className="text-center d-lg-flex justify-content-lg-center align-items-lg-center">
            <svg className="icon icon-tabler icon-tabler-notes" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="5" y="3" width="14" height="18" rx="2"></rect>
              <line x1="9" y1="7" x2="15" y2="7"></line>
              <line x1="9" y1="11" x2="15" y2="11"></line>
              <line x1="9" y1="15" x2="13" y2="15"></line>
            </svg>
            README Generator
          </h1>
          <p className="subheading">Everyone needs an intro.</p>
          <a class="float-end d-lg-flex justify-content-lg-end align-items-lg-end" href="https://github.com/Somanyu/readme-generator"><i class="fa fa-github" data-bss-hover-animate="bounce"></i></a>
        </section>
        <h1 id="what-why-where" className="question"><a id="heading-link" href="#what-why-where">What.Where.Why?</a></h1>
        <section id="what-is-readme" className="d-lg-flex justify-content-center align-items-center align-content-center align-items-lg-center">
          <div className="card d-inline-flex">
            <div id='cardheader' className="card-header">
              <h5 className="mb-0">What is README.md?</h5>
            </div>
            <div className="card-body">
              <p className="card-text">A <strong>README.md</strong> file contains information about other files in a directory or archive of computer software. A form of documentation, it is usually a simple plain text file called Read Me, READ.ME<br /></p>
            </div>
          </div>
        </section>
        <section id="why-is-readme" className="d-lg-flex justify-content-center align-items-center align-content-center align-items-lg-center">
          <div className="card d-inline-flex">
            <div id="cardheader" className="card-header">
              <h5 className="mb-0">Why is REAMDE.md?</h5>
            </div>
            <div className="card-body">
              <p className="card-text">This <strong>README.md</strong> file is supposed to guide new developers who join the team on how to set up the development environment and start developing/deploying/compiling/committing code to the project.The assumption is that most projects would grow, and there would be many people working on the project as a team.<br /></p>
            </div>
          </div>
        </section>
        <section id="where-is-readme" className="d-lg-flex justify-content-center align-items-center align-content-center align-items-lg-center">
          <div className="card d-inline-flex">
            <div id="cardheader" className="card-header">
              <h5 className="mb-0">Where is README.md ?</h5>
            </div>
            <div class="card-body">
              <p class="card-text">A <strong>README.md</strong> file is usually a text file titled README. txt that is always located at the root of your directory for the convience. Its title indicates that any potential user of your data should consult it before checking any other part of your dataset.<br /></p>
            </div>
          </div>
        </section>
        <section id="how-to-use" className="d-lg-flex justify-content-center align-items-center align-content-center align-items-lg-center">
          <div className="card d-inline-flex">
            <div id="cardheader" className="card-header">
              <h5 class="mb-0">How to use README.md ?</h5>
            </div>
            <div class="card-body">
              <p class="card-text">README.md can be created by just giving an extension .md into the file name. After the creation you can use Markdown syntax for describing your project, how to install and how to do code changes which other users can read. README.md can also be used to create profile for GitHub which acts as an interseting bio.<br /></p>
            </div>
          </div>
        </section>
        <section className="highlight-clean">
          <div className="container">
            <div className="intro">
            {/* README Generator Section  */}
              <h2 id="highlight" className="text-center">README Generator</h2>
              <p id="highlightpara" className="text-center">create an amazing intro for your project or for your profile with this React based readme generator with basic syntax also you can add your own imagination.</p>
            </div>
            <div className="buttons">
              <a id="create" className="btn active" role="button" href="#readmecreate">Create</a>
            </div>
          </div>
        </section>
        <section id="readmecreate">
          <div id="readmecreate-div">
            <h1 id="readmecreate-h1">Create README</h1>
            <p id="readmecreate-para">let everyone read about your awesome project</p>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h3 id="h3title">README Input (editable)</h3>
                <div id="inputdiv" class="d-lg-flex justify-content-lg-center align-items-lg-center"><textarea id="readme-input" class="form-control-lg"
                  value={this.state.markdown}
                  onChange={(e) => {
                    this.updateMarkdown(e.target.value);
                  }}
                ></textarea></div>
              </div>
              <div class="col-md-6">
                <h3 id="h3title">README Preview</h3>
                <div id="readme-preview" class="justify-content-lg-center align-items-lg-center" dangerouslySetInnerHTML={{
                                                                                                   __html: marked(this.state.markdown), 
                                                                                                   }} ></div>
              </div>
            </div>
          </div>
        </section>
        <div id="link-div">
          <p id="link-para">For more guide on markdown syntax, see <a href="https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf">markdown-cheatsheet</a></p>
        </div>
        <footer id="madebyfooter" class="footer-basic">
          <p id="madebypara">Made By <a href="https://github.com/Somanyu">Somanyu</a> and <a href="https://github.com/srija920">Srija</a> with React and hosted on <a href="https://vercel.com">Vercel</a></p>
        </footer>

      </div>
    );
  }
}


