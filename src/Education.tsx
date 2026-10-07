

const Education = ()=>{


    
    return (
        <div>
 <div className="flex gap-3 text-xl font-semibold items-center p-1">
  <i className="fa-solid fa-graduation-cap text-slate-700"></i>
  Education
</div>

<div className="mt-4 p-2" id="education-droplets">
  <div
    id="edu-1"
    className="flex mt-6 gap-4 text-lg font-medium text-slate-800"
  >
    {/* Timeline */}
<div className="flex flex-col">
    <div className="flex items-center space-x-4">
  {/* Icon + vertical line */}
  <div className="flex flex-col items-center">
    <i className="fa-solid fa-circle-check text-slate-600 text-lg"></i>
    <div className="w-1 h-40 bg-slate-300 mt-1"></div> {/* vertical line taller */}
  </div>

  {/* Text content */}
  
  <div className="flex flex-col shadow-xl/20 rounded-xl p-4 animate-fadeUp">
    <div className="flex flex-row">
    <span className="font-medium">Masters of Computer Science</span>
    <span className="text-sm text-slate-500 mt-1">--------------------2020–2021</span>
    </div>
     <div className="flex flex-col">
    <span className="font-medium">University of Wollongong<span className="text-sm text-slate-500 mt-1">--------------------Grade - Distinction</span></span>
    <span className="text-sm text-slate-500 mt-1">Major 1--------Machine Learning & Big Data</span>
    <span className="text-sm text-slate-500 mt-1">Major 2--------Software Engineering</span>
    </div>
  </div>
{/* Bachelor of Engineering  2013–2017*/}
 
</div>
 <div className="flex items-center space-x-4  ">
  {/* Icon + vertical line */}
  <div className="flex flex-col items-center">
    <i className="fa-solid fa-circle-check text-slate-600 text-lg"></i>
    <div className="w-1 h-17 bg-slate-300 mt-1"></div> {/* vertical line taller */}
 
  </div>

  {/* Text content */}
  
   <div className="flex flex-col shadow-xl/50 rounded-xl p-4 animate-fadeUp [animation-delay:240ms]">
    <div className="flex flex-row">
    <span className="font-medium">Bachelor Of Engineering</span>
    <span className="text-sm text-slate-500 mt-1">--------------------2013–2017</span>
    </div>
     <div className="flex flex-col">
    <span className="font-medium">Chitkara University<span className="text-sm text-slate-500 mt-1">--------------------Grade - High Distinction</span></span>
    </div>
  </div>

 
</div>
 {/* <div className="flex flex-col items-center">
    <i className="fa-solid fa-circle-check text-slate-600 text-lg"></i></div> */}
</div>

   
  </div>
</div>


{/* // Certifications */}

<div className="flex mt-6 gap-2 p-1 items-center text-xl font-semibold">
 <i className="fa-solid fa-certificate text-slate-700"></i>
  Certifications
</div>

<div className="mt-4 p-2" id="education-droplets">
  <div
    id="edu-1"
    className="flex mt-6 gap-4 text-lg font-medium text-slate-800"
  >
    {/* Timeline */}
<div className="flex flex-col">
    <div className="flex items-center space-x-4">
  {/* Icon + vertical line */}
  <div className="flex flex-col items-center">
    <i className="fa-solid fa-circle-check text-slate-600 text-lg"></i>
    <div className="w-1 h-40 bg-slate-300 mt-1"></div> {/* vertical line taller */}
  </div>

  {/* Text content */}
  
  <div className="flex flex-col shadow-xl/20 rounded-xl p-4 animate-fadeUp [animation-delay:140ms]">
    <div className="flex flex-row">
    <span className="font-medium">Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900) of Azure</span>
    <span className="text-sm text-slate-500 mt-1">--------------------09/2023</span>
    </div>
    
  </div>
{/* Bachelor of Engineering  2013–2017*/}
 
</div>
 <div className="flex items-center space-x-4  ">
  {/* Icon + vertical line */}
  <div className="flex flex-col items-center">
    <i className="fa-solid fa-circle-check text-slate-600 text-lg"></i>
    <div className="w-1 h-17 bg-slate-300 mt-1"></div> {/* vertical line taller */}
 
  </div>

  {/* Text content */}
  
   <div className="flex flex-col shadow-xl/50 rounded-xl p-4 animate-fadeUp [animation-delay:240ms]">
    <div className="flex flex-row">
    <span className="font-medium">ChatGPT's Operator: Automating Everyday Tasks with AI Agents</span>
    <span className="text-sm text-slate-500 mt-1">-----------02/2025</span>
    </div>
    
    
  </div>

  

 
</div>

<div className="flex items-center space-x-4  ">
  {/* Icon + vertical line */}
  <div className="flex flex-col items-center">
    <i className="fa-solid fa-circle-check text-slate-600 text-lg"></i>
    <div className="w-1 h-17 bg-slate-300 mt-1"></div> {/* vertical line taller */}
 
  </div>

  {/* Text content */}
  
   <div className="flex flex-col shadow-xl/50 rounded-xl p-4 animate-fadeUp [animation-delay:240ms]">
    <div className="flex flex-row">
    <span className="font-medium">.NET Development for Beginners</span>
    <span className="text-sm text-slate-500 mt-1">-----------02/2025</span>
    </div>
    
    
  </div>

  

 
</div>
 {/* <div className="flex flex-col items-center">
    <i className="fa-solid fa-circle-check text-slate-600 text-lg"></i></div> */}
</div>

   
  </div>
</div></div>


    )
}

export default Education;