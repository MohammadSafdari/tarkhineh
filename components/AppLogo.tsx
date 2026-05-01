import Image from 'next/image';



const AppLogo = () => {
    return(
        <div>
        <Image 
            width={145}
            height={145}
            src="/LOGO-main.png"  
            alt='logo'
          />
        </div>
    )
}

export default AppLogo