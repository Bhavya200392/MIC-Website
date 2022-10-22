import React from "react";
//Making Array of departments 
const Department =[
    {
        name :"Web Dev",
        detail:"Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away",
        src:"web-dev.png",
        alt:'Web-Dev',
    },
    {   name:"App Dev",
        detail:"A good programmer is someone who always looks both ways before crossing a one-way street",
        src:"app-dev.png",
        alt:'App-Dev',
    },
    {   name:"Cyber Security",
        detail:"Programming can be fun, and so can cryptography; however, they should not be combined",
        src:"Cyber.png",
        alt:'Cyber Security',
    },
    {   name:"AI/ML",
        detail:"Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning",
        src:"AI.png",
        alt:'AI/ML',
    },
    {   name:"Competitive Coding",
        detail:"Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
        src:"CP.png",
        alt:'Competitive Coding',
    },
    {   name:"Video Editing",
        detail:"There is an easy way and a hard way. The hard part is finding the easy way",
        src:"Video.png",
        alt:'Video Editing',
    },
    {   name:"Marketing & PR",
        detail:"Even when you are marketing to your entire audience or customer base, you are still simply speaking to a single human at any given time",
        src:"Marketing.svg",
        alt:'Marketing & PR',
    },
    {   name:"Content Writing",
        detail:"Find enough clever things to say, and you're a Prime Minister; write them down and you're a Shakespeare.",
        src:"Content.svg",
        alt:'Content Writing',
    },
    {   name:"Design",
        detail:"Things aren't always #000000 and #FFFFFF.",
        src:"Design.svg",
        alt:'Design',
    }
]

export default function stores() {
  return (
  <>
    <div className="m-5 flex justify-center font-mono">
        <div>
            {/* Header part*/}
            HEADER PART        
        </div>
    </div>

    {/* Department Body */}
    <div className="flex flex-wrap justify-center sm:p-10 sm:m-0">
            {
            Department.map((Department)=>(      
            <div key={Department.alt} className=" md:w-80 w-64 border-gray-200 dark:bg-gray-800 dark:border-gray-700 md:m-6 sm:m-4 m-3 rounded-2xl shadow-md border-solid  shadow-[#0000001a] bg-gradient-to-tr from-[#ffffffff] to-[#ECE9E6] overflow-hidden">
                <div className="sm:w-full ">
                    <img className="rounded-t-lg object-cover max-w-full" src={Department.src} alt={Department.alt} />
                </div>
                <div className="p-5 flex flex-col justify-center">
                <h5 className="mb-2 text-2xl w-full font-Name font-medium text-[#444444] tracking-tight  dark:text-white">{Department.name}</h5>
                    <p className="mb-3 sm:w-auto w-full font-Para text-gray-700 dark:text-gray-400">{Department.detail}</p>
                </div>
            </div>  
            ))
            }
        </div>

        {/* Footer Part */}
        <div className="flex justify-center">
            Footer Part
        </div>
        
    </>
  )
}
