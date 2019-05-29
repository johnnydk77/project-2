import React from 'react';
import { Route, Link } from "react-router-dom"



function GlossaryList() {

    let imgUrl = 'https://images.unsplash.com/photo-1529502669403-c073b74fcefb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
    return (
 
        <div className='img-gloss1'
            style = {{
                backgroundImage: 'url(' + imgUrl + ')', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                width: '90vw',
                margin: '0 auto',
                height: '90vh',
                overflow: 'hidden',
                overflow: 'scroll',
               
            

            }}>

        
    
            <h2 className='gloss-1'>Glossary of Cocktail Terminology</h2>
            <ul className='gloss-list'>
                <li>ABV – alcohol by volume; a measure of how much alcohol is in an alcoholic beverage</li><br></br>

                <li>Amaretto – an Italian liqueur with a sweet almond flavor</li><br></br>

                <li>Angostura bitters – the most popular bitters, made in Trinidad and produced with a secret blend of aromatic spices</li><br></br>

                <li>aperitifs – drinks served before a meal that are intended to stimulate the appetite.</li><br></br>

                <li>bar spoon – a long handled spoon used for stirring and measuring ingredients. Many will have a disc on top that acts as a muddle.</li><br></br>

                <li>bar strainer – a specially shaped strainer that fits over the top of a shaker and prevents piece of ice, fruit and other ingredients from being poured into a serving glass</li><br></br>

                <li>bitters – herb and root extracts or liqueurs flavored with herb and root extracts, traditionally thought to help stimulate the appetite and aid in digestion.</li><br></br>

                <li>Boston Shaker – two pieces, a 26 – 28 oz. mixing tin and a 16 oz. mixing glass, make up the Boston shaker. Use it for shaking or stirring drinks.</li><br></br>

                <li>bourbon – an American whiskey distilled from corn mash, malt, and rye.</li><br></br>

                <li>brandy – a distilled spirit made from grapes, typically aged in oak barrels</li><br></br>

                <li>Cachaça – a Brazilian spirit made from fermented sugarcane</li><br></br>

                <li>Calvados – an apple brandy produced in Normandy in France and aged in oak or chestnut barrels</li><br></br>

                <li>Campari – an Italian bitters with a distinctive red color</li><br></br>


                <li>Cassis – a dark red black current Liqueur</li><br></br>

                <li>chaser – a drink that follows a shot of alcohol</li><br></br>

                <li>Cointreau – a citrus liqueur made with Seville oranges and lemons</li><br></br>

                <li>Cognac – brandy produced around the town of Cognac in western France. VS means the cognac has been matured in oak barrels for at least two years. VSOP and Vieux indicate four years; and Extra or XO indicate 6-10 years of aging.</li><br></br>

                <li>creme de cacao – a cocoa liqueur flavored with roasted cocoa beans and vanilla</li><br></br>

                <li>creme de methe – a creamy peppermint flavored liqueur</li><br></br>

                <li>crusta – a sugared rim on a glass</li><br></br>

                <li>curacao – liqueurs produced from the bitter peel of the Seville orange. It comes in many colors, although blue is very common</li><br></br>

                <li>dash – the smallest ingredient amount measured</li><br></br>

                <li>digestive – a drink consumed after a meal to aid in digestion</li><br></br>

                <li>Drambuie – a Scottish whisky and honey liqueur</li><br></br>

                <li>dry – a term applied to drinks and spirits that are differentiated by degree of sweetness, such as sparkling wines and gin. “Medium dry” is sweeter than “dry”, while “extra dry” is less sweet than “dry”</li><br></br>

                <li>Eau de vie – colorless fruit brandy</li><br></br>

                <li>float – an ingredient carefully poured so that it floats on top of a drink.</li><br></br>

                <li>fortified wine – wine with a spirit added to it</li><br></br>

                <li>Frangelico – an Italian liqueur made from hazelnuts</li><br></br>

                <li>Galliano – a gold-colored Italian liqueur flavored with herbs</li><br></br>

                <li>Genever – juniper-flavored spirit from Holland, the precursor to gin</li><br></br>

                <li>gin – a clear spirit flavored with juniper berries</li><br></br>

                <li>Grand Marnier – an orange liqueur</li><br></br>

                <li>Grappa – clear Italian brandy distilled from the remains of grapes used in wine production</li><br></br>

                <li>grenadine – a sweet pomegranate syrup used to add color and flavor to drinks.</li><br></br>

                <li>Hawthorn Strainer – Hawthorn strainers have a coiled spring-like wire that allows it to sit snugly onto the top of your mixing tin. Drinks that are shaken with ice should be strained through the Hawthorn strainer.</li><br></br>

                <li>Jägermeister – a German herbal liqueur</li><br></br>

                <li>Jigger – a jigger is a two sided metal cup used to measure out liquid. The larger side measures 1 1/2 oz. and is called a jigger. The smaller side is called a pony and measures one ounce. Jiggers come in different sizes so make sure you know which one you’re using before you start pouring.</li><br></br>

                <li>Julep Strainer – A Julep strainer is used to strain stirred drinks from a mixing glass. Unlike the Hawthorn strainer, the Julep strainer is made to fit in the mixing glass, has no spring, and is concave in shape.</li><br></br>

                <li>kirsch – a brandy distilled from fermented cherry juice</li><br></br>

                <li>liqueur – a sweetened spirit that has flavor, aroma and/or color added</li><br></br>

                <li>mixed drink – a drink where alcohol is combined with a mixer</li><br></br>

                <li>mixer – juices, sodas and other non-alcoholic liquids mixed with spirits</li><br></br>

                <li>moonshine – a high proof spirit, often illicitly distilled</li><br></br>

                <li>muddler – a tool with a flat end for crushing herbs, fruits, sugar cubes and other ingredients into drinks.</li><br></br>

                <li>neat – straight liquor, with no mixer, water or ice</li><br></br>

                <li>pastis – a French anise flavored liqueur served as an aperitif</li><br></br>

                <li>Pisco – a clear Chilean brandy</li><br></br>

                <li>pony-jigger – a bar measure made of stainless steel with two cups for measuring ingredients. The jigger is larger and measures 1 1/2 to 2 oz. The pony measures 1 oz</li><br></br>

                <li>pousse-cafes – layered drinks consisting of liqueurs of various weights</li><br></br>

                <li>proof – a measure of how much alcohol (ethanol) is contained in an alcoholic beverage. The alcoholic proof is defined as twice the percentage of alcohol by volume (ABV)</li><br></br>

                <li>quinine – a bitter compound which flavors tonic water;  a malaria preventative</li><br></br>

                <li>rocks, on the – a drink served over ice cubes</li><br></br>

                <li>rum – a spirit distilled from fermented sugarcane and the byproducts of sugar production. Light rum is typically aged in steel tanks. Dark rum is aged in wood casks and has a stronger flavor.</li><br></br>

                <li>sake – a Japanese alcohol made from fermented rice</li><br></br>

                <li>Sambuca – an Italian liqueur flavored with anise and elderberries</li><br></br>

                <li>sherry – a fortified wine made in Southern Spain</li><br></br>

                <li>sloe gin – a liqueur made by macerating crushed sloes, a small tart fruit related to the plum, in gin</li><br></br>

                <li>soda water – carbonated water used as a mixer or to finish drinks</li><br></br>

                <li>soju – a clear Korean grain alcohol</li><br></br>

                <li>Southern Comfort – a whisky liqueur from New Orleans with an orange-peach flavor</li><br></br>

                <li>spirit – a distilled alcohol</li><br></br>

                <li>tequila – a spirit distilled from blue agave cactus</li><br></br>

                <li>tonic water – a slightly bitter, carbonated beverage flavored with quinine that is used in mixed drinks</li><br></br>

                <li>twist – a small piece of citrus peel squeezed over a cocktail to flavor it</li><br></br>

                <li>vermouth – a fortified wine flavored with aromatic herbs and roots</li><br></br>

                <li>virgin – a nonalcoholic version of a drink that typically contains alcohol</li><br></br>

                <li>vodka – a clear spirit distilled from mixtures of grains or potatoes with a neutral taste</li><br></br>

                <li>well drink – a mixed drink made with unspecified brands of spirits</li><br></br>

                <li>wine – an alcoholic beverage made from fermented grapes</li><br></br>

                <li>whiskey/whisky – a spirit made from fermented grain mash and aged in oak barrels</li><br></br>

                <li>zester – a tool for removing the flavorful zest of citrus fruits</li>

            </ul>

            <div className='gloss-button'>
            <button><Link to='/'>Home</Link></button>
            </div>
        </div>


    )

}










export default GlossaryList


