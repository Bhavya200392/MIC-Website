import React from "react";
const Department =[
    {
        name :"Web Dev",
        detail:"Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away",
        src:"web-dev.png",
    },
    {   name:"App Dev",
        detail:"A good programmer is someone who always looks both ways before crossing a one-way street",
        src:"app-dev.png",
    },
    {   name:"Cyber Security",
        detail:"Programming can be fun, and so can cryptography; however, they should not be combined",
        src:"Cyber.png",
    },
    {   name:"AI/ML",
        detail:"Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning",
        src:"AI.png"
    },
    {   name:"Competitive Coding",
        detail:"Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
        src:"CP.png"
    },
    {   name:"Video Editing",
        detail:"There is an easy way and a hard way. The hard part is finding the easy way",
        src:"Video.png"
    },
    {   name:"Marketing & PR",
        detail:"Even when you are marketing to your entire audience or customer base, you are still simply speaking to a single human at any given time",
        src:"Marketing.svg"
    },
    {   name:"Content Writing",
        detail:"Find enough clever things to say, and you're a Prime Minister; write them down and you're a Shakespeare.",
        src:"Content.svg"
    },
    {   name:"Design",
        detail:"Things aren't always #000000 and #FFFFFF.",
        src:"Design.svg"
    }
]

export default function stores() {
  return (
    <>
    <div className="m-5 flex justify-center font-mono fon">
        <div>
            HEADER PART 
        </div>
    </div>
    
    <div className="flex flex-wrap justify-center sm:p-10 sm:m-0">
            {
            Department.map((Department)=>(      
            <div className="sm:w-80 w-[100vh] border-gray-200 dark:bg-gray-800 dark:border-gray-700 m-2 sm:m-4 rounded-2xl shadow-md border-solid  shadow-[#0000001a] bg-gradient-to-tr from-[#ffffffff] to-[#ECE9E6] overflow-hidden">
                <div className="sm:w-full">
                    <img className="rounded-t-lg object-cover max-w-full" src={Department.src} alt="Department Image" /> {/*Dimn 1200*1200px*/}
                </div>
                <div className="p-5">
                <h5 className="mb-2 text-2xl w-full font-Name font-medium text-[#444444] tracking-tight  dark:text-white">{Department.name}</h5>
                    <p className="mb-3 sm:w-auto w-full font-Para text-gray-700 dark:text-gray-400">{Department.detail}</p>
                </div>
            </div>  
            ))
            }
        </div>

        
    </>
  )
}
