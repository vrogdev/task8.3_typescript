import { Company } from './Company'
import { Frontend } from './Frontend'
import { Backend } from './Backend'

const europeCompany = new Company();

const frontendEmployee1 = new Frontend("Frontend1", "ProjectA");
const frontendEmployee2 = new Frontend("Frontend2", "ProjectB");
const backendEmployee1 = new Backend("Backend1", "ProjectA");
const backendEmployee2 = new Backend("Backend2", "ProjectC");

europeCompany.add(frontendEmployee1);
europeCompany.add(frontendEmployee2);
europeCompany.add(backendEmployee1);
europeCompany.add(backendEmployee2);

console.log("Project List:", europeCompany.getProjectList());
console.log("Name List:", europeCompany.getNameList());