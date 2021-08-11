
function renderLicenseBadge(license) {
  if (license == 'No License'){
    return
  }
  if (license == 'Apache'){
   let badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]'
    return badge
  }
  if (license == 'Boost'){
    let badge = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]'
     return badge
   }
  if (license == 'BSD'){
    let badge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]'
     return badge
   }
   if (license == 'Creative Commons'){
    let badge = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]'
     return badge
   }
   if (license == 'Eclipse'){
    let badge = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]'
     return badge
   }
   if (license == 'GNU'){
    let badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
     return badge
   }
   if (license == 'IBM'){
    let badge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]'
     return badge
   }
   if (license == 'ISC'){
    let badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]'
     return badge
   }
   if (license == 'MIT'){
    let badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
     return badge
   }
   if (license == 'Mozilla'){
    let badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]'
     return badge
   }
}

function renderLicenseLink(license) {
  if (license == 'No License'){
    return
  }
  if (license == 'Apache'){
   let link = '(https://opensource.org/licenses/Apache-2.0)'
    return link
  }
  if (license == 'Boost'){
    let link = '(https://www.boost.org/LICENSE_1_0.txt)'
     return link
   }
  if (license == 'BSD'){
    let link = '(https://opensource.org/licenses/BSD-3-Clause)'
     return link
   }
   if (license == 'Creative Commons'){
    let link = '(http://creativecommons.org/publicdomain/zero/1.0/)'
     return link
   }
   if (license == 'Eclipse'){
    let link = '(https://opensource.org/licenses/EPL-1.0)'
     return link
   }
   if (license == 'GNU'){
    let link = '(https://www.gnu.org/licenses/gpl-3.0)'
     return link
   }
   if (license == 'IBM'){
    let link = '(https://opensource.org/licenses/IPL-1.0)'
     return link
   }
   if (license == 'ISC'){
    let link = '(https://opensource.org/licenses/ISC)'
     return link
   }
   if (license == 'MIT'){
    let link = '(https://opensource.org/licenses/MIT)'
     return link
   }
   if (license == 'Mozilla'){
    let link = '(https://opensource.org/licenses/MPL-2.0)'
     return link
   }
}


function renderLicenseSection(license) {
  if (license == 'No License'){
    return
  }
  if (license !== 'No License'){
    const header = '# License';
    return header
  }

}

function generateMarkdown(data) {
   const badge = renderLicenseBadge(data);
   const link = renderLicenseLink (data);
   const section = renderLicenseSection (data);
  return `${section}

  ${badge}${link}

`;
}

module.exports = generateMarkdown;
