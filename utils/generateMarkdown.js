function generateMarkdown(data) {
    return ` 
    # ${data.title}

    ## Description 
    ${data.description}
    
    ### How application works.Please click to the link for detailed video
    https://drive.google.com/file/d/1_PEksCCXW-uVJIuvEt-QJ9F7RQMIQ7NZ/view?usp=sharing

    
    ## Table of Contents (Optional)
    
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing] (#contributing)
    
    
    ## Installation
    ${data.installation}
    
    
    ## Usage 
    ${data.usage}
    
    
    ## License
    ${data.license  === "MIT" ? "[![MIT license](https://img.shields.io/badge/License-${response.license}-blue.svg)](https://lbesson.mit-license.org/)" : 
    data.license === "IBM" ? "[![License: IPL 1.0](https://img.shields.io/badge/License-${response.license}%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)" : 
    ""}
    
    
    ## Contributing
    ${data.contributing}


    ## Questions and contacts 
    ### For any questions please contact with me via links bellow
    E-mail: https://github.com/${data.email}
    GitHub ${data.github}

    `;
  }
   

    
  module.exports = generateMarkdown;