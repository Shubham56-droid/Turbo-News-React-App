import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "Chairman Watmore leaves ECB, only 13 months into five-year term",
            "description": "Chairman Ian Watmore leaves the England and Wales Cricket Board only 13 months into a five-year term.",
            "url": "https://www.bbc.co.uk/sport/cricket/58831143",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/14379/production/_120890828_ian_watmore_getty.jpg",
            "publishedAt": "2021-10-07T11:40:19Z",
            "content": "Ian Watmore (left) presents Warwickshire captain Will Rhodes, CEO Stuart Cain and chairman Will McCafferty with the County Championship trophy last month\r\nChairman Ian Watmore has left the England an… [+1272 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "Ashes to go ahead 'subject to conditions', says ECB",
            "description": "England men's Ashes series in Australia this winter will go ahead \"subject to several critical conditions\", says the England and Wales Cricket Board.",
            "url": "https://www.bbc.co.uk/sport/cricket/58788750",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/158E1/production/_120898288_root_paine_ashes.jpg",
            "publishedAt": "2021-10-08T16:55:51Z",
            "content": "England, led by Joe Root (left), lost 4-0 on their most recent tour of Australia in 2017-18\r\nEngland men's Ashes series in Australia this winter will go ahead \"subject to several critical conditions\"… [+2152 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "England tour of West Indies confirmed for next January and March",
            "description": "England will face West Indies in five Twenty20s and three Tests in the Caribbean in January and March next year.",
            "url": "https://www.bbc.co.uk/sport/cricket/58958300",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/7334/production/_121129492_gettyimages-1257926961.jpg",
            "publishedAt": "2021-10-18T16:18:10Z",
            "content": "England won the last Test series against West Indies to claim the final Wisden Trophy\r\nEngland will face West Indies in five Twenty20s and three Tests in the Caribbean in January and March next year.… [+1854 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Afghanistan seek members' support ahead of crucial ICC meeting - Reuters",
            "description": "The Afghanistan Cricket Board (ACB) has requested the support of other full members of the International Cricket Council ahead of next month's crucial meeting where the game's future in the South Asian country is likely to be decided.",
            "url": "https://www.reuters.com/lifestyle/sports/afghanistan-seek-members-support-ahead-crucial-icc-meeting-2021-10-18/",
            "urlToImage": "https://www.reuters.com/resizer/ZGqbQ7O1IALltpj2Giu5XRqXpbs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RQ3B52TK6VP2FPSPRS2O5LOJYI.jpg",
            "publishedAt": "2021-10-18T06:23:00Z",
            "content": "The International Cricket Council (ICC) logo at the ICC headquarters in Dubai, October 31, 2010. REUTERS/Nikhil MonteiroNEW DELHI, Oct 18 (Reuters) - The Afghanistan Cricket Board (ACB) has requested… [+2310 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Shoshana Wodinsky",
            "title": "Leaked U.S. Docs Say Crickets, Not Weapons, Likely Cause of Mysterious 'Havana Syndrome'",
            "description": "If you’re familiar at all with so-called Havana syndrome—the mysterious swath of neural disorders affecting a growing number of U.S. diplomats working abroad—you’re probably familiar with some of the wild speculation surrounding the potential source of the il…",
            "url": "https://gizmodo.com/leaked-u-s-docs-say-crickets-not-weapons-likely-caus-1847777706",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/08dff92522200869a0c3b677ab472e88.jpg",
            "publishedAt": "2021-09-30T21:20:00Z",
            "content": "If youre familiar at all with so-called Havana syndromethe mysterious swath of neural disorders affecting a growing number of U.S. diplomats working abroadyoure probably familiar with some of the wil… [+2603 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "England players relatively relaxed about Ashes in Australia, says Woakes",
            "description": "England men's cricketers are \"relatively relaxed\" about travelling to Australia for the Ashes in December, says all-rounder Chris Woakes.",
            "url": "https://www.bbc.co.uk/sport/cricket/58874150",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/EFEE/production/_121022416_woakes_getty.jpg",
            "publishedAt": "2021-10-11T14:16:51Z",
            "content": "Chris Woakes (right) has taken 119 wickets and scored 1,389 runs in 39 Tests for England\r\nEngland men's cricketers are \"relatively relaxed\" about travelling to Australia for the Ashes in December, sa… [+1631 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Taliban officials celebrate cricket win but Kabul streets subdued - Reuters",
            "description": "Taliban officials took to social media on Monday to congratulate the Afghan national cricket team for winning a match in the Twenty20 World Cup, but there was a muted response on the streets of Kabul where such wins were celebrated enthusiastically in the pas…",
            "url": "https://www.reuters.com/world/asia-pacific/taliban-officials-celebrate-cricket-win-kabul-streets-subdued-2021-10-25/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=53",
            "publishedAt": "2021-10-25T19:20:00Z",
            "content": "KABUL, Oct 25 (Reuters) - Taliban officials took to social media on Monday to congratulate the Afghan national cricket team for winning a match in the Twenty20 World Cup, but there was a muted respon… [+2330 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "England's Moeen set to retire from tests - reports - Reuters",
            "description": "England all-rounder Moeen Ali is set to announce his retirement from test cricket, British media reported.",
            "url": "https://www.reuters.com/lifestyle/sports/englands-moeen-set-retire-tests-reports-2021-09-27/",
            "urlToImage": "https://www.reuters.com/resizer/Tb2Qry5kes3ZUBTVBgtuj4emCuc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BZTKW6VSUZIBRKAJ7DRVLC6T6A.jpg",
            "publishedAt": "2021-09-27T00:40:00Z",
            "content": "Cricket - England Nets - Emirates Old Trafford, Manchester, Britain- September 9, 2021 England's Moeen Ali during nets Action Images via Reuters/Jason CairnduffSept 27 (Reuters) - England all-rounder… [+628 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Australia to postpone Afghanistan test this week - official - Reuters",
            "description": "Australia will postpone its test match against Afghanistan indefinitely this week to prompt the Asian nation to \"rethink\" their approach to women's sport, Cricket Tasmania boss Dominic Baker said on Wednesday.",
            "url": "https://www.reuters.com/world/asia-pacific/australia-postpone-afghanistan-test-this-week-official-2021-09-29/",
            "urlToImage": "https://www.reuters.com/resizer/dzY2zotC6tnhoZwWnxgICzDssN8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TEKXOAED7FL5DP4SAUFDKRSFDI.jpg",
            "publishedAt": "2021-09-29T07:27:00Z",
            "content": "Cricket - ICC Cricket World Cup - Afghanistan v West Indies - Headingley, Leeds, Britain - July 4, 2019 Afghanistan fans during the match Action Images via Reuters/Lee SmithMELBOURNE, Sept 29 (Reuter… [+1981 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Narelle Autio & Trent Parke/Magnum",
            "title": "Summation of Force: capturing the magic of cricket – in pictures",
            "description": "The Summation of Force, a film installation by Trent Parke and Narelle Autio, uncovers the essence of cricket through artistic motion studies. Stills reveal a glimpse into the creative process behind the work Continue reading...",
            "url": "https://www.theguardian.com/artanddesign/gallery/2021/oct/01/summation-of-force-capturing-the-magic-of-cricket-in-pictures",
            "urlToImage": "https://i.guim.co.uk/img/media/00be2336ac310209900bf81b05eafbc063ce5e31/0_0_1780_1068/master/1780.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=182769263c445b9ff453c549eefc44a2",
            "publishedAt": "2021-10-01T20:00:43Z",
            "content": "The Summation of Force, a film installation by Trent Parke and Narelle Autio, uncovers the essence of cricket through artistic motion studies. Stills reveal a glimpse into the creative process behind… [+8 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Raf Nicholson at The Spitfire Ground, Canterbury",
            "title": "Tammy Beaumont hits brilliant century as England beat New Zealand in last ODI",
            "description": "<ul><li>Fifth ODI: England 347-5; New Zealand 144</li><li>Beaumont’s eighth ODI century draws standing ovation</li></ul>The England and Wales Cricket Board may have had a troubled relationship with women’s county cricket in recent years – the Women’s County C…",
            "url": "https://amp.theguardian.com/sport/2021/sep/26/england-new-zealand-fifth-womens-one-day-international-match-report",
            "urlToImage": "https://i.guim.co.uk/img/media/69a886a6fb96a33dd4e068b066c70682cbf35d6b/116_186_3238_1943/master/3238.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e085862343407cb7f2f076db948a4342",
            "publishedAt": "2021-09-26T16:52:02Z",
            "content": "The England and Wales Cricket Board may have had a troubled relationship with womens county cricket in recent years the Womens County Championship was abolished in 2019 and the future of the County T… [+3390 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "'Bubble' fatigue, mental health of players at World Cup on ICC radar - Reuters",
            "description": "Cricketers facing mental health issues during the Twenty20 World Cup will have 24-hour access to a psychologist, the International Cricket Council said on Thursday.",
            "url": "https://www.reuters.com/world/india/bubble-fatigue-mental-health-players-world-cup-icc-radar-2021-10-07/",
            "urlToImage": "https://www.reuters.com/resizer/ZGqbQ7O1IALltpj2Giu5XRqXpbs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RQ3B52TK6VP2FPSPRS2O5LOJYI.jpg",
            "publishedAt": "2021-10-07T09:43:00Z",
            "content": "The International Cricket Council (ICC) logo at the ICC headquarters in Dubai, October 31, 2010. REUTERS/Nikhil MonteiroMUMBAI, Oct 7 (Reuters) - Cricketers facing mental health issues during the Twe… [+2535 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Stokes added to England's Ashes squad - Reuters",
            "description": "All-rounder Ben Stokes has been added to England's squad for the Ashes tour of Australia, England's cricket board said on Monday.",
            "url": "https://www.reuters.com/world/uk/stokes-added-englands-ashes-squad-2021-10-25/",
            "urlToImage": "https://www.reuters.com/resizer/s9WCAMTE5ltOX-bNaLu-cL0hBFM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JPCR2IOZGRKR5BHDOISAZH7LYU.jpg",
            "publishedAt": "2021-10-25T08:18:00Z",
            "content": "Cricket - Third One Day International - England v Pakistan - Edgbaston Stadium, Birmingham, Britain - July 13, 2021 England's Ben Stokes Action Images via Reuters/Ed SykesOct 25 (Reuters) - All-round… [+791 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Governing body ICC to switch to inclusive 'batter' from T20 World Cup - Reuters",
            "description": "The International Cricket Council will change \"batsman\" to the gender-neutral term \"batter\" in its playing conditions starting from this month's Twenty20 World Cup, the world governing body said on Thursday.",
            "url": "https://www.reuters.com/lifestyle/sports/governing-body-icc-switch-inclusive-batter-t20-world-cup-2021-10-07/",
            "urlToImage": "https://www.reuters.com/resizer/b5nz4-Fo67l_O8__73wVECQnCY4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NBGGCXNRWRLEJCYC2NM4I3XDXM.jpg",
            "publishedAt": "2021-10-07T11:01:00Z",
            "content": "FILE PHOTO-Cricket - Women - One Day International - England v New Zealand - County Ground, Worcester, Britain - September 19, 2021 General view during the match Action Images via Reuters/Andrew Boye… [+1935 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Papua New Guinea's leap of faith lands World Cup debut - Reuters",
            "description": "Faith has played an important role in the development of cricket in Papua New Guinea and on Sunday it will be repaid when the 'Barramundis' make their Twenty20 World Cup debut against Oman in Al Amerat.",
            "url": "https://www.reuters.com/lifestyle/sports/papua-new-guineas-leap-faith-lands-world-cup-debut-2021-10-15/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=53",
            "publishedAt": "2021-10-15T04:43:00Z",
            "content": "Oct 15 (Reuters) - Faith has played an important role in the development of cricket in Papua New Guinea and on Sunday it will be repaid when the 'Barramundis' make their Twenty20 World Cup debut agai… [+2255 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "Malan, Robinson & Leach get England contracts but Sibley loses his",
            "description": "Dawid Malan, Ollie Robinson and Jack Leach are awarded England central contracts for the first time, but Dom Sibley loses his.",
            "url": "https://www.bbc.co.uk/sport/cricket/58845756",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/13590/production/_97584297_breaking_news.png",
            "publishedAt": "2021-10-08T11:34:30Z",
            "content": "Batter Dawid Malan, seamer Ollie Robinson and spinner Jack Leach have been awarded England central contracts for the first time.\r\nAll-rounder Ben Stokes retains his despite taking an indefinite break… [+1623 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "T20 World Cup: Pakistan hammer India by 10 wickets to claim famous win",
            "description": "Pakistan hammer India by 10 wickets to claim a famous win over their great rivals at the Men's T20 World Cup in Dubai.",
            "url": "https://www.bbc.co.uk/sport/cricket/59030529",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/13FC4/production/_121206818_babar_getty.jpg",
            "publishedAt": "2021-10-24T17:35:58Z",
            "content": "<table>\r\n<tr><td>ICC Men's T20 World Cup, Dubai International Cricket Stadium, Dubai</td></tr><tr><td>India 151-7 (20 overs): Kohli 57 (49), Pant 39; Shaheen 3-31</td></tr><tr><td>Pakistan 152-0 (17.… [+3956 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "England v India: Postponed fifth Test to be held at Edgbaston in July 2022",
            "description": "The postponed Emirates Old Trafford Test between England and India this summer will now be played at Edgbaston in July 2022.",
            "url": "https://www.bbc.co.uk/sport/cricket/59011364",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/13590/production/_97584297_breaking_news.png",
            "publishedAt": "2021-10-22T12:01:01Z",
            "content": "The postponed fifth Test between England and India will be played from 1-5 July 2022 at Edgbaston.\r\nThe series decider, due to be played at Emirates Old Trafford in September, was called off when Ind… [+464 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Andy Bull",
            "title": "Clare Connor: ‘There were lots of sexist jokes … that isn’t without damage’",
            "description": "MCC’s first female president on putting up with sexism, why Lord’s belongs to all and diamond pendant protocolClare Connor has been in cricket ever since she was a little kid on the boundary, watching her dad play at Preston Nomads CC near Devil’s Dyke on the…",
            "url": "https://amp.theguardian.com/sport/2021/oct/17/clare-connor-sexist-jokes-damage-mcc-first-female-president",
            "urlToImage": "https://i.guim.co.uk/img/media/5ffec122cdedc11484a1f4ceeb85c833fc492f49/0_420_6479_3889/master/6479.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e63347247267417aa4256547f3dde459",
            "publishedAt": "2021-10-17T20:11:56Z",
            "content": "Clare Connor has been in cricket ever since she was a little kid on the boundary, watching her dad play at Preston Nomads CC near Devils Dyke on the South Downs. The game got under her skin, in that … [+7971 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "England committed to Ashes after Root confirms participation - report - Reuters",
            "description": "England have committed to touring Australia for the Ashes after players' concerns over COVID-19 conditions were resolved at a meeting between the countries' cricket boards and England captain Joe Root on Tuesday, British media reported.",
            "url": "https://www.reuters.com/lifestyle/sports/england-committed-ashes-after-root-confirms-participation-report-2021-10-06/",
            "urlToImage": "https://www.reuters.com/resizer/lQThwoo0Vs_Iia6jdRtY2cEjvfo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/B7NA5MYCVZNURCESHR2WCWKLCQ.jpg",
            "publishedAt": "2021-10-06T00:57:00Z",
            "content": "Cricket - England Nets - Emirates Old Trafford, Manchester, Britain- September 9, 2021 England's Joe Root during nets Action Images via Reuters/Jason CairnduffMELBOURNE, Oct 6 (Reuters) - England hav… [+2267 chars]"
        }
    ];

      constructor()
      {
        super(); // always right super into it
        console.log("hello i am contructor from news item");
        this.state = {
          articles: this.articles,
          loading: false
        }
      }

      
    render() {
        return (
            <div className="container my-3"> 
                <h2 className="text-center">Turbo News - Top Headlines</h2>
                <br/>
               
                <div className="row">
                {this.state.articles.map((element)=>{

                    return (<div className="col-md-4" key={element.url} >
                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage}
                    newsUrl={element.url} 
                    />
                    </div>
                    )
                })}
                    

                </div>
            </div>
        )
    }
}

export default News
