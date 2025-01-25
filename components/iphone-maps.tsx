"use client"
import { PerplexityChat } from "./perplexity-chat"

export function IPhoneMaps() {
 return (
   <div className="w-[300px] h-[600px] bg-white rounded-[40px] shadow-xl overflow-hidden border-8 border-gray-800 relative">
     <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-gray-800 rounded-b-2xl z-10"></div>
     <div className="h-full w-full bg-black relative">
       <div className="absolute inset-0 flex items-center justify-center opacity-10">
         <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
           <circle cx="12" cy="12" r="10"/>
           <path d="M12 16 L12 8"/>
           <path d="M8 12 L16 12"/>
         </svg>
       </div>
       <PerplexityChat />
     </div>
     <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-800 rounded-full"></div>
   </div>
 )
}

