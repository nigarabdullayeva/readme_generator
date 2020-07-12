function generateMarkdown(data) {
    return ` 
    # ${data.title}
    ## Description 
    
    ${data.description}
    
    
    ## Table of Contents (Optional)
    
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    
    
    ## Installation
    
    ${data.installation}
    
    
    ## Usage 
    
    ${data.usage}
    
    
    ## License
    
    ${data.license  === "MIT" ? "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)" : 
    data.license === "IBM" ? "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)" : 
    ""}
    
  
    
    
    ## Contributing
    
    ${data.contributors}
    
    ## Tests
    
    ${data.tests}
    `;
  }
    
  module.exports = generateMarkdown;