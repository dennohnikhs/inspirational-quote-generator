import "../../styles/global.css"
import type { AppProps } from "next/app"



//AWS imports 
import { Amplify } from "aws-amplify"
import awsExports from "../../src/aws-exports"
// import from the src file 
Amplify.configure({...awsExports,ssr:true})

//This is a function that allows the components to use external links like access google fonts urls from the styles global css
export default function App({Component,pageProps}:AppProps){
    return<Component{...pageProps}/>
}
