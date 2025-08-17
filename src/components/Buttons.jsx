const Button = ({buttons, links}) => {
    return (
        <>
              {buttons.map((btnText, index) => (
                <a href={links[index]} key={index} className="bg-[#224DBE] hover:bg-[#1464F6] text-white w-1/2 sm:w-1/3 lg:w-1/4 carlito-bold px-6 py-2 rounded-full">
                <button
                  key={index}
                  className="text-center"
                >
                  {btnText}
                </button>
                </a> 
              ))}
            </>
    )

}

export default Button;