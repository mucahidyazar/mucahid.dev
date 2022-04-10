/* eslint-disable @next/next/inline-script-id */
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Link from 'next/link'
import Script from 'next/script'
import {useTranslation} from 'next-i18next'
import Image from 'next/image'

import {
  makeArticlesSelector,
  makeSelectCategories,
} from '@/store/blog/selectors'
import {changeLanguage, makeSelectLanguage} from '@/store/settings'

import * as S from './style'

const MainContainer: React.FC = () => {
  const {t, i18n} = useTranslation()
  const dispatch = useDispatch()
  const language = useSelector(makeSelectLanguage)
  const articles = useSelector(makeArticlesSelector)
  const categories = useSelector(makeSelectCategories)

  const changeLanguageHandler = () => {
    const nextLanguage = i18n.language === 'en' ? 'tr' : 'en'
    dispatch(changeLanguage(nextLanguage))
  }

  return (
    <S.MainContainer>
      <S.Brand>
        <Link href="/" passHref>
          <S.BrandText>
            mucahid<S.BrandColor>.dev</S.BrandColor>
          </S.BrandText>
        </Link>
      </S.Brand>

      <S.Slogan>{t('slogan')}</S.Slogan>
      <S.Intro>
        <S.IntroText>{t('intro1')}</S.IntroText>
        <S.IntroText>{t('intro2')}</S.IntroText>
      </S.Intro>

      <S.FindMeOn>
        <S.FindMeOnText>{t('findMeOn')}</S.FindMeOnText>
        <S.SocialLinks>
          <S.SocialLink
            href="https://www.linkedin.com/in/mucahidyazar/"
            target="_blank"
          >
            <S.SocialLinkText>Linkedin</S.SocialLinkText>
            <S.SocialLinkIcon name="right-up-arrow" size={6} />
          </S.SocialLink>
          <S.SocialLink href="https://github.com/mucahidyazar" target="_blank">
            <S.SocialLinkText>Github</S.SocialLinkText>
            <S.SocialLinkIcon name="right-up-arrow" size={6} />
          </S.SocialLink>
          <S.SocialLink href="https://twitter.com/mucahidyazar" target="_blank">
            <S.SocialLinkText>Twitter</S.SocialLinkText>
            <S.SocialLinkIcon name="right-up-arrow" size={6} />
          </S.SocialLink>
          <S.SocialLink
            href="https://www.instagram.com/mucahidyazar"
            target="_blank"
          >
            <S.SocialLinkText>Instagram</S.SocialLinkText>
            <S.SocialLinkIcon name="right-up-arrow" size={6} />
          </S.SocialLink>
        </S.SocialLinks>
      </S.FindMeOn>

      <S.Articles>
        <S.ArticlesLogos>
          {categories.map(tag => (
            <S.ArticlesLogo key={tag}>{tag}</S.ArticlesLogo>
          ))}
        </S.ArticlesLogos>

        <S.ArticlesList>
          {articles.map(({id, title, description, slug}) => (
            <Link key={slug} href={`/blog/${slug}`} passHref>
              <S.Article key={id}>
                <S.ArticleTitle>{title}</S.ArticleTitle>
                <S.ArticleDescription>{description}</S.ArticleDescription>
              </S.Article>
            </Link>
          ))}
        </S.ArticlesList>
      </S.Articles>

      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(){for(var t="https://cdn.oncehub.com",e=document.querySelectorAll("[data-so-page]"),r=!1,s=0;s<e.length;s++)if(e[s].getAttribute("data-delay")){r=!0;break}function o(){var e=document.createElement("script");e.src=t+"/mergedjs/ScheduleOnceEmbed.js",e.onload=a,document.getElementsByTagName("head")[0].appendChild(e)}function a(){var t=document.querySelectorAll("[data-so-page]");if(t)for(var e=0;e<t.length;e++){var r=t[e];if("true"!=r.getAttribute("data-so-done")){var s=r.getAttribute("data-so-qry-prm");function o(t){var e=soe.getAttr(r,"data-psz");return e&&2==e.length&&-1!=["00","01","11","10"].indexOf(e)||(e="00"),[("1"==e[0]).toString(),("1"==e[1]).toString()]}function a(t,e){return t&&(t=t.trim()),!t||-1==t.indexOf("px")&&isNaN(t)?[e,0]:[t.replace("px",""),1]}if(s=s?"&"===s[0]?s:"&"+s:"",-1!=r.id.toUpperCase().indexOf("SOIDIV_")){var n=soe.getAttr(r,"data-so-page"),d="1px",i="#d8d8d8",g=soe.getAttrPrms(r,"data-style","border",d+" solid "+i).split(" solid #");try{d=g[0],i=g[1].trim()}catch(t){d="1px",i="#d8d8d8"}var l=a(soe.getAttr(r,"data-height"),"550"),f=(c=o())[0],m=c[1],A=soe.getAttrPrms(r,"data-style","min-width","290px"),p=soe.getAttrPrms(r,"data-style","max-width","900px");soe.setAttrPrms(r,"data-style",{"min-width":A,"max-width":p}),soe.AddEventListners(soe.CfURL+"/"+n+"?brdr="+d+i+"&dt=&em=1"+s,n,l[0]+"px","100% !important",f,m,!!l[1])}else if(-1!=r.id.toUpperCase().indexOf("SOIBTN_")){n=soe.getAttr(r,"data-so-page");var c,u=soe.getAttr(r,"value","Schedule an Appointment"),h=soe.getStyl(r,"background","#006ADF"),x=soe.getStyl(r,"color","#ffffff");f=(c=o())[0],m=c[1],l=a(soe.getAttr(r,"data-height"),"580");soe.InitButton(soe.CfURL+"/"+n,n,u,h,x,f,!!l[1],l[0]+"px",s),soe.AddEventListners("","","","",f,m,!!l[1]),r.setAttribute("onclick",'return soe.toggleLightBox("'+n+'")')}else if(-1!=r.id.toUpperCase().indexOf("SOIWGT_")){n=soe.getAttr(r,"data-so-page");var v="data-wgt-style",P=soe.getAttrPrms(r,v,"ttl","Free 1-on-1 Consultation"),b=soe.getAttrPrms(r,v,"bg","333333"),w=soe.getAttrPrms(r,v,"align","right"),y=soe.getAttrPrms(r,v,"clr","ffffff"),O=(l=a(soe.getAttr(r,"data-height"),"580"),soe.getAttr(r,"data-target")),S=soe.getAttr(r,"data-tmp","177.178").split("."),C=S[0],E=S.length>1?S[1]:"178",U=soe.getAttr(r,"data-pos","132"),L=!1;if(3!=U.length)L=!0;else{for(var _=0;_<U.length;_++)-1==["0","1","2","3"].indexOf(U[_])&&(L=!0);("0"!=U[0]&&(U[0]==U[1]||U[0]==U[2])||"0"!=U[1]&&U[1]==U[2])&&(L=!0)}L&&(U="132");var I="data-btn-style",F=soe.getAttrPrms(r,I,"ttl","Schedule Online"),B=soe.getAttrPrms(r,I,"txt","Free 1-on-1 Consultation"),D=soe.getAttrPrms(r,I,"bg","006DAF"),N=soe.getAttrPrms(r,I,"clr","ffffff"),k="data-phn-style",q=soe.getAttrPrms(r,k,"ttl","Call Us"),R=soe.getAttrPrms(r,k,"phn1"),T=soe.getAttrPrms(r,k,"phn2",""),j="data-eml-style",W=soe.getAttrPrms(r,j,"ttl","Email Us"),z=soe.getAttrPrms(r,j,"txt","Send"),G=soe.getAttrPrms(r,j,"bg","006DAF"),V=soe.getAttrPrms(r,j,"clr","ffffff"),H=soe.getAttr(r,"data-email"),J=H?H.substring(H.indexOf("(")+1,H.indexOf(")")):"",K=H?H.substr(0,H.indexOf(" (")):"",M=soe.getAttr(r,"data-message");soe.InitWidget(soe.CfURL+"/"+n,n,B,D,N,U[0]+","+U[1]+","+U[2],q,R+"_so_phone_sep_"+T,W,z,V,G,J,K,M,C,E,F,P,y,b,w,"",!!l[1],l[0],O,s),soe.AddEventListners()}r.setAttribute("data-so-done","true")}}}!function(t){if("complete"!==document.readyState&&t)if(window.attachEvent)window.attachEvent("onload",o);else if(window.onload){var e=window.onload;window.onload=function(t){e(t),o()}}else window.onload=o;else o()}(r)}();
          `,
        }}
      />
      <S.BookMe>
        <S.BookMeTitle>{t('bookMe')}</S.BookMeTitle>
        <S.BookMeCalender
          id="SOIDIV_MucahidYazar"
          data-so-page="MucahidYazar"
          data-height="540"
          data-psz="00"
        />
      </S.BookMe>

      <S.PagesLinks>
        <S.PagesLink>
          <Link href="/home">Home</Link>
        </S.PagesLink>
        <S.PagesLink>
          <Link href="/media">Media</Link>
        </S.PagesLink>
        <S.PagesLink>
          <Link href="/contact">Contact</Link>
        </S.PagesLink>
      </S.PagesLinks>

      <S.Divider />

      <S.Copyright>
        <S.CopyrightLanguage onClick={changeLanguageHandler}>
          <Image
            src={`/images/${language}.png`}
            alt="language"
            width={16}
            height={16}
          />
        </S.CopyrightLanguage>{' '}
        Made with <S.CopyrightHeart>❤</S.CopyrightHeart> by
        <S.CopyrightName>Mucahid Yazar</S.CopyrightName>
      </S.Copyright>
    </S.MainContainer>
  )
}

export default MainContainer
