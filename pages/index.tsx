import Head from 'next/head'
import Image from 'next/image'
// components
import { BackgroundImage1, BackgroundImage2, FooterCon, FooterLink, GenerateQuoteButton, GenerateQuoteButtonText, GradientBackgroundCon, QuoteGeneratorCon, QuoteGeneratorInnerCon, QuoteGeneratorSubTitle, QuoteGeneratorTitle, RedSpan } from '@/components/quoteGenerator/quoteGeneratorElement'
// assets
import cloud from "../assets/clouds.png"
import raining from "../assets/rain.png"
import { useState } from 'react'
// import '../styles/global.css'
import "./api/_app"
import { updateQuoteAppData } from '@/src/graphql/mutations'
//interface for our Dynamo Db object

interface UpdateQuoteInfoData{
    id: string
  queryName: string
  quotesGenerated: number
  createdAt: string
  updatedAt: string
}
//type guard for our fetch function
export default function (){
    const [numberOfQuotes,setNumberOfQuotes] = useState(0)
    //function to fetch our DynamoDb Object (quotes generated)
    const updateQuoteInfo = async () =>{
        try{
            
        }catch (error){
            console.log("error getting quote data",error)
        }
    }
    return(
        <> 
        <Head>
            <title>Inspirational  Quote Generator</title>
            <meta name="description" content="fun project to generate quotes"/>
            <meta name="viewport" content="width=dev-width,initial-scale=1" />
            <link rel="icon" href="/favicon.icon" />
        </Head>
        <GradientBackgroundCon>
        {/* Background images */}
             <BackgroundImage1
             src={cloud}
             height="300"
             alt="cloudbackground1"
             />
             <BackgroundImage2
             src={raining}
             height="300"
             alt="cloudbackground2"
             />
             {/* footer  */}
            <FooterCon>
                 <>
             Quotes Generated:{numberOfQuotes}
             <br />
             Developed with  <RedSpan>❤️</RedSpan> by <FooterLink href="https://my-portfolio-hif6icsrf-davidsonlangat316-gmailcom.vercel.app/"
             target="_blank" rel="noopener noreferrer"> @LangatDenis"
             </FooterLink> 
             </>
            </FooterCon>

        </GradientBackgroundCon>
        {/* Quote Generator modal pop-up */}
        {/* <QuoteGeneratorModal /> */}
        {/* QuoteGenerator */}
        <QuoteGeneratorCon>
            <QuoteGeneratorInnerCon>
                <QuoteGeneratorTitle >
                    Daily Inspiration Generator
                </QuoteGeneratorTitle>
                <QuoteGeneratorSubTitle>
                    Looking for a splash of inspiration? Generate a quote card with a random inspirational quote provided by<FooterLink href="https://zenquotes.io/"
             target="_blank" rel="noopener nooreferrer"> ZenQuotesAPI
              
             </FooterLink> 
                    
                </QuoteGeneratorSubTitle>
                <GenerateQuoteButton>
                    <GenerateQuoteButtonText onClick={null}>Make a Quote
                    </GenerateQuoteButtonText>
                </GenerateQuoteButton>
            </QuoteGeneratorInnerCon>
        </QuoteGeneratorCon>
        </>
           )
    }
