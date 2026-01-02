import { SubHeading } from "@/components/ui/subheading"
import { NewToolContent } from "@/constants/home"

const NewTool = () => {
  const buttons = ["+","-","*","/","(",")"]
  return (
    <div className="w-full h-screen bg-white">
      
      {/* Wrapper */}
      <div className="container h-full mx-auto flex flex-col items-center gap-y-3 py-10">
        
        {/* Sub Heading */}
        <SubHeading content={NewToolContent.subHead} textColor="primary-900" />

        {/* Heading */}
        <h1 className="text-3xl/tight md:text-5xl/tight font-bold capitalize text-primary-900">
          {NewToolContent.heading}
        </h1>

        {/* Paragraph */}
        <p className="max-w-2/4 text-center text-lg text-primary-900 font-normal">
          {NewToolContent.para}
        </p>

        {/* Calculator */}
        <div className="w-full h-full border-10 border-[#D8D8D8] rounded-3xl flex flex-col items-center py-12">
          {/* Wrapper Calculator */}
          <div className="w-10/12 h-full flex flex-col py-2 gap-y-2">
            {/* Heading */}
            <h3 className="text-3xl font-bold">
              {NewToolContent.calHeading}
            </h3>

            {/* Calculator */}
            <div className="w-full h-full border-8 border-border-50 rounded-3xl flex flex-col relative overflow-hidden">
              <textarea className="border-none resize-none focus:outline-4 focus:outline-primary-900 m-6" rows={3} name="function_input" placeholder="Enter a function">
              </textarea>

              <div className="absolute bottom-0 w-full h-12 bg-[#F0EFEF] flex justify-center items-center gap-x-4">
                {
                  buttons.map((btnItem,index)=>{
                    return (
                      <button key={index} className="px-3 bg-white text-primary-900 text-2xl font-medium cursor-pointer">
                        {btnItem}
                      </button>
                    )
                  })
                }
              </div>
            </div>
          </div>



        </div>
      </div>  
    </div>
  )
}

export default NewTool